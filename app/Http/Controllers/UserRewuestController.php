<?php

namespace App\Http\Controllers;

use App\Exceptions\AppException;
use App\Http\Requests\Post\AddPostRequest;
use App\Http\Requests\Post\EditPostRequest;
use App\Http\Requests\Request\AddRequest;
use App\Models\Post;
use App\Models\PostPhoto;
use App\Models\User;
use App\Models\UserFile;
use App\Models\UserPost;
use App\Models\UserPostPhoto;
use App\Models\UserRequest;
use App\Models\UserRequestMessage;
use App\Models\Users\Admin;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;

class UserRewuestController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth')->except('store', 'destroy', 'update');
        $this->middleware('auth:clients')->only('store', 'destroy', 'update');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $query = $this->isVillageUser() ? Auth::user()->requests() : UserRequest::query();
        if (!$this->isLibrarian() && request()->has('role')){
            $query->where('role', (int) request('role'));
        }else if($this->isAdmin() || $this->isLibrarian()) {
            $query->where('role', Auth::user()->role);
        }

        $query->with(['user' => function($q) {
            $q->selectRaw('id, name, last_name, second_name');
        }]);
        return $this->response([
            'Список запросов',
            $query
                ->paginate(((int) \request('per_page'))?: null)
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(AddRequest $request)
    {
        $p = UserRequest::query()->newModelInstance($request->validated());
        $p->user()->associate($request->user());
        $p->type_id = $request->type;
        $p->save();
        return $this->response(['Запрос успешно сформирован', $p]);
    }

    /**
     * Display the specified resource.
     *
     * @param UserPost $userRequest
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(UserRequest $userRequest)
    {
        $this->checkPostAccess($userRequest);
        $userRequest->load('user');
        $userRequest->user = $userRequest->user->only('name', 'last_name', 'second_name');
        return $this->response(['Информация о запросе', $userRequest]);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $r, UserRequest $request)
    {
        $this->checkPostAccess($request);
        if ($r->has('post_photos')) {
            $files = [];
            /** @var UploadedFile $photo */
            foreach ($r->post_files as $file) {
                $files[] = $pm = new UserFile();
                $pm->file = '/storage/'. (Storage::disk('public')->put('user_files/'.Carbon::now()->format('Y/m/d/'), $file));
            }
            if ($files) $request->user->files()->saveMany($files);
        }
        return $this->response(['Изменения сохранены', $request]);
    }

    protected function checkPostAccess(UserRequest $userRequest) : void
    {
        if($userRequest->user_id == Auth::id()
            || $this->isLibrarian() && $userRequest->role === User::LIBRARIAN_ROLE
            || $this->isAdmin()) return;
         throw new AppException('Доступ запрещен', 403);
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(UserRequest $request)
    {
        $this->checkPostAccess($request);
        $request->delete();
        return $this->response([
            'Удалено',
            true
        ]);
    }

    public function messages(UserRequest $request) : JsonResponse
    {
        $this->checkPostAccess($request);

        $query = $request->messages();

        $query->with(['user' => function($q) {
            $q->selectRaw('id, name, last_name, second_name');
        }]);
        return $this->response([
            '',
            $query
                ->paginate(((int) \request('per_page'))?: null)
        ]);

    }
    public function send(UserRequest $request): JsonResponse
    {
        $this->checkPostAccess($request);
        $this->validate(\request(), [
            'text' => 'required|string|min:1|max:255'
        ]);
        $last = $request->messages()->take(5)->get()->where('user_id', Auth::id())->count();
        if ($last >= 5) throw new AppException('Вы не можете отправить больше 5 сообщений подряд');
        $m = new UserRequestMessage(\request()->only('text'));
        $m->user()->associate(Auth::user());
        $request->messages()->save($m);
        return $this->messages($request);
    }
}

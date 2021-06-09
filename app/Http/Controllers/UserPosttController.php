<?php

namespace App\Http\Controllers;

use App\Exceptions\AppException;
use App\Http\Requests\Post\AddPostRequest;
use App\Http\Requests\Post\EditPostRequest;
use App\Models\Post;
use App\Models\PostPhoto;
use App\Models\User;
use App\Models\UserPost;
use App\Models\UserPostPhoto;
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

class UserPosttController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth')->except('store', 'destroy');
        $this->middleware('auth:clients')->only('store', 'destroy');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $userId = Auth::id();
        $likesRaw = <<<SQL
            (select count(distinct user_id) from user_post_likes ul where ul.user_post_id = user_posts.id) 
SQL;
        $query = \request('mode') === 'me' ? Auth::user()->posts() : UserPost::query();
        $query->whereRaw('(state <> ? or (state = ? and updated_at > ?))',
            [UserPost::STATE_CONFIRMED, UserPost::STATE_PROCESSED, Carbon::now()->subWeek()]);
        return $this->response([
            'Список жалоб',
            $query->with(['photos', 'author' => function($q) {
                $q->selectRaw('id, name, last_name, second_name');
            }])
                ->orderByRaw(Auth::user()->role == User::VILLAGE_ROLE ? 'id desc' : ($likesRaw . ' desc')
            )
                ->selectRaw('* ,' .($likesRaw . ' as likes') . <<<SQL
                , exists (select 1 from user_post_likes ul where ul.user_post_id = user_posts.id and ul.user_id = ${userId}) as user_like
SQL
 )
                ->paginate(((int) \request('per_page'))?: null)
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(AddPostRequest $request)
    {
        $p = UserPost::query()->newModelInstance($request->validated());
        $p->author()->associate($request->user());
        $p->save();
        return $this->response(['Жалоба успешно опубликована', $p]);
    }

    /**
     * Display the specified resource.
     *
     * @param UserPost $post
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(UserPost $post)
    {
        $post->load('photos', 'author');
        $post->author = $post->author->only('name', 'last_name', 'second_name');
        return $this->response(['Описание жалобы', $post]);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(EditPostRequest $request, UserPost $post)
    {
        $this->checkPostAccess($post);
        if ($post->created_at->lt(Carbon::now()->subDays(1)))
            throw new AppException('Обращение доступно для редактирования только в первые 24 часа', 406);
        $post->fill($v = $request->validated());
        if (Arr::has($v, 'post_photos')) {
            $photos = [];
            /** @var UploadedFile $photo */
            foreach ($v['post_photos'] as $photo) {
                $photos[] = $pm = new UserPostPhoto();
                $pm->file = '/storage/'. (Storage::disk('public')->put('user_posts/'.Carbon::now()->format('Y/m/d/'), $photo));
            }
            if ($photos) $post->photos()->saveMany($photos);
        }
        $post->save();
        return $this->response(['Изменения сохранены', $post]);
    }

    protected function checkPostAccess(UserPost $post) : void
    {
        if($post->user_id !== Auth::id()) throw new AccessDeniedHttpException('Доступ запрещен');
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(UserPost $post)
    {
        $this->checkPostAccess($post);
        $post->delete();
        return $this->response([
            'Удалено',
            true
        ]);
    }

    public function actions(UserPost $post, string $action) : JsonResponse
    {
        switch ($action) {
            case 'confirm':
                $this->checkPostAccess($post);
                $post->state = UserPost::STATE_CONFIRMED;
                $post->save();
                return $this->response(['Статус изменен', $post]);
            case 'like':
                $post->likes()->syncWithoutDetaching([Auth::id()]);
                break;
            case 'dislike':
                $post->likes()->detach([Auth::id()]);
                break;
            case 'accept' :
                if (!$this->isAdmin()) $this->notFound();
                $this->validate(\request(), [
                    'comment' => 'required|string|min:10',
                ]);
                $post->state = UserPost::STATE_PROCESSED;
                $post->comment = \request('comment');
                $post->save();
                return $this->response(['Статус изменен', $post]);
                break;
            default: $this->notFound();
        }
        return $this->response([null]);
    }
}

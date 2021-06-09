<?php

namespace App\Http\Controllers;

use App\Http\Requests\Post\AddPostRequest;
use App\Http\Requests\Post\EditPostRequest;
use App\Models\Post;
use App\Models\PostPhoto;
use App\Models\UserPost;
use App\Models\UserPostPhoto;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

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
        return $this->response([
            'Список жалоб',
            UserPost::with(['photos', 'author' => function($q) {
                $q->selectRaw('id, name, last_name, second_name');
            }])
                ->orderBy('id', 'desc')
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

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Post $post)
    {
        $post->delete();
        return $this->response([
            'Удалено',
            true
        ]);
    }
}

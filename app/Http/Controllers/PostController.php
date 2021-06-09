<?php

namespace App\Http\Controllers;

use App\Http\Requests\Post\AddPostRequest;
use App\Models\Post;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class PostController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:admins')->only('store', 'update', 'destroy');
    }

    public function index() : JsonResponse
    {

    }
    public function store(AddPostRequest $request) : JsonResponse
    {
        $p = Post::query()->newModelInstance($request->validated());
        $p->author()->associate($request->user());
        $p->save();
        return $this->response(['Новость успешно опубликована', $p]);
    }
    public function show(Post $post) : JsonResponse
    {
        return $this->response(['Подробности новости', $post]);
    }
    public function update() : JsonResponse
    {

    }
    public function destroy() : JsonResponse
    {

    }
}

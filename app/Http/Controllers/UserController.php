<?php

namespace App\Http\Controllers;

use App\Http\Requests\User\UserEditRequest;
use App\Http\Requests\User\UserFilterRequest;
use App\Models\User;
use Illuminate\Support\Arr;

class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:admins');
    }

    /**
     * @param UserFilterRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(UserFilterRequest $request)
    {
        $query = $request->prepareQuery(User::query())->orderBy('id');
        return $this->response([trans('responses.controllers.user.index'),
            $query->paginate(((int)$request->input('per_page')) ?: null)
        ]);
    }
    public function show(int $user) {
        return $this->response(['User data', User::findOrFail($user)]);
    }

    public function update(UserEditRequest $request, User $user) {
        if ($request->user('admins') && $request->has('curator')) {
            if ($request->curator) {
                $user->role |= User::CURATOR_ROLE;
            } else {
                $user->role ^= User::CURATOR_ROLE;
            }
        }
        $user->fill($request->validated());
        $block = $user->isDirty('blocked');
        $user->save();
        if ($user->blocked) {
            foreach ($user->tokens()->get() as $token) {
                $token->revoke();
            }
        }
        return $this->response([
            $block
                ? (!$user->blocked ? 'Пользователь разблокирован' : 'Пользователь заблокирован')
                : 'Данные сохранены',
            $user
        ]);
    }
}

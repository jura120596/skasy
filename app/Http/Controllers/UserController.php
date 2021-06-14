<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserFilterRequest;
use App\Models\User;
use Illuminate\Http\Request;

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
        $query = $request->prepareQuery(User::query());
        return $this->response([trans('responses.controllers.user.index'),
            $query->paginate(((int)$request->input('per_page')) ?: null)
        ]);
    }

    public function update(User $user) {
        $user->blocked = !$user->blocked;
        $user->save();
        if ($user->blocked) {
            foreach ($user->tokens()->get() as $token) {
                $token->revoke();
            }
        }
        return $this->response([
            !$user->blocked ? 'Пользователь разблокирован' : 'Пользователь заблокирован'
        ]);
    }
}

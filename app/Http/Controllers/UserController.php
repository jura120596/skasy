<?php

namespace App\Http\Controllers;

use App\Exceptions\AppException;
use App\Http\Middleware\Transaction;
use App\Http\Requests\ApiAuth\UserSignUpRequest;
use App\Http\Requests\User\UserCreateRequest;
use App\Http\Requests\User\UserEditRequest;
use App\Http\Requests\User\UserFilterRequest;
use App\Models\District;
use App\Models\User;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:admins,curators');
        $this->middleware(Transaction::class)->only('store', 'update');
    }

    /**
     * @param UserFilterRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(UserFilterRequest $request)
    {
        $query = User::query();
        if ($this->isAdmin() && ($d = Auth::user()->district)) {
            $ids = array_merge([Auth::user()->district_id],
                ($d ? $d->childs()->get(['id'])->pluck('id')->toArray() : []));
            $query->whereIn('district_id', ($ids));
        } else if ($this->isCurator()) {
            $query
                ->whereRaw('role & ' . User::VILLAGE_ROLE . '> 0')
                ->where('district_id', $request->user()->district_id ?: -1);
        }
        $query = $request->prepareQuery($query)->with(['village', 'district']);
        return $this->response([trans('responses.controllers.user.index'),
            $query->paginate(((int)$request->input('per_page')) ?: null)
        ]);
    }

    public function show(int $user)
    {
        return $this->response(['User data', User::findOrFail($user)]);
    }

    public function store(UserCreateRequest $request)
    {
        $d = Auth::user()->district_id;
        if ($this->isCurator()
            || $d && $d != $request->district_id && District::find($request->district_id)->parent_district_id != $d) throw new AppException('Доступ запрещен', 403);
        $u = User::query()->newModelInstance()->fill($request->validated());
        $u->password = '';
        $u->role = $request->admin ? User::ADMIN_ROLE : User::LIBRARIAN_ROLE;
        $u->save();
        DB::table($u->getTable())->where('id', $u->id)->update([
            'district_id' => $request->district_id,
        ]);
        $u->sendPasswordMail();
        return $this->response(['created', $u]);
    }

    public function update(UserEditRequest $request, User $user)
    {
        if ($request->user('admins') && $request->has('curator')) {
            if ($request->curator == 'true' || $request->curator == '1') {
                $user->role |= User::CURATOR_ROLE;
            } else if (($user->role & User::CURATOR_ROLE) === User::CURATOR_ROLE) {
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

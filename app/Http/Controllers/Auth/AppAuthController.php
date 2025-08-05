<?php

namespace App\Http\Controllers\Auth;

use App\Exceptions\AppException;
use App\Http\Controllers\Controller;
use App\Http\Middleware\Transaction;
use App\Http\Requests\ApiAuth\LoginRequest;
use App\Http\Requests\ApiAuth\ResetPasswordLinkRequest;
use App\Http\Requests\ApiAuth\UserProfileRequest;
use App\Http\Requests\ApiAuth\UserSignUpRequest;
use App\Models\User;
use App\Models\Users\Admin;
use App\Models\Users\Librarian;
use App\Models\Users\VillageUser;
use App\Models\VillageEvent;
use Carbon\Carbon;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Laravel\Passport\PersonalAccessTokenResult;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;

class AppAuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->only(['resetPassword', 'login']);
        $this->middleware('auth:auth-api')->only('logout', 'profile','refresh', 'profileUpdate');
        $this->middleware(Transaction::class)->only(['resetPassword', 'signUp', 'profileUpdate']);
        $this->middleware('throttle:10,1')->only(['resetPassword']);
    }

    /**
     * Get a token via given credentials.
     *
     * @param LoginRequest $request
     * @return \Illuminate\Http\JsonResponse
     * @throws AuthenticationException
     * @throws AppException
     */
    public function login(LoginRequest $request)
    {
        $credentials = request(['email', 'password']);

        if (auth('auth')->attempt($credentials)) {

            /** @var User $user */
            $user = Auth::guard('auth')->id();
            Auth::guard('auth')->logout();
            $user = Admin::find($user) ?? Librarian::find($user) ?? User::findOrFail($user);
            if ($user->isBlocked()) {
                throw new AccessDeniedHttpException('Доступ запрещен.');
            }
            return $this->refresh($user);
        }
        throw new AuthenticationException('Пользователь не существует или пароль неверен');
    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function profile()
    {
        if (($u = Auth::user())->role == User::VILLAGE_ROLE) {
            $u = VillageUser::query()->newModelInstance()->forceFill($u->getAttributes());
        }
        $u->load('village', 'district');
        return $this->response([
            "",
            $u->refresh(),
        ]);
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        Auth::user()->token()->revoke();
        return $this->response(["Сессия завершена", true]);
    }

    /**
     * Refresh a token.
     *
     * @param User $user
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh(?User $user = null)
    {
        $user = $user ?: Auth::user();
        $tokenResult = $user->createToken('Personal Access Token');
        $token = $tokenResult->token;
        if (func_num_args() && request()->remember_me)
            $token->expires_at = Carbon::now()->addWeeks(1);
        else
            $token->expires_at = Carbon::now()->addDays(1);
        $token->save();
        return $this->tokenResponse($tokenResult);
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function tokenResponse(PersonalAccessTokenResult $token)
    {
        return $this->response(['Успешная авторизация', true, [
            'access_token' => $token->accessToken,
            'token_type' => 'Bearer',
            'expires_at' => Carbon::parse(
                $token->token->expires_at
            )->timestamp
        ]]);
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\Response
     * @throws AppException
     */
    public function resetPassword(ResetPasswordLinkRequest $request)
    {
        $user = User::query()->where([
            'email'=> $request->email,
        ])->first();
        if ($user->isBlocked()) {
            throw new AccessDeniedHttpException("Доступ запрещен!");
        }
        $user->sendPasswordMail();
        return $this->response(['Пароль для входа был отправлен на вашу почту']);
    }

    public function signUp(UserSignUpRequest $request) : JsonResponse
    {
        $u = VillageUser::query()->newModelInstance();
        $u->fill($request->validated());
        $u->email = $request->email;
        $u->password = '';
        $u->save();
        $u->sendPasswordMail();
        return $this->response(['Пароль для входа был отправлен на вашу почту']);
    }

    public function profileUpdate(UserProfileRequest $request) : JsonResponse
    {
        /** @var User $u */
        $u = User::query()->findOrFail(Auth::id());
        $u->fill($request->validated());
        if ($f = $request->file('photo')) {
            $u->savePhoto($f);
        }
        if ($pswd = Arr::get($request->validated(), 'password')){
            $u->password = Hash::make($pswd);
        }
        $u->save();
        if ($e = VillageEvent::find($request->village_event_id)) {
            $u->villageEvents()->syncWithoutDetaching($e);
        }
        return $this->profile();
    }

}

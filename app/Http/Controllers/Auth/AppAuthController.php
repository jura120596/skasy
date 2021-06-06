<?php

namespace App\Http\Controllers\Auth;

use App\Exceptions\AppException;
use App\Http\Controllers\Controller;
use App\Http\Middleware\Transaction;
use App\Http\Requests\ApiAuth\LoginRequest;
use App\Http\Requests\ApiAuth\ResetPasswordLinkRequest;
use App\Http\Requests\ApiAuth\ResetPasswordRequest;
use App\Mail\PasswordMail;
use App\Models\User;
use App\Models\Users\Admin;
use App\Models\Users\VillageUser;
use App\Models\Users\Librarian;
use Carbon\Carbon;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;
use Laravel\Passport\PersonalAccessTokenResult;
use Symfony\Component\HttpFoundation\File\Exception\AccessDeniedException;
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
        $this->middleware('auth:auth-api')->only('logout', 'profile','refresh');
        $this->middleware(Transaction::class)->only(['resetPassword']);
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
                throw new AccessDeniedHttpException(trans('responses.exceptions.permissions.default'));
            }
            return $this->refresh($user);
        }
        throw new AuthenticationException(trans('responses.exceptions.login.credentials'));
    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function profile()
    {
        if (($u = Auth::user())->role == User::VILLAGE_ROLE)
            $u = VillageUser::query()->newModelInstance()->forceFill($u->getAttributes());
        return $this->response([
            trans('responses.controllers.login.profile'),
            $u,
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
        return $this->response([trans('responses.controllers.login.logout'), true]);
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
        return $this->respondWithToken($tokenResult);
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken(PersonalAccessTokenResult $token)
    {
        return $this->response([trans('responses.controllers.login.token'), true, [
            'access_token' => $token->accessToken,
            'token_type' => 'Bearer',
            'expires_at' => Carbon::parse(
                $token->token->expires_at
            )->toDateTimeString()
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
            throw new AccessDeniedHttpException(trans('responses.exceptions.permissions.default'));
        }
        $user->sendPasswordMail();
        return $this->response([trans('responses.controllers.login.resetLink')]);
    }

}

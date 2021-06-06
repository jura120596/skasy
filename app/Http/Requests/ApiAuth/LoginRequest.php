<?php

namespace App\Http\Requests\ApiAuth;

use App\Http\Requests\AppRequest;
use App\Models\User;

/**
 * Class LoginRequest
 * @package App\Http\Requests\ApiAuth
 * @property string email
 * @property string password
 */
class LoginRequest extends AppRequest
{

    public const MIN_PASSWORD_LENGTH = User::MIN_PASSWORD_LENGTH;
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'email' => 'required|email',
            'password' => 'required|min:' . self::MIN_PASSWORD_LENGTH
        ];
    }
}

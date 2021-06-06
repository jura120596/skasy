<?php

namespace App\Http\Requests\ApiAuth;

use App\Http\Requests\AppRequest;
use App\Models\CanAuthUser;
use App\Models\User;

/**
 * @property string email
 * @property string password
 * @property string token
 */
class ResetPasswordRequest extends AppRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'email' => 'required|email|exists:users',
            'password' => 'required|string|confirmed|min:'.User::MIN_PASSWORD_LENGTH,
            'token' => 'required_with:password|string',
        ];
    }
}

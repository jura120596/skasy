<?php

namespace App\Http\Requests\ApiAuth;

use App\Http\Requests\AppRequest;
use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;

class UserSignUpRequest extends AppRequest
{
    public const FIO_PATTERN = '^([А-ЯЁЙ][а-яёй\-]+){1,3}$';

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function requiredRules(): array
    {
        return [
            'email' => 'string|email|unique:users',
            'name' => 'string|min:2|regex:/'.self::FIO_PATTERN . '/u',
            'second_name' => 'string|min:2|regex:/'.self::FIO_PATTERN . '/u',
            'accept' => 'boolean|in:1,true,TRUE',
            'phone' => 'digits:10|unique:users',
        ];
    }
    public function sometimesRules(): array
    {
        return [
            'last_name' => 'string|regex:/'.self::FIO_PATTERN . '/u|nullable'
        ];
    }

    public function messages()
    {
        return [
        ];
    }
}

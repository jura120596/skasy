<?php

namespace App\Http\Requests\ApiAuth;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Arr;

class UserProfileRequest extends UserSignUpRequest {
    public function requiredRules(): array
    {
        return [];
    }
    public function sometimesRules(): array
    {
        return Arr::except(array_merge(parent::requiredRules(), parent::sometimesRules(), [
            'password' => 'string|min:'.User::MIN_PASSWORD_LENGTH.'|confirmed' .
                '|regex:/.*[a-z].*/|regex:/.*[0-9].*/|regex:/.*[\W\D\S].*/',
        ]), ['email', 'accept']);
    }

}

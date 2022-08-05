<?php
/**
 * Created by PhpStorm.
 * User: jura120596
 * Date: 8/5/22
 * Time: 2:19 PM
 */

namespace App\Http\Requests\User;


use App\Http\Requests\ApiAuth\UserSignUpRequest;
use App\Http\Requests\AppRequest;

class UserEditRequest extends UserSignUpRequest
{
    public function requiredRules(): array
    {
        return [];
    }

    public function sometimesRules(): array
    {
        return ([
                'email' => parent::requiredRules()['email'] . ',email,' . $this->route()->parameter('user')->id . ',id',
                'phone' => parent::requiredRules()['phone'] . ',phone,' . $this->route()->parameter('user')->id . ',id',
                'points' => 'int|min:0',
                'card_id' => 'sometimes|string|nullable',
                'blocked' => 'sometimes|boolean',
                'curator' => 'sometimes|boolean',
            ] +
            parent::sometimesRules() +
            parent::requiredRules());
    }
}
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
        $id = $this->route()->parameter('user')? $this->route()->parameter('user')->id : -1;
        return ([
                'email' => parent::requiredRules()['email'] . ',email,' . $id . ',id',
                'phone' => parent::requiredRules()['phone'] . ',phone,' . $id . ',id',
                'points' => 'int|min:0',
                'card_id' => 'sometimes|string|nullable|unique:users,card_id,' . $id . ',id',
                'blocked' => 'sometimes|boolean',
                'curator' => 'sometimes|boolean',
            ] +
            parent::sometimesRules() +
            parent::requiredRules());
    }
}

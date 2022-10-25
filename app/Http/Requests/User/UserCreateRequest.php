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
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Auth;

class UserCreateRequest extends UserEditRequest
{
    public function requiredRules(): array
    {
        return Arr::except(parent::sometimesRules(), [
            'curator',
            'village_id',
            'district_id',
            'address',
            'photo',
            'accept',
        ]);
    }

    public function sometimesRules(): array
    {
        $d = Auth::user()->district_id;
        return ([
                'curator' => 'sometimes|boolean',
                'admin' => 'sometimes|boolean',
                'librarian' => 'sometimes|boolean',
                'district_id' => 'int|nullable|' . ($d && $this->input('district_id',-1)!==$d ? 'exists:districts,id,parent_district_id,'.$d : ''),
            ]);
    }
}

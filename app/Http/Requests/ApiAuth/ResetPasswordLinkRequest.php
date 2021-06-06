<?php

namespace App\Http\Requests\ApiAuth;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Arr;

class ResetPasswordLinkRequest extends ResetPasswordRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return Arr::only(parent::rules(), ['email']);
    }
}

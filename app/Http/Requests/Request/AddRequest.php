<?php

namespace App\Http\Requests\Request;

use App\Http\Requests\AppRequest;
use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;

class AddRequest extends AppRequest
{
    public function requiredRules(): array
    {
        return [
            'text' => 'string|min:10|max:1000',
            'role' => 'in:'.User::LIBRARIAN_ROLE.','.User::ADMIN_ROLE,
            'type_id' => 'exists:user_request_types,id'
        ];
    }
    public function messages()
    {
        return [
            'type.required' => 'Выберите значение из списка',
        ];
    }
}

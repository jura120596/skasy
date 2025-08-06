<?php

namespace App\Http\Requests\Post;

use App\Http\Requests\AppRequest;
use Illuminate\Foundation\Http\FormRequest;

class AddPostRequest extends AppRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function requiredRules(): array
    {
        return [
            'title' => 'string|min:10|max:50',
            'description' => 'string|min:20'
        ];
    }

    public function messages()
    {
        return [
            'description.min' => 'Слишком короткое описание',
        ];
    }

}

<?php

namespace App\Http\Requests\Post;


class EditPostRequest extends AddPostRequest
{

    public function requiredRules(): array
    {
        return  [];
    }
    public function sometimesRules(): array
    {
        return parent::requiredRules() + [
            'post_photos' => 'array',
            'post_photos.*' => 'image|max:'. (5*1024),
        ];
    }
}

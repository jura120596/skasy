<?php

namespace App\Http\Requests\VillageEvent;

use App\Http\Requests\AppRequest;

class AddVilageEventRequest extends AppRequest
{
    public function requiredRules(): array
    {
        return [
            'title' => 'string|min:10|max:100',
            'place' => 'string|min:10|max:50',
            'date' => 'date_format:d.m.Y H:i',
            'points' => 'int',
        ];
    }

    public function messages()
    {
        return [
            'date.date_format' => 'Требуемый формат 01.01.2021 13:00'
        ];
    }
}

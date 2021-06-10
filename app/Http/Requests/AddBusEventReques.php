<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AddBusEventReques extends AppRequest
{

    public function requiredRules(): array
    {
        return [
            'title' => 'string|min:2|max:100',
            'place' => 'string|min:5|max:50',
            'time' => 'date_format:H:i',
        ];
    }

    public function messages()
    {
        return [
            'date.date_format' => 'Требуемый формат 13:00'
        ];
    }
    public function attributes()
    {
        return [
            'place' => 'остановка',
            'title' => 'маршрут',
            'time' => "время отправления",
        ];
    }
}

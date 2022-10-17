<?php

namespace App\Http\Requests\VillageEvent;



class EditEventRequest extends AddVilageEventRequest
{

    public function requiredRules(): array
    {
        return  [];
    }
    public function sometimesRules(): array
    {
        return parent::requiredRules() + [
            'participant_id' => 'string',
            'participant_card_id' => 'string',
        ];
    }
}

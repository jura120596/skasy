<?php

namespace App\Http\Requests\District;
/**
 * Class DistrictUpdateRequest
 * @package App\Http\Requests\District
 */
class DistrictUpdateRequest extends DistrictCreateRequest
{
    public function sometimesRules(): array
    {
        return parent::requiredRules()+ parent::sometimesRules();
    }
    public function requiredRules(): array
    {
        return [];
    }
}

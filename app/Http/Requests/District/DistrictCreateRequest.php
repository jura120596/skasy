<?php

namespace App\Http\Requests\District;
use Illuminate\Support\Arr;

/**
 * Class DistrictCreateRequest
 * @package App\Http\Requests\District
 */
class DistrictCreateRequest extends DistrictsListRequest
{
    public function sometimesRules(): array
    {
        return [
            'parent_district_id' => 'int|nullable',
        ];
    }
    public function requiredRules(): array
    {
        return Arr::except(parent::sometimesRules(), ['parent_district_id', 'name']) + [
            'name' => 'string'
        ];
    }
}

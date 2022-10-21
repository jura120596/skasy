<?php

namespace App\Http\Requests\District;

use App\Http\Requests\AppRequest;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Foundation\Http\FormRequest;

class DistrictsListRequest extends AppRequest
{
    public function requiredRules(): array
    {
        return [];
    }

    public function sometimesRules(): array
    {
        return [
            'level' => 'int|min:0|max:2',
            'region_id' => 'int',
            'parent_district_id' => 'int|nullable',
        ];
    }
    public function prepareQuery(Builder $query): Builder
    {
        if ($this->has('level')) {
            $query->where($this->only('level'));
        }
        if ($this->has('region_id')) {
            $query->where($this->only('region_id'));
        }
        if ($this->has('parent_district_id')) {
            $query->where($this->only('parent_district_id'));
        }
        return parent::prepareQuery($query);
    }
}

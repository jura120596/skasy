<?php

namespace App\Http\Requests\District;

use App\Http\Requests\AppRequest;
use App\Models\User;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use function Symfony\Component\String\u;

class DistrictsListRequest extends AppRequest
{
    public function requiredRules(): array
    {
        return [];
    }

    public function sometimesRules(): array
    {
        return [
            'name' => 'string|nullable',
            'level' => 'int|min:0|max:2',
            'region_id' => 'int',
            'parent_district_id' => 'int|nullable',
        ];
    }
    public function prepareQuery(Builder $query): Builder
    {
        if (($n = $this->get('name')) && $n!== 'null') {
            $query->where('name', 'like', '%' . $n . '%');
        }
        if ($this->has('level')) {
            $u = Auth::user();
            if ($u && $u->district || (($u ? $u->role : 0) & User::ADMIN_ROLE) == 0) {
                $query->where($this->only('level'));
            }
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

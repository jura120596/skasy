<?php

namespace App\Http\Requests\User;

use App\Http\Requests\AppRequest;
use App\Models\User;
use Illuminate\Database\Eloquent\Builder;

/**
 * Class UserFilterRequest
 * @property string name
 * @package App\Http\Requests\User
 */
class UserFilterRequest extends AppRequest
{
    /**
     * @return array
     */
    public function sometimesRules(): array
    {
        return [
            'name'=> 'string|nullable|max:20',
        ];
    }

    /**
     * @param Builder $query
     * @return Builder
     */
    public function prepareQuery(Builder $query) : Builder
    {

        if (trim($this->name)) $query->where(function ($q) use($query) {
            $name = mb_strtolower(trim($this->name));
            $query->orWhereRaw('lower(name)  like \'%'. $name . '%\'');
            $query->orWhereRaw('lower(second_name)  like \'%'. $name . '%\'');
            $query->orWhereRaw('lower(last_name)  like \'%'. $name . '%\'');
            $query->orWhereRaw('lower(address)  like \'%'. $name . '%\'');
        });

        if ($column = $this->input('sortBy')) {
            switch ($column){
                case 'village_name':
                case 'district_name':
                    $sortDesc = $this->sortDesc === 'false' || !$this->sortDesc;
                    $query->leftJoin('districts', str_replace('_name', '', $column) . '_id', '=', 'districts.id')
                            ->orderBy('districts.name', $sortDesc ? 'desc' : 'asc');
                    return $query;
            }
        }
        return parent::prepareQuery($query);
    }
    public function attributes()
    {
        return [
            'name' => 'имя'
        ];
    }
}

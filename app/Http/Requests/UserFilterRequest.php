<?php

namespace App\Http\Requests;

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
            $name = strtolower(trim($this->name));
            $query->orWhereRaw('lower(name)  like \'%'. $name . '%\'');
            $query->orWhereRaw('lower(second_name)  like \'%'. $name . '%\'');
            $query->orWhereRaw('lower(last_name)  like \'%'. $name . '%\'');
        });
        return parent::prepareQuery($query);
    }
}

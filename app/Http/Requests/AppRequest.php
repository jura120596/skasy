<?php

namespace App\Http\Requests;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Arr;
use Illuminate\Validation\Rule;

class AppRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    public function makeRequiredAllParams(array $rules) : array
    {
        foreach ($rules as $k =>$rule) {
            if (is_string($rule)) $rules[$k] = 'required|' . $rule;
            else if(is_array($rule)) $rules[$k] = array_merge(['required'], $rule);
        }
        return $rules;
    }

    /**
     * @return array
     */
    public function sometimesRules(): array
    {
        return [];
    }

    /**
     * @param Builder $query
     * @return Builder
     */
    public function prepareQuery(Builder $query) : Builder
    {
        if ($column = $this->input('sortBy')) {
            $query->orderBy($column, 'true' === $this->input('sortDesc') ? 'desc' : 'asc');
        }
        return $query;
    }

    /**
     * @return array
     */
    public function requiredRules(): array
    {
        return [];
    }

    /**
     * @return bool
     */
    public function confirmed() : bool
    {
        return (bool) $this->input('form_confirmed', false);
    }
    /**
     * @return array
     */
    public function rules()
    {
        return [
            'form_confirmed' => [Rule::in([true,1, 'true'])],
        ] + array_merge(static::sometimesRules(), $this->makeRequiredAllParams(static::requiredRules()));
    }

    public function validated()
    {
        return Arr::except(parent::validated(), ['form_confirmed']);
    }

    /**
     * @return array
     */
    public function validateBoolean() : array
    {
        return [Rule::in([true, false, 1, 0, 'true', 'false'])];
    }


}

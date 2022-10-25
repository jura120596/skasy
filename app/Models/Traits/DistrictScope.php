<?php


namespace App\Models\Traits;


use App\Exceptions\AppException;
use App\Models\User;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Auth;

/**
 * Trait DistrictScope
 * @package App\Models\Traits
 * @method Builder byDistrict($onlySelf = false, $withParent = true)
 * @property int|null district_id
 */
trait DistrictScope
{

    public function scopeByDistrict(Builder $q, $onlySelf = false, $withParent = true): Builder
    {

        return $q->where(function (Builder $q) use ($onlySelf, $withParent) {
            $did = Auth::user()->district_id;
            $ids = [$did];
            if($withParent && Auth::user()->district && $id = Auth::user()->district->parent_district_id) {
                $ids[] = $id; //добавляем id муниципального округа
            }
            if ($onlySelf && ($did > 0)) {
                $q->whereIn('district_id', $ids);
            } else if (!$onlySelf) $q->orWhereNull("district_id")
                ->orWhereIn('district_id', $ids);
        });
    }

    public function canDeleteByDistrict($onlyAdmins = true)
    {
        if ($this->user_id && $this->user_id === Auth::id()) return true;
        $r = true;
        $d = Auth::user()->district_id;
        if (Auth::user()->role && User::ADMIN_ROLE) {
            if ($d) {
                $r =  $this->district_id === $d;
            } else {
                $r =  is_null($d);
            }
        } else {
            if ($onlyAdmins) $r = false;
            $r = $d && $this->district_id === $d;
        }
        if (!$r) {
            throw new AppException('Доступ запрещен', 403);
        }
    }
}

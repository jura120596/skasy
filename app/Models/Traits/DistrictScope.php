<?php


namespace App\Models\Traits;


use App\Exceptions\AppException;
use App\Models\User;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Auth;

/**
 * Trait DistrictScope
 * @package App\Models\Traits
 * @method Builder byDistrict($onlySelf = false)
 * @property int|null district_id
 */
trait DistrictScope
{

    public function scopeByDistrict(Builder $q, $onlySelf = false): Builder
    {
        return $q->where(function (Builder $q) use ($onlySelf) {
            if ($onlySelf && (Auth::user()->district_id > 0)) {
                $q->where('district_id', Auth::user()->district_id);
            } else if (!$onlySelf) $q->orWhereNull("district_id")
                ->orWhere('district_id', Auth::user()->district_id);
        });
    }

    public function canDeleteByDistrict($onlyAdmins = true)
    {
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

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class District
 * @package App\Models
 * @property string name
 * @property int level
 * @property int region_id
 * @property int parent_district_id
 */
class District extends Model
{
    use SoftDeletes;
    use HasFactory;
    protected $fillable = [
        'name', 'level', 'region_id', 'parent_district_id',
    ];

    protected $with = ['region'];

    public function region() : BelongsTo
    {
        return $this->belongsTo(Region::class);
    }
    public function childs() : HasMany
    {
        return $this->hasMany(District::class, 'parent_district_id');
    }
}

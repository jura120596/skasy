<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * Class MapObject
 * @package App\Models
 * @property $points
 * @property $client_id
 */
class MapObject extends Model
{
    protected $fillable = [
        'type',
        'name',
        'app_type',
        'coords',
        'color',
        'points',
        'client_id',
    ];
    protected $casts = [
        'app_type'=> 'int',
        'coords'=> 'array',
        'color'=> 'string',
    ];
    public function toArray()
    {
        $toArray = parent::toArray();
        if ($this->type === 'marker') {
            $toArray['lat'] = $toArray['coords']['lat'];
            $toArray['lng'] = $toArray['coords']['lng'];
            $toArray['coords'] = [];
        }
        return $toArray;
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MapObject extends Model
{
    protected $fillable = [
        'type',
        'name',
        'app_type',
        'coords',
        'color',
        'points',
    ];
    protected $casts = [
        'app_type'=> 'int',
        'coords'=> 'array',
        'color'=> 'string',
    ];
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class VillageEvent extends Model
{
    use HasFactory;
    protected $dates = ['date'];
    protected $fillable = [
        'date',
        'place',
        'title',
    ];
    public function author() : BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function toArray()
    {
        $arr = parent::toArray();
        $arr['date']= $this->date->format('d.m.Y H:i');
        return $arr;
    }
}

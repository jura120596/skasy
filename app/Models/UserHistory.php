<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasTimestamps;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserHistory extends Model
{
    use HasFactory, HasTimestamps;
    protected $fillable = [
        'user_id',
        'map_object_id',
        'village_event_id',
        'points',
    ];
    public function mapObject()
    {
        return $this->belongsTo(MapObject::class);
    }
    public function event()
    {
        return $this->belongsTo(VillageEvent::class, 'village_event_id');
    }
    public function toArray()
    {

        $toArray = parent::toArray();
        $toArray['created_at'] = $this->created_at->format('d.m.Y H:i');
        return $toArray;
    }
}

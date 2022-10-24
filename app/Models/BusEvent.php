<?php

namespace App\Models;

use App\Models\Traits\DistrictScope;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class BusEvent extends Model
{
    use HasFactory, DistrictScope;
    protected $dates = ['date'];
    protected $fillable = [
        'time',
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
        $date = Carbon::parse($this->time);
        $arr['color']= Carbon::parse(Carbon::now()->format('H:i'))->diffInHours($date) < 1 ? 'red' : 'green';
        $arr['skip']= Carbon::parse(Carbon::now()->format('H:i'))->gt($date);
        if ($arr['skip']) $arr['color'] = 'gray';
        return $arr;
    }
}

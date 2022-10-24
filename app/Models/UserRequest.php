<?php

namespace App\Models;

use App\Models\Traits\DistrictScope;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\SoftDeletes;

class UserRequest extends Model
{
    use HasFactory, SoftDeletes,DistrictScope;
    protected $fillable =[
        'role',
        'text',
    ];
    protected $with = ['type'];
    public function user() : BelongsTo
    {
        return  $this->belongsTo(User::class);
    }
    public function type() : BelongsTo
    {
        return $this->belongsTo(UserRequestType::class);
    }

    public function messages() : HasMany
    {
        return $this->hasMany(UserRequestMessage::class)->orderBy('created_at', 'desc');
    }

    public function toArray()
    {
        $arr = parent::toArray();
        $arr['date']= $this->created_at->format('d.m.Y H:i');
        $arr['messages']= [];
        return $arr;
    }
}

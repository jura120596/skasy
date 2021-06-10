<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class UserRequestMessage extends Model
{
    use HasFactory;
    protected $fillable =['text'];
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
    public function userRequest() : BelongsTo
    {
        return $this->belongsTo(UserRequest::class);
    }


    public function toArray()
    {
        $arr = parent::toArray();
        $arr['date']= $this->created_at->format('d.m.Y H:i');
        return $arr;
    }
}

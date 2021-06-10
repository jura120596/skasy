<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class UserRequest extends Model
{
    use HasFactory;
    protected $fillable =[
        'type',
        'role',
        'text',
    ];
    public function user() : BelongsTo
    {
        return  $this->belongsTo(User::class);
    }
}

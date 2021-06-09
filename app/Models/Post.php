<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Post extends Model
{
    use HasFactory;
    protected $fillable = [
        'title',
        'description'
    ];
    public function author() : BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }
    public function photos() : HasMany
    {
        return $this->hasMany(PostPhoto::class);
    }
    public function toArray()
    {
        return parent::toArray() + [
            'date' => $this->created_at->format('d.m.Y H:i')
        ];
    }
}

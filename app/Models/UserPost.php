<?php

namespace App\Models;

use App\Models\Users\VillageUser;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * Class UserPost
 * @package App\Models
 * @property int district_id
 */
class UserPost extends Post
{
    public const STATE_OPENED = 0;
    public const STATE_PROCESSED = 8;
    public const STATE_CONFIRMED = 32;
    public function getFillable()
    {
        return array_merge($this->fillable, ['state', 'comment']);
    }

    public function photos(): HasMany
    {
        return $this->hasMany(UserPostPhoto::class, 'user_post_id');
    }

    public function likes() : BelongsToMany
    {
        return $this->belongsToMany(
            User::class,
            'user_post_likes',
            'user_post_id',
            'user_id');
    }
}

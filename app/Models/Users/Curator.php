<?php

namespace App\Models\Users;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Curator extends User
{
    use HasFactory;
    public const ROLE = self::CURATOR_ROLE;
    protected $table = 'users';
}
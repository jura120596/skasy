<?php

namespace App\Models\Users;


use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class VillageUser extends User
{
    use HasFactory;
    public const ROLE = self::VILLAGE_ROLE;
    protected $table = 'users';
}
<?php

namespace App\Models\Users;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Admin extends User
{
    use HasFactory;
    public const ROLE = self::ADMIN_ROLE;
    protected $table = 'users';

}

<?php

namespace App\Models\Users;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Librarian extends User
{
    use HasFactory;
    public const ROLE = self::LIBRARIAN_ROLE;
    protected $table = 'users';
}
<?php

namespace Database\Seeders;

use App\Models\CanAuthUser;
use App\Models\User;
use Faker\Factory;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            [
                'email' => env('ADMIN_USER_EMAIL', 'a@mail.ru'),
                'password' => Hash::make(env('ADMIN_USER_PASSWORD', Str::random(25))),
                'role' => User::ADMIN_ROLE,
                'name' => 'Администратор',
                'second_name' => 'Семенов',
            ],
            [
                'email' => 'l@mail.ru',
                'password' => Hash::make(env('ADMIN_USER_PASSWORD', Str::random(25))),
                'role' => User::LIBRARIAN_ROLE,
                'name' => 'Библиотекарь',
                'second_name' => 'Степанова',
            ],
            [
                'email' => 'u1@mail.ru',
                'password' => Hash::make(env('ADMIN_USER_PASSWORD', Str::random(25))),
                'role' => User::VILLAGE_ROLE,
                'name' => 'Житель',
                'second_name' => 'Первый',
                'phone' => '9279931787',
            ],
            [
                'email' => 'u2@mail.ru',
                'password' => Hash::make(env('ADMIN_USER_PASSWORD', Str::random(25))),
                'role' => User::VILLAGE_ROLE,
                'name' => 'Житель',
                'second_name' => 'Второй',
                'phone' => '9073322129',
            ],
        ]);
    }
}

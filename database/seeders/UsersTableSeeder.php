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
//        $email = Factory::create()->email;
        $email = env('ADMIN_USER_EMAIL', 'jura120596@gmail.com');
        if (DB::table('users')->where(compact('email'))->count()) return;
        DB::table('users')->insert([
            [
                'email' => $email,
                'password' => Hash::make(env('ADMIN_USER_PASSWORD', Str::random(25))),
                'role' => User::ADMIN_ROLE,
                'name' => 'Админ',
                'second_name' => 'Супер',
            ],
        ]);
    }
}

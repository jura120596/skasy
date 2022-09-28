<?php

namespace Database\Seeders;

use App\Models\Post;
use App\Models\PostPhoto;
use App\Models\User;
use App\Models\UserPost;
use App\Models\UserPostPhoto;
use App\Models\UserRequest;
use App\Models\UserRequestMessage;
use App\Models\UserRequestType;
use App\Models\Users\Admin;
use Carbon\Carbon;
use Faker\Factory;
use Illuminate\Database\Seeder;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;

class DataSeed extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        try {
            DB::beginTransaction();
            $this->adds();
            DB::commit();
        } catch (\Throwable $e) {
            DB::rollBack();
            throw $e;
        }
    }
    public function adds(){
        $factory = Factory::create();
        $admins = Admin::get(['id'])->pluck('id')->toArray();
        $users = User::get(['id'])->pluck('id')->toArray();
        $newses = [];
        for ($i = 0; $i < 100; $i++) {
            $newses[] = [
                'user_id' => Arr::random($admins),
                'title' => $factory->title,
                'description' => $factory->text,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ];
        }
        DB::table('posts')->insert($newses);
        $posts = Post::get(['id']);
        foreach ($posts as $p){
            $count  = random_int(1, 3);
            for ($i = 0; $i < $count; $i++) {
                $ph = PostPhoto::orderByRaw('rand()')->first(['file']);
                $p->photos()->save($ph);
            }
        }
        $user_posts = [];
        for ($i = 0; $i < 100; $i++) {
            $user_posts[] = [
                'user_id' => Arr::random($users),
                'title' => $factory->title,
                'description' => $factory->text,
                'state' => $s = random_int(0 ,1) ? (random_int(0, 1) ? 8 : 32) : 0,
                'comment' => $s > 0 ? $factory->title : "",
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ];
        }
        DB::table('user_posts')->insert($user_posts);
        $user_posts = UserPost::get(['id']);
        foreach ($user_posts as $p){
            $count  = random_int(1, 3);
            for ($i = 0; $i < $count; $i++) {
                $ph = UserPostPhoto::orderByRaw('rand()')->first(['file']);
                $p->photos()->save($ph);
            }
            $count  = random_int(1, 10);
            $ul = User::get();
            for ($i = 0; $i < $count && count($ul) > 0; $i++) {
                $u = $ul->get(random_int(0, count($ul)));
                if ($u) $p->likes()->save($u);
            }
        }
        $events = [];
        for ($i = 0; $i < 100; $i++) {
            $events[] = [
                'date' => Carbon::today()
                    ->addMonths(random_int(0,4))
                    ->addDays(random_int(1,25))
                    ->addHours(random_int(0,10)),
                'place' => $factory->address,
                'title' => $factory->title,
                'points' => random_int(0, 100),
                'user_id' => Arr::random($admins),
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ];
        }
        DB::table('village_events')->insert($events);

        $types = [];
        for ($i = 0; $i < 50; $i++) {
            $types[] = [
                'name' => $factory->title
            ];
        }
        DB::table('user_request_types')->insert($types);
        $types = UserRequestType::get(['id'])->pluck('id')->toArray();
        $adrequest = [];
        for ($i = 0; $i < 100; $i++) {
            $adrequest[] = [
                'type_id' => Arr::random($types),
                'user_id' => Arr::random($users),
                'role' => random_int(0, 1) ? User::LIBRARIAN_ROLE : User::ADMIN_ROLE,
                'text' => $factory->text,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ];
        }
        DB::table('user_requests')->insert($adrequest);

        $rl = UserRequest::get();
        foreach ($rl as $r) {
            $c =random_int(3,10);
            for ($i = 0;$i< $c; $i++) {
                $userRequestMessage = (new UserRequestMessage())->forceFill([
                    'text' => $factory->title,
                    'user_id' => random_int(0, 1)
                        ? $r->user_id
                        : Arr::random($admins),
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                ]);
                $r->messages()->save($userRequestMessage);
            }
        }
    }
}

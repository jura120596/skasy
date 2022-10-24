<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddDistrictColumns extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('user_posts', function (Blueprint $t){
            $t->unsignedBigInteger('district_id')->nullable();
        });
        Schema::table('posts', function (Blueprint $t){
            $t->unsignedBigInteger('district_id')->nullable();
        });
        Schema::table('village_events', function (Blueprint $t){
            $t->unsignedBigInteger('district_id')->nullable();
        });
        Schema::table('bus_events', function (Blueprint $t){
            $t->unsignedBigInteger('district_id')->nullable();
        });
        Schema::table('user_requests', function (Blueprint $t){
            $t->unsignedBigInteger('district_id')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {

        Schema::table('user_posts', function (Blueprint $t){
            $t->dropColumn('district_id');
        });
        Schema::table('posts', function (Blueprint $t){
            $t->dropColumn('district_id');
        });
        Schema::table('village_events', function (Blueprint $t){
            $t->dropColumn('district_id');
        });
        Schema::table('bus_events', function (Blueprint $t){
            $t->dropColumn('district_id');
        });
        Schema::table('user_requests', function (Blueprint $t){
            $t->dropColumn('district_id');
        });
    }
}

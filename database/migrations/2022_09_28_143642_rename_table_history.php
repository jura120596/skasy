<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class RenameTableHistory extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('user_map_events', function (Blueprint $table) {
            $table->rename('user_histories');
        });
        Schema::table('user_histories', function (Blueprint $table) {
            $table->dropColumn('map_object_id');
            $table->unsignedBigInteger('village_event_id')->nullable();
        });
        Schema::table('user_histories', function (Blueprint $table) {
            $table->unsignedBigInteger('map_object_id')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('user_map_events', function (Blueprint $table) {
            //
        });
    }
}

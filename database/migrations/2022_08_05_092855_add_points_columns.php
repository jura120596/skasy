<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddPointsColumns extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('village_events', function (Blueprint $table) {
            $table->integer('points')->default(0);
        });
        Schema::table('users', function (Blueprint $table) {
            $table->integer('points')->default(0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('village_events', function (Blueprint $table) {
            $table->dropColumn('points');
        });
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('points');
        });
    }
}

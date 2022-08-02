<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMapObjectsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('map_objects', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('coords', '3000');
            $table->integer('points');
            $table->string('type');
            $table->string('app_type')->default('zone');
            $table->string('color')->default('#00ff00');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('map_objects');
    }
}

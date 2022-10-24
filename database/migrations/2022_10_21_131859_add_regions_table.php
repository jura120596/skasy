<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddRegionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('regions', function (Blueprint $t) {
            $t->id();
            $t->string('name');
            $t->string('code', 3)->nullable();
            $t->timestamps();
            $t->softDeletes();
        });
        Schema::create('districts', function (Blueprint $t) {
            $t->id();
            $t->string('name');
            $t->unsignedBigInteger('region_id');
            $t->mediumInteger('level')->default(1);
            $t->unsignedBigInteger('parent_district_id')->nullable();
            $t->foreign('region_id')
                ->references('id')
                ->on('regions')
                ->onDelete('cascade')
                ->onUpdate('cascade');
            $t->timestamps();
            $t->softDeletes();
        });
        \Illuminate\Support\Facades\Artisan::call('db:seed --class=RegionSeeder');
        Schema::table('users', function (Blueprint $t){
            $t->unsignedBigInteger('region_id')->nullable();
            $t->unsignedBigInteger('district_id')->nullable();
            $t->unsignedBigInteger('village_id')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $t){
            $t->dropColumn('region_id');
            $t->dropColumn('district_id');
            $t->dropColumn('village_id');
        });
        Schema::drop('districts');
        Schema::drop('regions');
    }
}

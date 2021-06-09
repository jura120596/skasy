<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserPostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::dropIfExists('user_posts');
        Schema::create('user_posts', function (Blueprint $table) {
            $table->id();
            $table->string('title', 40);
            $table->text('description');
            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')
                ->references('id')
                ->on('users')
                ->onDelete('cascade')
                ->onUpdate('cascade');
            $table->timestamps();
        });
        Schema::dropIfExists('user_post_photos');
        Schema::create('user_post_photos', function (Blueprint $table) {
            $table->id();
            $table->string('file', 255);
            $table->unsignedBigInteger('user_post_id');
            $table->foreign('user_post_id')
                ->references('id')
                ->on('user_posts')
                ->onDelete('cascade')
                ->onUpdate('cascade');
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
        Schema::dropIfExists('user_posts');
        Schema::dropIfExists('user_post_photos');
    }
}

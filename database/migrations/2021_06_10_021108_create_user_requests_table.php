<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserRequestsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_request_types', function (Blueprint $table){
            $table->id();
            $table->string('name');
        });
        Schema::create('user_requests', function (Blueprint $table) {
            $table->id();
            $table->mediumInteger('role');
            $table->mediumInteger('type_id')->nullable();
            $table->string('text', 1000);
            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')
                ->references('id')
                ->on('users')
                ->onDelete('cascade')
                ->onUpdate('cascade');
            $table->timestamps();
            $table->softDeletes();
        });
        Schema::create('user_request_messages', function (Blueprint $table) {
            $table->id();
            $table->string('text', 255);
            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')
                ->references('id')
                ->on('users')
                ->onDelete('cascade')
                ->onUpdate('cascade');
            $table->unsignedBigInteger('user_request_id');
            $table->foreign('user_request_id')
                ->references('id')
                ->on('user_requests')
                ->onDelete('cascade')
                ->onUpdate('cascade');
            $table->timestamps();
        });
        Schema::create('user_files', function (Blueprint $table) {
            $table->id();
            $table->string('title', 100);
            $table->string('file', 255);
            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')
                ->references('id')
                ->on('users')
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
        Schema::dropIfExists('user_files');
        Schema::dropIfExists('user_request_messages');
        Schema::dropIfExists('user_requests');
        Schema::dropIfExists('user_request_types');
    }
}

<?php

use App\Http\Controllers\Auth\AppAuthController;
use App\Http\Controllers\PosttController;
use App\Http\Controllers\VillageEventController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['prefix' => 'auth' ], function (){
    Route::post('signup', [AppAuthController::class, 'signUp']);
    Route::post('login', [AppAuthController::class, 'login']);
    Route::post('logout', [AppAuthController::class, 'logout']);
    Route::post('refresh', [AppAuthController::class, 'refresh']);
    Route::post('reset', [AppAuthController::class, 'resetPassword']);
    Route::post('profile', [AppAuthController::class, 'profile']);
    Route::put('profile', [AppAuthController::class, 'profileUpdate']);

});

Route::apiResource('post', PosttController::class);
Route::apiResource('user/post', \App\Http\Controllers\UserPosttController::class);
Route::apiResource('event', VillageEventController::class);
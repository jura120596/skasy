<?php

use App\Http\Controllers\Auth\AppAuthController;
use App\Http\Controllers\BusEventController;
use App\Http\Controllers\FileController;
use App\Http\Controllers\PosttController;
use App\Http\Controllers\TypesController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\UserPosttController;
use App\Http\Controllers\UserRewuestController;
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
Route::any('/token/client', [\App\Http\Controllers\Auth\OauthClientsController::class, 'token']);
Route::any('/client/event', [\App\Http\Controllers\PointsController::class, 'arduinoEvent']);
Route::apiResource('post', PosttController::class);
Route::post('/user/post/{post}/{any}', [UserPosttController::class, 'actions'])->where('any', '.*');
Route::apiResource('user/post', UserPosttController::class);
Route::apiResource('user/event', \App\Http\Controllers\UserMapEventController::class);
Route::apiResource('event', VillageEventController::class);
Route::apiResource('bus/event', BusEventController::class);
Route::apiResource('type', TypesController::class);
Route::apiResource('request', UserRewuestController::class);
Route::get('request/{request}/messages', [UserRewuestController::class, 'messages']);
Route::post('request/{request}/messages', [UserRewuestController::class, 'send']);
Route::apiResource('file', FileController::class);
Route::apiResource('user', UserController::class);
Route::apiResource('mapObject', \App\Http\Controllers\MapObjectController::class);

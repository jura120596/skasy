<?php

namespace App\Http\Controllers;

use App\Exceptions\AppException;
use App\Http\Middleware\Transaction;
use App\Models\MapObject;
use App\Models\User;
use App\Models\UserHistory;
use Illuminate\Http\Request;

class PointsController extends Controller
{
    public function __construct()
    {
        $this->middleware('client');
        $this->middleware(Transaction::class);
    }

    public function arduinoEvent(Request $request) {
        $clientId = $request->get('psr')->getAttribute('oauth_client_id');
        $userCardId = $request->get('card_id');
        $mo = MapObject::query()->where(['client_id' => $clientId])->firstOrFail();
        $user = User::query()->whereNotNull('card_id')
            ->where(['card_id' => $userCardId])->firstOrFail();
        if ($user->points >= $mo->points) {
            $user->points -= $mo->points;
            $user->save();
            $user->events()->save(new UserHistory(['points' => $mo->points, 'map_object_id' => $mo->id]));
            return $this->response(['Success event']);
        }
        throw new AppException();
    }
}

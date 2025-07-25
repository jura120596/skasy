<?php

namespace App\Http\Controllers;

use App\Exceptions\AppException;
use App\Http\Middleware\Transaction;
use App\Models\MapObject;
use App\Models\User;
use App\Models\UserHistory;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

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
        if ($userCardId) {
            $parts = explode(' ', $userCardId);
            foreach ($parts as $i => $p) {
                $parts[$i] = str_pad($p, 2, '0', STR_PAD_LEFT);
            }
            $userCardId = implode(' ', $parts);
        }
        $mo = MapObject::query()->where(['client_id' => $clientId])->firstOrFail();
        $user = User::query()->whereBlocked(false)->whereNotNull('card_id')
            ->where(['card_id' => $userCardId])->firstOrFail();
        $recently = UserHistory::where(['user_id' => $user->id, 'map_object_id' => $mo->id])
            ->where('created_at', '>', Carbon::now()->subHours(3))->exists();
        if ($recently) return $this->response([]);
        $updated = User::whereKey($user->id)->where('points', '>', $mo->points)
            ->update(['points' => DB::raw('points - ' . $mo->points)]);
        if (!$updated) {
            return $this->response([], 404);
        }
        $user->events()->save(new UserHistory(['points' => $mo->points, 'map_object_id' => $mo->id]));
        return $this->response(['Success event']);
    }
}

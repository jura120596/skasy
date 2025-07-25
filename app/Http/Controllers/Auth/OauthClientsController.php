<?php

namespace App\Http\Controllers\Auth;


use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Laravel\Passport\Passport;

class OauthClientsController extends Controller
{

    public function token(Request $request)
    {
        $request->validate([
            'client_id' => 'required|string',
            'client_secret' => 'required|string',
        ]);
        Passport::routes();
        $request = Request::create('/oauth/token', 'POST', [
            'grant_type' => 'client_credentials',
            'client_id' =>  $request->client_id,
            'client_secret' => $request->client_secret,
            'scope' => '*',
        ]);
        $response = json_decode(app()->handle($request)->getContent(), true);
        return response(Arr::get($response, 'access_token'));
    }

}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserMapEventController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:auth-api');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $page = \request()->user()->events()
            ->with('mapObject', 'event')
            ->orderBy('id', 'desc')
            ->paginate();
        return $this->response(['user events', $page]);
    }


}

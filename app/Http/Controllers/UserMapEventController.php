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
        return $this->response(['user events', \request()->user()->events()->with('mapObject')->orderBy('id', 'desc')->paginate()]);
    }


}

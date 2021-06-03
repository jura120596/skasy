<?php

namespace App\Http\Controllers;

/**
 * Class VueController
 * @package App\Http\Controllers
 */
class VueController extends Controller
{
    public function index()
    {
        return view('app');
    }
}
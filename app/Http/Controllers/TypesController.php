<?php

namespace App\Http\Controllers;

use App\Http\Requests\AddVilageEventRequest;
use App\Models\UserRequestType;
use App\Models\VillageEvent;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class TypesController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:admins')->except('index');
    }

    public function index() : JsonResponse
    {
        $types = UserRequestType::query()->orderBy('name')->get();
        return $this->response(['types', $types]);
    }

    public function store(Request $request) : JsonResponse
    {
        $this->validate($request, [
            'name' => 'required|string|min:10'
        ]);
        $e = new UserRequestType($request->only('name'));
        $e->save();
        return $this->response(['Тип заявки добавлен', $e]);
    }
    public function destroy(UserRequestType $type) : JsonResponse
    {
        $type->delete();
        return $this->response(['Удалено',true]);
    }

}

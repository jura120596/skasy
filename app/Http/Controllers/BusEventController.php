<?php

namespace App\Http\Controllers;

use App\Exceptions\AppException;
use App\Http\Requests\AddBusEventReques;
use App\Http\Requests\AddVilageEventRequest;
use App\Models\BusEvent;
use App\Models\VillageEvent;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class BusEventController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:admins')->except('index');
    }

    public function index() : JsonResponse
    {
        $events = BusEvent::query()
            ->orderBy('time', 'asc')
            ->byDistrict(true)
            ->get();
        return $this->response(['events', $events]);
    }

    public function store(AddBusEventReques $request) : JsonResponse
    {
        $e = new BusEvent($request->validated());
        $e->author()->associate($request->user());
        $e->district_id = $request->user()->district_id;
        if (!$e->district_id) throw new AppException('Расписание может создать только администратор района');
        $e->save();
        return $this->response(['Расписание добавлено', $e]);
    }
    public function destroy(BusEvent $event) : JsonResponse
    {
        $event->delete();
        $event->canDeleteByDistrict();
        return $this->response(['Удалено',true]);
    }

}

<?php

namespace App\Http\Controllers;

use App\Http\Requests\AddVilageEventRequest;
use App\Models\VillageEvent;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class VillageEventController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:admins')->except('index');
    }

    public function index() : JsonResponse
    {
        $events = VillageEvent::query()->where('date', '>', Carbon::today())
            ->orderBy('date', 'asc')
            ->paginate(((int)\request('per_page'))?:null);
        return $this->response(['events', $events]);
    }

    public function store(AddVilageEventRequest $request) : JsonResponse
    {
        $e = new VillageEvent($request->validated());
        $e->author()->associate($request->user());
        $e->save();
        return $this->response(['Событие добавлено', $e]);
    }
    public function destroy(VillageEvent $event) : JsonResponse
    {
        $event->delete();
        return $this->response(['Событие удалено',true]);
    }

}

<?php

namespace App\Http\Controllers;

use App\Http\Middleware\Transaction;
use App\Http\Requests\VillageEvent\AddVilageEventRequest;
use App\Http\Requests\VillageEvent\EditEventRequest;
use App\Models\VillageEvent;
use Carbon\Carbon;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;

class VillageEventController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:admins,curators')->except('index', 'show');
        $this->middleware(Transaction::class)->only('update');
    }

    public function index() : JsonResponse
    {
        $events = VillageEvent::query()->where('date', '>', Carbon::today()->setTime(0,0,0))
            ->orderBy('date', 'asc')
            ->paginate(((int)\request('per_page'))?:null);
        return $this->response(['events', $events]);
    }

    public function show(VillageEvent $event) : JsonResponse
    {
        $event->load('participants');
        return $this->response(['Событие', $event]);
    }
    public function store(AddVilageEventRequest $request) : JsonResponse
    {
        if ($request->user('curators')) throw new AuthenticationException();
        $e = new VillageEvent($request->validated());
        $e->author()->associate($request->user());
        $e->save();
        return $this->response(['Событие добавлено', $e]);
    }
    public function update(EditEventRequest $request, VillageEvent $event) : JsonResponse
    {
        $validated = $request->validated();
        if ($request->user('curators')) {
            $validated = Arr::only($validated, ['participant_card_id', 'participant_id']);
        }
        $event->update($validated);
        $event->load('participants');
        return $this->response(['Событие изменено', $event]);
    }
    public function destroy(VillageEvent $event) : JsonResponse
    {
        if (request()->user('curators')) throw new AuthenticationException();
        $event->delete();
        return $this->response(['Событие удалено',true]);
    }

}

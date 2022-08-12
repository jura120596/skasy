<?php

namespace App\Http\Controllers;

use App\Models\MapObject;
use Illuminate\Http\Request;

class MapObjectController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:admins')->only(['create', 'update', 'destroy']);
    }

    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        return $this->response(['Objects list', ['data' => MapObject::all()]]);
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        $valid = $this->validate($request, [
            'name' => 'required|string',
            'color' => 'string',
            'coords' => 'required|array',
            'points' => 'int',
            'type' => 'required|string',
        ]);
        $e = new MapObject($valid);
        $e->save();
        return $this->response(['Объект создан', $e]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\MapObject  $mapObject
     * @return \Illuminate\Http\Response
     */
    public function show(MapObject $mapObject)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\MapObject  $mapObject
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, MapObject $mapObject)
    {
        $valid = $this->validate($request, [
            'name' => 'required|string',
            'color' => 'string',
            'coords' => 'required|array',
            'points' => 'int',
            'type' => 'required|string',
        ]);
        $mapObject->fill($valid);
        $mapObject->save();
        return $this->response(['Объект изменен', $mapObject]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\MapObject  $mapObject
     * @return \Illuminate\Http\Response
     */
    public function destroy(MapObject $mapObject)
    {

        return $this->response(['Объект удален', $mapObject->delete()]);
    }
}

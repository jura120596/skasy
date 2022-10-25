<?php

namespace App\Http\Controllers;

use App\Exceptions\AppException;
use App\Http\Requests\AppRequest;
use App\Http\Requests\Post\AddPostRequest;
use App\Models\User;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Auth;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
    /**
     * Return a new response from the application.
     *
     * @param  array    $data
     * @param  int      $status
     * @param  array    $headers
     * @return JsonResponse
     */
    public function response(array $data, int $status = 200, array $headers = []) : JsonResponse
    {
        $result = [
            'message' => Arr::get($data, 0, 'No error'),
            'result' => (bool) Arr::get($data, 1, true),
        ];
        $data = Arr::get($data, 2, Arr::get($data,1));
        if (is_array($data) && isset($data['data'])) {
            $result = array_merge($result, $data);
        } elseif($data instanceof LengthAwarePaginator) {
            $result = array_merge($result, $data->toArray());
        } else {
            $result['data'] = $data;
        }
        return response()->json($result, $status, $headers);
    }

    /**
     * @throws ModelNotFoundException
     */
    public function notFound()
    {
        throw new HttpResponseException($this->response([trans('responses.controllers.not_found'), false], 404));
    }


    public function isAdmin() : bool
    {
        return Auth::user() && ((Auth::user()->role & User::ADMIN_ROLE) > 0);
    }

    public function isLibrarian() : bool
    {
        return Auth::user() && ((Auth::user()->role & User::LIBRARIAN_ROLE) > 0);
    }

    public function isVillageUser() : bool
    {
        return Auth::user() && ((Auth::user()->role & User::VILLAGE_ROLE) > 0);
    }
    public function isCurator() : bool
    {
        return Auth::user() && ((Auth::user()->role & User::CURATOR_ROLE) > 0);
    }

    /**
     * @param AppRequest $request
     * @throws AppException
     */
    public function checkDistrict($request)
    {
        if (!($d = $request->user()->district_id)) {
            throw new AppException('Вы не можете оставлять обращения, пока не укажете адрес в профиле.', 498);
        }
    }
}

<?php


namespace App\Http\Controllers;


use App\Http\Requests\District\DistrictCreateRequest;
use App\Http\Requests\District\DistrictsListRequest;
use App\Http\Requests\District\DistrictUpdateRequest;
use App\Models\District;
use App\Models\Region;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;

/**
 * Class DistrictController
 * @package App\Http\Controllers
 */
class DistrictController extends Controller
{
    public function __construct()
    {
    }

    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function regions()
    {
        return $this->response(['Список регионов', Region::query()->orderBy('code', 'asc')->paginate(((int) \request('per_page'))?: null)]);
    }

    /**
     * @param DistrictsListRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(DistrictsListRequest $request)
    {
        $query = District::query();
        return $this->response([
            'Список административных районов',
            $request->prepareQuery($query)->paginate()
        ]);
    }

    /**
     * @param District|null $district
     */
    public function checkPermissions(District $district = null)
    {
        $region_id = Auth::user()->region_id;
        if (!$this->isAdmin() || $district && $district->region_id !== $region_id && $region_id) {
            throw new AccessDeniedHttpException('Доступ запрещен.');
        }
    }
    public function store(DistrictCreateRequest $request)
    {
        $this->checkPermissions();
        return $this->response([
            'Район создан',
            District::query()->create([
                'region_id' => Auth::user()->region_id ?: $request->region_id,
            ] + $request->all())
        ]);
    }

    /**
     * @param DistrictUpdateRequest $request
     * @param District $district
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(DistrictUpdateRequest $request, District $district)
    {
        $this->checkPermissions($district);
        $district->forceFill([
                'region_id' => Auth::user()->region_id,
            ] + $request->all());
        $district->save();
        return $this->response([
            'Район изменен',
            $district
        ]);
    }
    /**
     * @param District $district
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(District $district)
    {
        $this->checkPermissions($district);
        return $this->response([
            'Район изменен',
            $district->delete()
        ]);
    }

}

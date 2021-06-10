<?php

namespace App\Http\Controllers;

use App\Exceptions\AppException;
use App\Models\User;
use App\Models\UserFile;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class FileController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:clients');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user  = $this->isAdmin() ? User::findOrFail((int) \request('id')) : Auth::user();
        return $this->response(['files', $user->files()->orderBy('id', 'desc')->paginate(10)]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'title' => 'required|string|min:3',
            'file' => 'required|image|max:' .(2*1024),
        ]);
        if (Auth::user()->files()->count()> 20)
            throw new AppException('Вы не можете загрузить больше 20 файлов');
        $f = new UserFile();
        $f->title = str_replace(' ', '_', Auth::user()->toArray()['full_name'] . ' '. $request->title);
        $f->file = '/storage/'. Storage::disk('public')->put(
            '/files/' .Carbon::now()->format('Y/m/d/'), $request->file('file')
            );
        $f->user_id = Auth::id();
        $f->save();
        return $this->response(['Файл загружен', $f]);

    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $f = Auth::user()->files()->findOrFail((int)$id);
        Storage::disk('public')->delete($f->file);
        $f->delete();
        return response(['Файл удален', true]);
    }
}

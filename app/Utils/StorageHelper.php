<?php
namespace App\Utils;

use Carbon\Carbon;
use Illuminate\Support\Facades\Storage;

class StorageHelper
{
    public static $publicDisk = 'public';
    public const QR_PATH = 'qrcodes';
    public static function monthsDirectory(string $dir = 'user_photos') {
        $nowDate = Carbon::now();
        if ($dir) return $dir . '/' . $nowDate->year . '/' . $nowDate->month;
        return '';
    }
    public static function storageAs($name, $file, $dir = 'user_photos'): string
    {
        $directory = self::monthsDirectory($dir);
        $disk = Storage::disk(self::$publicDisk)->put($name = $directory . '/' . $name, $file);
        return $name;
    }

    public static function delete($path): bool
    {
        return Storage::disk(self::$publicDisk)->delete($path);
    }

    public static function path($path, $dir = ''): string
    {
        return ($disk = Storage::disk(self::$publicDisk))
            ->has($path = ($dir ? self::monthsDirectory($dir) .'/' : '') . $path) ? $path : '';
    }

    public static function getFileInfo($path) : array
    {
        return [
            'url' =>  $path && Storage::disk(self::$publicDisk)->has($path) ? Storage::disk(self::$publicDisk)->url($path) : null,
        ];
    }

}

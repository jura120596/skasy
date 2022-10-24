<?php

namespace App\Models;

use App\Exceptions\AppException;
use App\Mail\PasswordMail;
use App\Models\Traits\DistrictScope;
use App\Utils\Qrator;
use App\Utils\StorageHelper;
use Carbon\Carbon;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;
use Laravel\Passport\HasApiTokens;
use Psy\Util\Str;

/**
 * Class User
 * @package App\Models
 * @mixin  Model
 * @mixin Builder
 * @property int id
 * @property int role
 * @property boolean blocked
 * @property string password
 * @property string address
 * @property int $points
 * @property string $card_id
 * @property string district_id
 * @property string village_id
 * @property string region_id
 * @property Carbon|null password_reset_at
 * @property mixed qr
 * @property mixed photo
 */
class User extends Authenticatable
{
    use HasFactory, Notifiable, HasApiTokens, DistrictScope;
    public const MIN_PASSWORD_LENGTH = 6;
    public const ADMIN_ROLE = 1024;
    public const LIBRARIAN_ROLE = 128;
    public const CURATOR_ROLE = 32;
    public const VILLAGE_ROLE = 1;
    public const ROLE = 0;
    public const ROLES = [
        self::VILLAGE_ROLE => 'Житель',
        self::CURATOR_ROLE => 'Староста',
        self::LIBRARIAN_ROLE => 'Библиотекарь',
        self::ADMIN_ROLE => 'Сотрудник администрации',
    ];

    protected $dates = [
        'password_reset_at',
        'email_verified_at',
    ];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'second_name',
        'last_name',
        'phone',
        'points',
        'blocked',
        'card_id',
        'address',
        'district_id',
        'village_id',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * The "booting" method of the model.
     *
     * @return void
     */
    protected static function boot()
    {
        parent::boot();

        static::addGlobalScope('user_role_scope', function (Builder $builder) {
            if (static::ROLE) $builder->whereRaw('0 < role & '. static::ROLE);
            return $builder;
        });
    }


    /**
     * @param array $attributes
     * @return static|Model
     */
    public function fill(array $attributes)
    {
        $fill = parent::fill($attributes);
        if (is_null($this->role) && static::ROLE) $fill->role = static::ROLE;
        return $fill;
    }

    /**
     * @return bool
     */
    public function isBlocked()
    {
        return $this->blocked;
    }

    /**
     * @param bool $new
     * @throws AppException
     */
    public function sendPasswordMail(bool $new = false)
    {
        if ($this->password_reset_at && $this->password_reset_at->gt(Carbon::now()->addMinutes($m = 5)))
            throw new AppException(sprintf('Вы не можете менять пароль чаще, чем %s раз в минут.', $m));
        $this->password = Hash::make($word = \Illuminate\Support\Str::random(8));
        $this->password_reset_at = Carbon::now();
        $this->save();
        Mail::to($this)->send(new PasswordMail($word, $new));
    }

    public function toArray()
    {
        $a = parent::toArray();
        $a['full_name'] = trim($this->second_name . ' ' . $this->name . ' ' . $this->last_name);
        $a['curator'] = ($this->role & self::CURATOR_ROLE) === self::CURATOR_ROLE;
        $a['address'] = !isset($a['address']) || $a['address'] == 'null' || !$a['address'] ? '' : $a['address'];
        return $a;
    }
    public function save(array $options = [])
    {

        if (!$this->qr && $this->id>0) {
            $this->qr = ($val = StorageHelper::storageAs(
                $this->id . '.png',
                (new Qrator())
                    ->format('png')
                    ->style('dot', 0.99)
                    ->eye('circle_out')
                    ->eyeColor(0, 82, 183, 136, 57, 57, 58)
                    ->eyeColor(1, 82, 183, 136, 57, 57, 58)
                    ->eyeColor(2, 82, 183, 136, 57, 57, 58)
                    ->size(400)
                    ->generate("{$this->id}"),
                StorageHelper::QR_PATH));
            $this->save();
        }
        //Редактировать адрес админа может только глабальный админ
        //Редактировать адрес может только пользовтаель без адреса
        if ($this->isDirty(['village_id', 'district_id'])
            && (($this->role & self::ADMIN_ROLE > 0) && Auth::user() && Auth::user()->district_id
                || ($this->role & self::VILLAGE_ROLE > 0) && $this->village_id && (Auth::user()->role & self::ADMIN_ROLE == 0)
            )
        ){
        $this->village_id = $this->getOriginal('village_id');
        $this->district_id = $this->getOriginal('district_id');
    }
        return parent::save($options); // TODO: Change the autogenerated stub
    }

    public function posts() : HasMany
    {
        return $this->hasMany(UserPost::class, 'user_id');
    }

    public function events() : HasMany
    {
        return $this->hasMany(UserHistory::class, 'user_id');
    }

    public function requests() : HasMany
    {
        return $this->hasMany(UserRequest::class, 'user_id');
    }

    public function district() : BelongsTo
    {
        return $this->belongsTo(District::class, 'district_id');
    }

    public function village() : BelongsTo
    {
        return $this->belongsTo(District::class, 'village_id');
    }
    public function files() : HasMany
    {
        return $this->hasMany(UserFile::class, 'user_id');
    }

    public function savePhoto(\Illuminate\Http\UploadedFile $f)
    {
        $this->photo = '/storage/'. Storage::disk('public')->put('/user_photos/' .Carbon::now()->format('Y/m/d'),$f);
    }
}

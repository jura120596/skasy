<?php

namespace App\Models;

use App\Exceptions\AppException;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class VillageEvent extends Model
{
    use HasFactory;
    protected $dates = ['date'];
    protected $fillable = [
        'date',
        'place',
        'title',
        'points',
    ];
    public function fill(array $attributes)
    {
        $participantId = &$attributes['participant_id'];
        $participantCardId = &$attributes['participant_card_id'];
        if ($participantId) $this->addParticipantById($participantId);
        else if ($participantCardId) $this->addParticipantByCardId($participantCardId);
        return parent::fill($attributes);
    }

    public function author() : BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function toArray()
    {
        $arr = parent::toArray();
        $arr['date'] = $this->date->format('d.m.Y H:i');
        return $arr;
    }
    public function participants()
    {
        return $this->belongsToMany(User::class, 'village_event_participants');
    }

    /**
     * @param $cardId
     */
    private function addParticipantByCardId($cardId)
    {
        $this->addParticipant(User::query()->where('card_id', $cardId)->firstOrFail());
    }

    /**
     * @param $id
     */
    private function addParticipantById($id)
    {
        $this->addParticipant(User::query()->findOrFail($id));
    }

    /**
     * @param User $user
     */
    public function addParticipant(?User $user = null)
    {
        if (Carbon::now()->lt($this->date) || Carbon::now()->addHours(2)->gt($this->date)) {
            throw new AppException('Участника можно добавить только в течение 2-х часов после начала мероприятия');
        }
        if ($user && !$this->participants()->find($user->id)) {
            $this->participants()->save($user);
            $user->points += $this->points;
            $user->save();
        }
    }
}

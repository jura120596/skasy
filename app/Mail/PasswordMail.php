<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class PasswordMail extends Mailable
{
    use Queueable, SerializesModels;
    private $password;
    private $new;

    /**
     * Create a new message instance.
     *
     * @param string $password
     * @param bool $new
     */
    public function __construct(string $password, bool $new)
    {
        $this->new = $new;
        $this->password = $password;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $this->subject = $this->new ? config('app.name') . '. Регистрация' : 'Восстановление пароля';
        return $this->view('email.password',  ['password' => $this->password, 'new' => $this->new]);
    }
}

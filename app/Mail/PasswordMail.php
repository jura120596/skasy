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

    /**
     * Create a new message instance.
     *
     * @param string $password
     */
    public function __construct(string $password)
    {
        $this->password = $password;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $this->subject = 'Восстановление пароля';
        return $this->view('email.password',  ['password' => $this->password]);
    }
}

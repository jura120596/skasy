<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Http\JsonResponse;

class AppException extends Exception
{

    /**
     * Create a new authentication exception.
     *
     * @param  string $message
     * @param int $responseCode
     */
    public function __construct($message = null, int $responseCode = 500)
    {
        $message = $message ?? trans('responses.exceptions.app.default');
        $this->code = $responseCode;
        parent::__construct($message);
    }

    /**
     * Render the exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request
     * @return \Illuminate\Http\Response
     */
    public function render($request)
    {

        return response()->json(['message' => $this->getMessage()], $this->code);
    }
}

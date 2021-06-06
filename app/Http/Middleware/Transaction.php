<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\DB;

class Transaction
{
    /**
     * Handle an incoming request in transaction.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        DB::beginTransaction();
        $response = $next($request);
        if ($response->exception) {
            DB::rollBack();
        } else {
            DB::commit();
        }
        return $response;
    }
}

<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class InjectJwtFromCookieMiddleware
{
    public function handle(Request $request, Closure $next): Response
    {
        if($jwt = $request->cookie('jwt') ){
            $request->headers->set('Authorization', 'Bearer ' . $jwt);
        }
        return $next($request);
    }
}

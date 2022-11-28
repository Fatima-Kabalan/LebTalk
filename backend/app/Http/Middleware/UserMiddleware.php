<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class UserMiddleware
{
    public function handle(Request $request, Closure $next)
    {
        if($user = Auth::user()){
            if($user->user_roles ="user"){
            return $next($request);
        }
            return response()->json([
                'status'=> "failed",
                'message'=>"unauthorized"
            ]);
        }return response()->json([
            'status'=> "failed",
            'message'=>"unauthorized"
        ]);
    }
}

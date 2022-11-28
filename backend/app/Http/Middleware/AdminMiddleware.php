<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Auth;

class AdminMiddleware
{
    public function handle(Request $request, Closure $next)
    {
        if($user = Auth::user()){
            if($user->user_roles == 'admin'){
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

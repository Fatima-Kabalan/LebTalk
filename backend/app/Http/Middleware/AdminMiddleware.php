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
            if($user->user_roles_id == 1){
            return $next($request);
        }
            return response()->json([
                'status'=> "faild",
                'message'=>"unauthorized"
            ]);
        }return response()->json([
            'status'=> "faild",
            'message'=>"unauthorized"
        ]);

        
    }
}

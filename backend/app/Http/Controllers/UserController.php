<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller{
    
    function profile()
    {
        // $user = dd(auth()->user());
        // //Log::info("user: ", $user->toArray());

        // if(!is_null($user)){
        //     $profile = User::where('id',$user->id)->get();
        //     Log::info("user: ", $profile->toArray());
        //     if($profile){
        //         return response()->json([
        //             "status"=>"success",
        //             "data"=>$profile,
        //         ]);
        //     }
        // }else{
        //     return response()->json([
        //         "status"=>"failed",
        //         "message"=>"Unauthorized"
        //     ]);
        // }
        function getUser($id)
        {
            $user = User::find($id);
    
            return response()->json([
                "status"=>"success",
                "data"=>$user,
            ]);
        }
    }
}

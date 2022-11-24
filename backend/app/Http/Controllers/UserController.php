<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Log;
use Illuminate\Http\Request;
use App\Models\User;
use Auth;

class UserController extends Controller{
    function profile()
    {
        $user = Auth::user();

        //Log::info("user: ", $user->toArray());

        if($user){
            return response()->json([
                "status"=>"success",
                "data"=>$user,
            ]);
        }else{
            return response()->json([
                "status"=>"failed",
                "message"=>"Unauthorized"
            ]);
        }
    }

    function getUser($id)
    {
        $user = User::find($id);

        return response()->json([
            "status"=>"success",
            "data"=>$user,
        ]);
    }

    function getUsers()
    {
        $user = User::all();

        return response()->json([
            "status"=>"success",
            "data"=>$user,
        ]);
    }
}

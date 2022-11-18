<?php

namespace App\Http\Controllers;
use App\Models\UserRoles;
use Illuminate\Http\Request;

class UserRoleController extends Controller
{
    function addUserRole(Request $request)
    {
        $user = UserRoles::create($request->all(), [
           'id',
           'name'
        ]);
        return response()->json([
            "status"=>"success",
            "data"=>$user,
        ]);
    }
}

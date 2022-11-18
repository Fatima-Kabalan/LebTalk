<?php

namespace App\Http\Controllers;

use App\Models\Instructor;
use Illuminate\Http\Request;

class InstructorController extends Controller
{
    function getInstructors()
    {
        $instructor = Instructor::all();

        return response()->json([
            "status"=>"success",
            "data"=>$instructor,
        ]);
    } 

    function addInstructor(Request $request)
    {
        $instructor = Instructor::create($request->all(), [
            'username',
            'phone_number',
            'profile_picture'
            
        ]);
        return response()->json([
            "status"=>"success",
            "data"=>$instructor,
        ]);
    }


}

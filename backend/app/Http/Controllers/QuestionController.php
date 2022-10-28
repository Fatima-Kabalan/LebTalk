<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class QuestionController extends Controller
{
    function getQuestions(Request $request)
    {
        $question = Question::select("*")->get();

        return response()->json([
            "status"=>"success",
            "data"=>$question,
        ]);
    } 
}

<?php

namespace App\Http\Controllers;
use App\Models\Question;
use Illuminate\Http\Request;

class QuestionController extends Controller
{
    function getQuestion(Request $request)
    {
        $question = Question::select("*")->get();

        return response()->json([
            "status"=>"success",
            "data"=>$question,
        ]);
    } 
}

<?php

namespace App\Http\Controllers;
use App\Models\Quiz;
use Illuminate\Http\Request;

class QuizController extends Controller
{
    function addQuiz(Request $request)
    {
        $quiz = Quiz::create($request->all(), [
            'title',
            'question',
            'user_id',
            'categories_id',
            'time_out',
            'time_delivered',
            'status',
        ]);
        return response()->json([
            "status"=>"success",
            "data"=>$quiz,
        ]);
    }

    function getQuiz(Request $request)
    {
        $quiz = Quiz::select("*")->get();

        return response()->json([
            "status"=>"success",
            "data"=>$quiz,
        ]);
    }

    function deleteQuiz(Request $request)
    {
        $quiz = Quiz::where([
            ['categories_id', '=', $request->categories_id],
            ['users_id', '=', $request->users_id],
        ])->delete();

        return response()->json([
            "status"=>"success",
            "data"=>$quiz,
        ]);
    }
}

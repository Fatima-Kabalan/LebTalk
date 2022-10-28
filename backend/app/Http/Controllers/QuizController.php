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
}

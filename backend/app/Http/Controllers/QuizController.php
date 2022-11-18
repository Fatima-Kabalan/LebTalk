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
            'users_id',
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

    function getQuiz(Request $request, $id)
    {
        $quizzes = Quiz::where("categories_id", $id)->get();

        if($quizzes){
            return response()->json([
                "status"=>"success",
                "data"=>$quizzes,
            ]);
        }
    }

    function deleteQuiz(Request $request)
    {
        $quiz_id = $request->quiz_id;
        $quiz = Quiz::where(
            "id" , $quiz_id
        )->delete();

        return response()->json([
            "status"=>"success",
            "data"=>$quiz,
        ]);
    }
}

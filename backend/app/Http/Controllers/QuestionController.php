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

    function addQuestion(Request $request)
    {
        $quiz = Question::create($request->all(), [
            'title',
            'quizzes_id',
            'question',
            'time_out',
            'time_delivered',
            'status',
        ]);
        return response()->json([
            "status"=>"success",
            "data"=>$quiz,
        ]);
    }

    function deleteQuestion(Request $request)
    {
        $question = Question::where([
            ['title', '=', $request->title],
            ['quizzes_id', '=', $request->quizzes_id],
        ])->delete();

        return response()->json([
            "status"=>"success",
            "data"=>$question,
        ]);
    }
}

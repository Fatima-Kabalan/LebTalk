<?php

namespace App\Http\Controllers;
use App\Models\Question;
use Illuminate\Http\Request;

class QuestionController extends Controller
{
    function getQuestion()
    {
        $question = Question::all();

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
            'question_image',
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
        $question_id = $request->question_id;
        $question = Question::where(
            "id" , $question_id
        )->delete();

        return response()->json([
            "status"=>"success",
            "data"=>$question,
        ]);
    }
}

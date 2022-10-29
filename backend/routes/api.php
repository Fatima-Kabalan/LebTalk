<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CardController;
use App\Http\Controllers\QuizController;
use App\Http\Controllers\QuestionController;


Route::post("/login", [AuthController::class, "login"])->name("login");
Route::post("/register", [AuthController::class, "register"])->name("register"); 

Route::group(["prefix"=> "v1"], function(){

    // Route::group(["middleware" => "auth:api"], function(){
        Route::get("/getCategory/{id}", [CategoryController::class, "getCategory"])->name("getCategory"); 
        Route::post("/addCategory", [CategoryController::class, "addCategory"])->name("addCategory"); 
        Route::post("/deleteCategory", [CategoryController::class, "deleteCategory"])->name("deleteCategory"); 
        Route::get("/getAllCategories", [CategoryController::class, "getALlCategories"])->name("getALlCategories"); 

        Route::post("/addQuiz", [QuizController::class, "addQuiz"])->name("addQuiz"); 
        Route::get("/getQuiz", [QuizController::class, "getQuiz"])->name("getQuiz"); 
        Route::post("/deleteQuiz", [QuizController::class, "deleteQuiz"])->name("deleteQuiz"); 

        Route::get("/getQuestion", [QuestionController::class, "getQuestion"])->name("getQuestion"); 
        Route::post("/addQuestion", [QuestionController::class, "addQuestion"])->name("addQuestion"); 
        Route::post("/deleteQuestion", [QuestionController::class, "deleteQuestion"])->name("deleteQuestion"); 

        Route::get("/getCards", [CardController::class, "getCards"])->name("getCards"); 
        Route::post("/addCard", [CardController::class, "addCard"])->name("addCard"); 
        Route::post("/deleteCard", [CardController::class, "deleteCard"])->name("deleteCard"); 

        Route::post("/favCard", [CardController::class, "favCard"])->name("favCard"); 
        Route::post("/unFavCard", [CardController::class, "unFavCard"])->name("unFavCard"); 
    // });
});
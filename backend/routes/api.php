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
        Route::get("/getCategories", [CategoryController::class, "getCategories"])->name("getCategories"); 
        Route::post("/addCategories", [CategoryController::class, "addCategories"])->name("addCategories"); 
        Route::post("/deleteCategories", [CategoryController::class, "deleteCategories"])->name("deleteCategories"); 
        Route::post("/addQuiz", [QuizController::class, "addQuiz"])->name("addQuiz"); 
        Route::get("/getQuiz", [QuizController::class, "getQuiz"])->name("getQuiz"); 
        Route::post("/deleteQuiz", [QuizController::class, "deleteQuiz"])->name("deleteQuiz"); 
        Route::get("/getQuestion", [QuestionController::class, "getQuestion"])->name("getQuestion"); 

        Route::get("/getCards", [CardController::class, "getCards"])->name("getCards"); 
        Route::post("/addCards", [CardController::class, "addCards"])->name("addCards"); 
        Route::post("/deleteCards", [CardController::class, "deleteCards"])->name("deleteCards"); 
        Route::post("/favCards", [CardController::class, "favCards"])->name("favCards"); 
        Route::post("/unFavCards", [CardController::class, "unFavCards"])->name("unFavCards"); 
    // });
});
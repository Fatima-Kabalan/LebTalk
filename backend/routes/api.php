<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\InstructorController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CardController;
use App\Http\Controllers\QuizController;
use App\Http\Controllers\QuestionController;

Route::prefix('v1')->group(function (){

    Route::controller(AuthController::class)->group(function (){
        Route::post("/login", "login");
        Route::post("/register",  "register");
    });

    Route::controller(UserController::class)->group(function (){
        Route::get("/profile", "profile");
        Route::get("/getUsers", "getUsers");
    });

    Route::controller(CardController::class)->group(function (){
        Route::post("/addCard", "addCard"); 
        Route::post("/deleteCard", "deleteCard");
        Route::post("/favCard", "triggerFav"); 
        Route::post("/checkFavCard", "checkFav"); 
        Route::get("/getCards", "getCards");
        Route::get("/getFavNumber", "getFavNumber");
        
    });

    Route::controller(CategoryController::class)->group(function (){
        Route::get("/getCategory/{id}", "getCategory");  
        Route::get("/getAllCategories", "getALlCategories"); 
        Route::get("/getCategoryCards/{id}", "getCategoryCards");
        Route::post("/addCategory", "addCategory"); 
        Route::post("/deleteCategory", "deleteCategory"); 
    });

    Route::controller(QuizController::class)->group(function (){
        Route::post("/addQuiz", "addQuiz"); 
        Route::post("/deleteQuiz", "deleteQuiz"); 
        Route::get("/getQuiz/{id}", "getQuiz"); 
    });

    Route::controller(QuestionController::class)->group(function (){
        Route::post("/addQuestion", "addQuestion"); 
        Route::post("/deleteQuestion", "deleteQuestion"); 
        Route::get("/getQuestion/{id}", "getQuestion"); 
        Route::get("/getQuestions", "getQuestions"); 
        Route::get("/getAnswers/{id}", "getAnswers"); 
    });

    Route::controller(InstructorController::class)->group(function (){
        Route::post("/addInstructor", "addInstructor");
        Route::get("/getInstructors", "getInstructors");
    });

    Route::controller(UserRoleController::class)->group(function (){
        Route::get("/addUserRole", "addUserRole"); 
    });
});

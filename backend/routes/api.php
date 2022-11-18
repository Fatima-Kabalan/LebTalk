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


Route::post("/login", [AuthController::class, "login"])->name("login");
Route::post("/register", [AuthController::class, "register"])->name("register");

Route::group(["prefix"=> "v1"], function(){
        // Route::group(["middleware" => "auth:api"], function(){
            Route::group(["middleware" => ["admin.type"]], function(){
                Route::post("/addCategory", [CategoryController::class, "addCategory"])->name("addCategory"); 
                Route::post("/deleteCategory", [CategoryController::class, "deleteCategory"])->name("deleteCategory"); 
                Route::post("/addQuiz", [QuizController::class, "addQuiz"])->name("addQuiz"); 
                Route::post("/deleteQuiz", [QuizController::class, "deleteQuiz"])->name("deleteQuiz"); 
                Route::post("/addQuestion", [QuestionController::class, "addQuestion"])->name("addQuestion"); 
                Route::post("/deleteQuestion", [QuestionController::class, "deleteQuestion"])->name("deleteQuestion"); 
            
                Route::post("/addCard", [CardController::class, "addCard"])->name("addCard"); 
                Route::post("/deleteCard", [CardController::class, "deleteCard"])->name("deleteCard"); 
            }); 

            Route::get("/getCategory/{id}", [CategoryController::class, "getCategory"])->name("getCategory");  
            Route::get("/getAllCategories", [CategoryController::class, "getALlCategories"])->name("getALlCategories"); 
            Route::get("/getQuiz", [QuizController::class, "getQuiz"])->name("getQuiz"); 
            Route::get("/getQuestion", [QuestionController::class, "getQuestion"])->name("getQuestion"); 
            Route::get("/getCards", [CardController::class, "getCards"])->name("getCards"); 
            Route::post("/addInstructor", [InstructorController::class, "addInstructor"])->name("addInstructor");
            Route::get("/getInstructors", [InstructorController::class, "getInstructors"])->name("getInstructors");

            Route::get("/addUserRole", [UserRoleController::class, "addUserRole"])->name("addUserRole"); 
            // Route::get("/getUser/{id}", [UserController::class, "getUser"])->name("getUser"); 
        
            Route::group(["middleware" => ["user.type"]], function(){
                Route::post("/favCard", [CardController::class, "favCard"])->name("favCard"); 
                Route::post("/unFavCard", [CardController::class, "unFavCard"])->name("unFavCard"); 
            });
    });    
// });

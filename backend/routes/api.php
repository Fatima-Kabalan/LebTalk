<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CardController;


Route::post("/login", [AuthController::class, "login"])->name("login");
Route::post("/register", [AuthController::class, "register"])->name("register"); 

Route::group(["prefix"=> "v1"], function(){

    // Route::group(["middleware" => "auth:api"], function(){
        Route::get("/getCategories", [CategoryController::class, "getCategories"])->name("getCategories"); 
        Route::get("/getCards", [CardController::class, "getCards"])->name("getCards"); 
        Route::post("/addCards", [CardController::class, "addCards"])->name("addCards"); 
    // });
});
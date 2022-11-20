<?php

namespace App\Http\Controllers;

use App\Models\Card;
use App\Models\Category;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;


class CategoryController extends Controller
{
    function getCategory($id)
    {
        $category = Category::find($id);

        return response()->json([
            "status"=>"success",
            "data"=>$category,
        ]);
    }

    function getAllCategories(Request $request)
    {
        $category = Category::all();

        return response()->json([
            "status"=>"success",
            "data"=>$category,
        ]);
    }

    function addCategory(Request $request)
    {
        $category = Category::create($request->all(), [
            'category_name',
            'category_image',
            'admin_id',
        ]);
        return response()->json([
            "status"=>"success",
            "data"=>$category,
        ]);
    }

    function deleteCategory(Request $request)
    {
        $category_id = $request->category_id;
        $category = Category::where(
            "id" , $category_id
        )->delete();

        return response()->json([
            "status"=>"success",
            "data"=>$category,
        ]);
    }

    function getCategoryCards(Request $request, $id){

        $cards = Card::where("categories_id", $id)->get();
        Log::info("cards: ", $cards->toArray());

        $favoritedCards = Auth::user()->favoriteCards;
        Log::info("fav: ", $favoritedCards->toArray());

        if($cards){
            return response()->json([
                "status"=>"success",
                "data"=>$cards,
                "favorites"=>$favoritedCards
            ]);
        }
    }
}

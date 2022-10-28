<?php

namespace App\Http\Controllers;
use App\Models\Card;
use App\Models\Favorite;
use Illuminate\Http\Request;

class CardController extends Controller
{
    function getCards(Request $request)
    {
        $card = Card::select("*")->get();

        return response()->json([
            "status"=>"success",
            "data"=>$card,
        ]);
    }

    function addCards(Request $request)
    {
        $card = Card::create($request->all(), [
            'card_image',
            'voice_note',
            'english_text',
            'arabic_text',
            'categories_id',
        ]);
        return response()->json([
            "status"=>"success",
            "data"=>$card,
        ]);
    }

    function deleteCards(Request $request)
    {
        $card = Card::where([
            ['cards_id', '=', $request->id],
            ['categories_id', '=', $request->categories_id],
        ])->delete();

        return response()->json([
            "status"=>"success",
            "data"=>$card,
        ]);
    }

    function favCards(Request $request)
    {
        $favcard = Favorite::create($request->all(), [
            'users_id',
            'cards_id',
        ]);
        return response()->json([
            "status"=>"success",
            "data"=>$favcard,
        ]);
    }

    function unFavCards(Request $request)
    {
        $card = Favorite::where([
            ['cards_id', '=', $request->cards_id],
            ['users_id', '=', $request->users_id],
        ])->delete();

        return response()->json([
            "status"=>"success",
            "data"=>$card,
        ]);
    }
}

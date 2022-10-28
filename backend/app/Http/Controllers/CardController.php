<?php

namespace App\Http\Controllers;
use App\Models\Card;
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

    function favCard(Request $request)
    {
        $favcard = Favorite::create($request->all(), [
            'card_image',
            'voice_note',
            'english_text',
            'arabic_text',
            'categories_id',
        ]);
        return response()->json([
            "status"=>"success",
            "data"=>$favcard,
        ]);
    }
}

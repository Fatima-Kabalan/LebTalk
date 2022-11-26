<?php

namespace App\Http\Controllers;
use App\Models\Card;
use App\Models\Favorite;
use Illuminate\Http\Request;
use Auth;

class CardController extends Controller
{
    function getCards()
    {
        $card = Card::all();

        return response()->json([
            "status"=>"success",
            "data"=>$card,
        ]);
    }

    function addCard(Request $request)
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

    function deleteCard(Request $request)
    {
        $card_id = $request->card_id;
        $card = Card::where(
            "id" , $card_id
        )->delete();

        return response()->json([
            "status"=>"success",
            "data"=>$card,
        ]);
    }


    function triggerFav(Request $request)
    {
        $card = Favorite::where([
            ['card_id', '=', $request->card_id],
            ['user_id', '=', Auth::user()->id],
        ])->get();
        
        if (count($card) == 0) {
            $favcard = new Favorite;
            $favcard->user_id = Auth::user()->id;
            $favcard->card_id = $request->card_id;
            $favcard->save();


            return response()->json([
                "status"=>"success",
                "data"=>$favcard,
            ]);
        }
        else{
            Favorite::where([
                ['card_id', '=', $request->card_id],
                ['user_id', '=', Auth::user()->id],
            ])->delete();
            return response()->json([
                "status"=>"success",
                "data"=> 'deleted',
            ]);
        }


    }

    function checkFav(Request $request)
    {
        $card = Favorite::where([
            ['card_id', '=', $request->card_id],
            ['user_id', '=', Auth::user()->id],
        ])->get();

        if (count($card) == 0) {
            return response()->json([
                "status"=>"success",
                "data"=>false,
            ]); }
            else{
                return response()->json([
                    "status"=>"success",
                    "data"=>true,
                ]);
            }
    }

        function getFavNumber() {
            $cards = Favorite::where(
                        'user_id' , Auth::user()->id
                    )->get();

                 return response()->json([
            "status"=>"success",

            "data"=>count($cards),

        ]);      
        }


    

}

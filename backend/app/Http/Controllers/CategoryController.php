<?php

namespace App\Http\Controllers;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    function getCategories(Request $request)
    {
        $category = Category::select("name")->get();

        return response()->json([
            "status"=>"success",
            "data"=>$category,
        ]);
    }

    function addCategories(Request $request)
    {
        $category = Category::create($request->all(), [
            'category_name',
            'admin_id',
        ]);
        return response()->json([
            "status"=>"success",
            "data"=>$category,
        ]);
    }

    function deleteCategories(Request $request)
    {
        $category = Category::where([
            ['category_name', '=', $request->category_name],
            ['admin_id', '=', $request->admin_id],
        ])->delete();

        return response()->json([
            "status"=>"success",
            "data"=>$category,
        ]);
    }
}

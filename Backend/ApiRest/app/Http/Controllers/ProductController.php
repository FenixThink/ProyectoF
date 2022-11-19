<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{
    public function register(Request $request)
    {
        try{
            $request->validate([
                'NombreProducto' => 'required|string',
                'Precio' => 'required|decimal',
                'Iva' => 'required|integer',
                'CantidadProducto' => 'required|integer',
                'UrlImg' => 'required|string'
            ]);
            $Product=Product::Create([
                    'NombreProducto' => $request-> NombreProducto,
                    'Precio' => $request-> Precio,
                    'Iva' => $request-> Iva,
                    'CantidadProducto' => $request-> CantidadProducto,
                    'UrlImg' => $request-> UrlImg
                ]);


           
            return response()->json([
                'Product'=> $Product
            ]);
            }catch(\Throwable $th){
                return response()->json([
                    'message'=>$th->getMessage()
                ]);
            }
    }
    public function index()
    {
        try{
            return Product::all();
        }catch(\Throwable $e){
            return response()->json([
                'message'=>$e->getMessage()
            ]);
        }
    }
    
    public function show($id)
    {
        try {
            $Product = Product::find($id);

            if (!$Product) {
                return response()->json([
                    'message' => 'Product not found'
                ], 404);
            }else{
                return $Product;
            }

        } catch (\Throwable $th) {
            return response()->json([
                'message' => $th->getMessage()
            ]);
        }
    }
}

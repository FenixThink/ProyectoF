<?php

namespace App\Http\Controllers;

use App\Models\Factura;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class FacturaController extends Controller
{
    public function register(Request $request)
    {
        try{
            $request->validate([
                'user_id' => 'required|string',
                'product_id' => 'required|integer',
                'SubTotal' => 'required|numeric',
                'Total' => 'required|numeric',
            ]);
            $Factura=Factura::Create([
                    'user_id' => $request-> user_id,
                    'product_id' => $request-> product_id,
                    'SubTotal' => $request-> SubTotal,
                    'Total' => $request-> Total
                ]);


           
            return response()->json([
                'Factura'=> $Factura
            ]);
            }catch(\Throwable $th){
                return response()->json([
                    'message'=>$th->getMessage()
                ]);
            }
    }
}

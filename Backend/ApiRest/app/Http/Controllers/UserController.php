<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
/*     public function login(Request $request)
    {
        $credentials = $request->only(['email', 'password']);

        if (! $token = Auth::attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return response()->json([
            'access_token' => $token,
            'token_type' => 'Bearer',
            'expires_in' => 3600
        ]);
    } */
    
/*     public function me()
    {
        $user = User::where('id' , Auth::user()->id)->with(['roles', 'roles.permissions'])->first();
        /* $user = Auth::user();  
        return response()->json($user);
    } 

     public function logout()
    {
        Auth::logout();
        return response()->json(['message' => 'Successfully logged out']);
    } 
*/
    public function register(Request $request)
    {
            try{
            $request->validate([
                'PrimerNombre' => 'required|string',
                'PrimerApellido' => 'required|string',
                'email' => 'required|email',
                'password' => 'required|string',
                'Calle' => 'integer',
                'Carrera' => 'integer',
                'Numero' => 'string'
            ]);
                $user=User::Create([
                    'PrimerNombre' => $request-> PrimerNombre,
                    'PrimerApellido' => $request-> PrimerApellido,
                    'email' => $request-> email,
                    'password' =>  bcrypt($request-> password),
                    'Calle' => $request-> Calle,
                    'Carrera' => $request-> Carrera,
                    'Numero' =>$request-> Numero
                ]);


           
            return response()->json([
                'User'=> $user
            ]);
            }catch(\Throwable $th){
                return response()->json([
                    'message'=>$th->getMessage()
                ]);
            }
    }
}

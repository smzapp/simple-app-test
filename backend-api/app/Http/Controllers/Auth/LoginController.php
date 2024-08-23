<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Services\AuthService;


class LoginController extends Controller
{    
    
    /**
    * Handle an authentication attempt.
    *
    * @param  \Illuminate\Http\Request  $request
    * @return \Illuminate\Http\Response
    */
   public function authenticate(Request $request)
   {
       $credentials = $request->validate([
           'email' => ['required', 'email'],
           'password' => ['required'],
       ]);

       if (Auth::attempt($credentials)) 
       {
            return response()->json([
                'data' => Auth::generateToken(),
                'message' => 'Successful login',
            ], 200);
       }

       return response()->json(['message' => 'Invalid credentials'], 401);
    }
}

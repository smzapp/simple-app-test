<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Services\AuthService;
use App\Models\User;
use App\Models\SystemLog;


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
            SystemLog::create([
                'loggable_type' => User::class,
                'loggable_id' => Auth::id(),
                'action'    => 'loggedin',
                'new_value'  => 'User Loggedin',
                'user_id' => Auth::id(),
            ]);

            return response()->json([
                'data' => AuthService::generateToken(),
                'message' => 'Login successful',
            ], 200);
       }

       return response()->json(['message' => 'Invalid credentials'], 401);
    }
}

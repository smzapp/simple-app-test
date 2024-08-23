<?php
namespace App\Services;

use Illuminate\Support\Facades\Auth;

class AuthService
{
    const HASH = '#h@shTest';

    public static function generateToken()
    {
        $user = Auth::user();

        $token = $user->createToken(self::HASH);

        return [
            'token' => $token->accessToken,
            'expires_at' => $token->token->expires_at
        ];
    }
}
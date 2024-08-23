<?php
namespace App\Services;

use Illuminate\Support\Facades\Auth;

class AuthService
{
    const HASH = 'My@PP#';

    public static function generateToken()
    {
        $user = Auth::user();

        $result = $user->createToken(self::HASH);

        return [
            'token' => $result->accessToken,
            'expires_at' => $result->token->expires_at
        ];
    }
}
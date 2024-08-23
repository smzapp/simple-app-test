<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class BaseController extends Controller
{
    /**
     * Common successful response
     */
    protected function sendSuccess($data = null, $message = 'Success', $statusCode = 200)
    {
        return response()->json([
            'data' => $data,
            'message' => $message,
            'success' => true,
        ], $statusCode);
    }
}

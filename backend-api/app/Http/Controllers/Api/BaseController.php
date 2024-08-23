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
            'success' => true,
            'data' => $data,
            'message' => $message,
        ], $statusCode);
    }
    
    /**
    * Common error response
    */
   protected function sendError($message = 'Success', $statusCode = 404)
   {
       return response()->json([
           'message' => $message,
       ], $statusCode);
   }
}

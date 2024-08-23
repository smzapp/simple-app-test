<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Services\IPAddressService;

class IPAddressController extends Controller
{
    private $service;

    public function __construct(IPAddressService $service)
    {
        $this->service = $service;
    }

    public function index()
    {
        return response()->json([
            'data' => $this->service->getIPList()
        ], 201);
    }
}

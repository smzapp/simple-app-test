<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Services\IPAddressService;
use App\Http\Controllers\Api\BaseController;

class IPAddressController extends BaseController
{
    private $service;

    public function __construct(IPAddressService $service)
    {
        $this->service = $service;
    }

    public function index()
    {
        $data =  $this->service->getIPList();

        return $this->sendSuccess( $data, 'successfull', 200  );
    }
}

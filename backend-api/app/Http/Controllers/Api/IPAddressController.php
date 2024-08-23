<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Services\IPAddressService;
use App\Http\Controllers\Api\BaseController;
use App\Models\IPAddress;
use App\Rules\ValidIpAddress;
use App\Http\Requests\IpAddressRequest;

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

        return $this->sendSuccess( $data, 'Successfully retrieved data', 200  );
    }

    public function store(IpAddressRequest $request)
    { 
        $data = IPAddress::create($request->validated());

        return $this->sendSuccess($data, 'Successfully created data', 201);
    }

    public function update(IpAddressRequest $request, $id)
    {
        $ipaddress = IPAddress::find($id);

        if(!$ipaddress) {
            return $this->sendError('Record not found.', 404);
        }

        $data = $ipaddress->update($request->validated());
        
        return $this->sendSuccess(null, 'Successfully updated data', 201);
    }
}

<?php
namespace App\Services;

use App\Models\IPAddress;

class IPAddressService 
{
    /**
     * Change the result based on the requirement
     */
    public function getIPList()
    {
        return IPAddress::with('system_logs')->get();
    }
}
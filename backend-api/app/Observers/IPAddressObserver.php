<?php

namespace App\Observers;

use App\Models\SystemLog;
use App\Models\IPAddress;
use Auth;

class IPAddressObserver
{
    /**
     * Handle the IPAddress "created" event.
     *
     * @param  \App\Models\IPAddress  $ipaddress
     * @return void
     */
    public function created(IPAddress $ipaddress)
    {
        SystemLog::create([
            'loggable_type' => IPAddress::class,
            'loggable_id' => $ipaddress->id,
            'action'    => 'create',
            'new_value' => $ipaddress->value,
            'user_id' => Auth::id(),
        ]);
    }

    /**
     * Handle the IPAddress "updated" event.
     *
     * @param  \App\Models\IPAddress  $ipaddress
     * @return void
     */
    public function updated(IPAddress $ipAddress)
    { 
        $original = $ipAddress->getOriginal();

        $changed = $ipAddress->getDirty();

        $except  = ['created_at', 'updated_at', 'deleted_at'];

        foreach ($changed as $field => $newValue)
        {
            if(!in_array($field, $except)) 
            {
                SystemLog::create([
                    'loggable_type' => IPAddress::class,
                    'loggable_id' => $ipAddress->id,
                    'action' => 'update',
                    'old_value' => $original[$field],
                    'new_value' => $newValue,
                    'user_id' => Auth::id(),
                ]);
            }
        }
    }
}

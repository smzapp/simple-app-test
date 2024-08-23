<?php

namespace App\Observers;

use App\Models\SystemLog;
use App\Models\IPAddress;
use Illuminate\Support\Facades\Auth;
use Log;

class IPAddressObserver
{
    /**
     * Handle the SystemLog "updated" event.
     *
     * @param  \App\Models\SystemLog  $systemLog
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

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class IPAddress extends Model
{
    use HasFactory;

    protected $fillable = ['value', 'label'];

    protected static function boot()
    {
        parent::boot();

        static::observe(\App\Observers\IPAddressObserver::class);
    }

    public function system_logs()
    {
        return $this->morphMany(SystemLog::class, 'loggable');
    }
}

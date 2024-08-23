<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        if(!User::count()) {
            User::create([
                'name' => 'Sam',
                'email' => 'sam@test.com',
                'email_verified_at' => now(),
                'password' => bcrypt('test1234')
            ]);
        }
    }
}

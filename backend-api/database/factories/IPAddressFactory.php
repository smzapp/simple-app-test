<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\IPAddress;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\IPAddress>
 */
class IPAddressFactory extends Factory
{
    protected $model = IPAddress::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'value' => $this->faker->ipv4,
            'label' => $this->faker->word
        ];
    }
}

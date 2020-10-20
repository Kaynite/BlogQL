<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Topic;
use Illuminate\Support\Str;
use Faker\Generator as Faker;

$factory->define(Topic::class, function (Faker $faker) {
    return [
        'name' => $name = $faker->sentence(),
        'slug' => Str::slug($name)
    ];
});

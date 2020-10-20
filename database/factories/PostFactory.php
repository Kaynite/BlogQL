<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Post;
use Faker\Generator as Faker;

$factory->define(Post::class, function (Faker $faker) {
    return [
        'title'     => $faker->sentence(),
        'lead'      => $faker->sentence(),
        'content'   => $faker->sentence(25),
        'topic_id'  => $faker->numberBetween(1, 10),
        'author_id' => $faker->numberBetween(1, 5),
    ];
});

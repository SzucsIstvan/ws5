<?php

use Faker\Generator as Faker;

$factory->define(App\News::class, function (Faker $faker) {
    $dir = config('filesystems.disks.public.root');
    return [
        "title" => rtrim($faker->sentence(rand(5, 10))),
        "description" => $faker->paragraphs(rand(1,2), true),
        "content" => $faker->paragraphs(rand(10, 16), true),
        "picture" => pathinfo($faker->image($dir, 1024, 314), PATHINFO_BASENAME),
    ];
});

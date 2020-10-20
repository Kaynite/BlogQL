<?php

use App\Models\Post;
use App\Models\Topic;
use App\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        factory(Topic::class, 10)->create();
        factory(User::class, 20)->create();
        factory(Post::class, 50)->create();
    }
}

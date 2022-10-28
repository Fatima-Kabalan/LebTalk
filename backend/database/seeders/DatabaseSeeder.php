<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\User;
use App\Models\Card;
use App\Models\Category;

class DatabaseSeeder extends Seeder
{
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        User::create([
            'name' => 'fatima1',
            'email' => 'fatima9@fatima.com',
            'password' => '1234567',
            'phone_number' => '70456311',
            'user_roles_id' => '1'
        ]);
        User::create([
            'name' => 'Ahmad2',
            'email' => 'ahmad8@ahmad.com',
            'password' => '12345678',
            'phone_number' => '70987123',
            'user_roles_id' => '1'
        ]);
        User::create([
            'name' => 'karem',
            'email' => 'karem@karem33.com',
            'password' => '123456789',
            'phone_number' => '70987654',
            'user_roles_id' => '3'
        ]);
        User::create([
            'name' => 'nour2',
            'email' => 'nour@nour93.com',
            'password' => '123456898',
            'phone_number' => '70123654',
            'user_roles_id' => '2'
        ]);
        User::create([
            'name' => 'souraya1',
            'email' => 'souraya@souraya25.com',
            'password' => '9876543',
            'phone_number' => '70123554',
            'user_roles_id' => '3'
        ]);
       
        Card::create([
            'card_image' => 'jpg1',
            'voice_note' => 'mp32',
            'english_text' => 'hi',
            'arabic_text' => 'هلا',
            'categories_id' => '1'
        ]);

        Card::create([
            'card_image' => 'png',
            'voice_note' => 'mp3',
            'english_text' => 'bye',
            'arabic_text' => 'باي',
            'categories_id' => '2'
        ]);

        Category::create([
            'category_name' => 'food1',
            'admin_id' => '1',
        ]);

        Category::create([
            'category_name' => 'sport',
            'admin_id' => '2',
        ]);
    }
}

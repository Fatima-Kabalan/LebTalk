<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Instructor;
use App\Models\User;
use App\Models\Card;
use App\Models\Category;

class DatabaseSeeder extends Seeder
{
    public function run()
    {
        // \App\Models\User::factory(10)->create();

       
        // UserRoles::create([
        //     'name' => 'Ahmad2',
        //     'id' => '2'
        // ]);

        User::create([
            'name' => 'fatima1',
            'email' => 'fatima@fatima8.com',
            'password' => '1234567',
            'phone_number' => '70456311',
            'user_roles_id' => '1'
        ]);
        User::create([
            'name' => 'Ahmad2',
            'email' => 'ahmad@gmail.com',
            'password' => '12345678',
            'phone_number' => '70987123',
            'user_roles_id' => '1'
        ]);
        User::create([
            'name' => 'karem',
            'email' => 'karem@gmail.com',
            'password' => '123456789',
            'phone_number' => '70987654',
            'user_roles_id' => '2'
        ]);
        User::create([
            'name' => 'nour2',
            'email' => 'nour@gmail.com',
            'password' => '123456898',
            'phone_number' => '70123654',
            'user_roles_id' => '2'
        ]);
        User::create([
            'name' => 'souraya1',
            'email' => 'souraya@sgmail.com',
            'password' => '9876543',
            'phone_number' => '70123554',
            'user_roles_id' => '2'
        ]);
       
        Category::create([
            'category_name' => 'Food',
            'category_image' => '/Kibbeh.jpg',
            'admin_id' => '1',
        ]);

        Category::create([
            'category_name' => 'Sports',
            'category_image' => '/Sports.jpg',
            'admin_id' => '1',
        ]);

        Category::create([
           
            'category_name' => 'Family',
            'category_image' => '/fam.jpg',
            'admin_id' => '1',
        ]);

        Category::create([
           
            'category_name' => 'Animals',
            'category_image' => '/dog.jpg',
            'admin_id' => '1',
        ]);

        Card::create([
            'card_image' => '/Kibbeh.jpg',
            'voice_note' => '/Transformation-sound-effect.mp3',
            'english_text' => 'kibbeh',
            'arabic_text' => 'كبة',
            'categories_id' => '1'
        ]);

        Card::create([
            'card_image' => '/fatoush.jpg',
            'voice_note' => '/Transformation-sound-effect.mp3',
            'english_text' => 'Fatoush',
            'arabic_text' => 'فتوش',
            'categories_id' => '1'
        ]);

        Card::create([
            'card_image' => '/siste.jpg',
            'voice_note' => '/Transformation-sound-effect.mp3',
            'english_text' => 'Sister',
            'arabic_text' => 'أختي',
            'categories_id' => '3'
        ]);

        Card::create([
            'card_image' => '/RAFTASSI_large.png',
            'voice_note' => '/Transformation-sound-effect.mp3',
            'english_text' => 'Rafting',
            'arabic_text' => 'تجديف',
            'categories_id' => '2'
        ]);

        Card::create([
            'card_image' => '/dog.jpg',
            'voice_note' => '/Transformation-sound-effect.mp3',
            'english_text' => 'Dog',
            'arabic_text' => 'كلب',
            'categories_id' => '4'
        ]);

        Instructor::create([
          'phone_number'=>'70456311',
          'username'=>'Fatima Kabalan',
          'profile_picture'=>'/fatima.jpg'
        ]);

        Instructor::create([
          'phone_number'=>'',
          'username'=>'Mirna Messlmani',
          'profile_picture'=>'/Mirna.jpg'
        ]);

        Instructor::create([
          'phone_number'=>'70456311',
          'username'=>'Ali Karem',
          'profile_picture'=>'/Ali.jpg'
        ]);
       
    }


}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Favorite extends Model
{
    use HasFactory;

    protected $fillable = [
        'cards_id',
        'users_id',
    ];

    function card(){
        return $this->hasMany(Card::class);
    }    

    function users(){
        return $this->hasMany(User::class);
    }    
}

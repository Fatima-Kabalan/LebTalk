<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Favorite extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'card_id',
        'user_id',
    ];

    function card(){
        return $this->hasMany(Card::class);
    }    

    function users(){
        return $this->hasMany(User::class);
    }    
}

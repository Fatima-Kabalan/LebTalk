<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Card extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'card_image',
        'voice_note',
        'english_text',
        'arabic_text',
        'categories_id',
    ];
}

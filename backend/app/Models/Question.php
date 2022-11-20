<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Question extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'question',
        'question_image',
        'categories_id',
    ];

    // function quiz(){
    //     return $this->belongsTo(Quiz::class);
    // }     

    function users(){
        return $this->belongsTo(User::class);
    }     
}

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
        'quizzes_id',
        'title',
        'question',
        'question_image',
        'time_out',
        'time_delivered',
        'status'
    ];

    function quiz(){
        return $this->belongsTo(Quiz::class);
    }     
}

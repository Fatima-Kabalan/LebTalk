<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'quizzes_id',
        'title',
        'question',
        'time_out',
        'time_delivered',
        'status'
    ];
}

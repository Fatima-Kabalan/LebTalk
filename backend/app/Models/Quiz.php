<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Quiz extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'question',
        'user_id',
        'categories_id',
        'time_out',
        'time_delivered',
        'status'
    ];
}

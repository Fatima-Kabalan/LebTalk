<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Quiz extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'title',
        'question',
        'users_id',
        'categories_id',
        'time_out',
        'time_delivered',
        'status'
    ];
}
function users(){
    return $this->belongsTo(User::class);
}
function categories(){
    return $this->belongsTo(Category::class);
}

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

    function users(){
        return $this->hasMany(User::class);
    } 

    function answers(){
        return $this->hasMany(Answer::class);
    }  
    
    
    function AnsweredByUser(){
        return $this->belongsToMany(User::class , answered_questions);
    }       
}

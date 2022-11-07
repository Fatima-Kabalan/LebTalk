<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'category_name',
        'category_image',
        'admin_id',
    ];

    function users(){
        return $this->belongsTo(User::class);
    }    
}

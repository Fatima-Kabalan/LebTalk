<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserRoles extends Model
{
    use HasFactory;
    protected $fillable = [
        'id',
        'name',
    ];
}
function users(){
    return $this->hasMany(User::class);
} 
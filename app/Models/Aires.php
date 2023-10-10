<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Aires extends Model
{ 
    protected $fillable = [
        'uid',
        'query',
        'result'
    ];

    protected $primaryKey = 'id';
    protected $keyType = 'int';
    public $incrementing = true;
}

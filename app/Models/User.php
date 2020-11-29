<?php

namespace App\Models;

use Ramsey\Uuid\Uuid;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    //プライマリーキーのカラム名
    protected $primaryKey = 'id';

    //プライマリーキーの型(uuidを使ってるのでstring)
    protected $keyType = 'string';

    //プライマリーキーは自動連番か否か
    public $incrementing = false;

    //コンストラクタ(自動でuuidを生成するためのもの)
    public function __construct(array $attributes = [])
    {
        parent::__construct($attributes);

        //uuidを生成
        $this->attributes['id'] = Uuid::uuid4()->toString();
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'displayName',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
}

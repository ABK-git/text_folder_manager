<?php

namespace App\Models;

use Ramsey\Uuid\Uuid;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Folder extends Model
{
    use HasFactory;

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

    protected $fillable = [
        'title',
        'user_id',
        "main_or_sub",
        "user_and_folder_id"
    ];
}
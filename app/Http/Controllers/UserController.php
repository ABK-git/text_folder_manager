<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserStorePost;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    //Userデータを登録する
    public function store(UserStorePost $request)
    {
        User::create([
            'displayName' => $request->displayName,
            'email' => $request->email,
            'password' => $request->password
            //本番ではHash::make($request['password])を使う
            //'password' => Hash::make($request['password'])
        ]);
    }
}

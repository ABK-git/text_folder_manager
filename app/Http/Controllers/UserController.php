<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserShowPost;
use App\Models\User;
use App\Http\Requests\UserStorePost;


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

    //Userデータを取得する
    public function show(UserShowPost $request)
    {
        $user = User::where('email', $request->input('email'))
        ->where('password', $request->input('password'))->first();

        return $user;
    }
}

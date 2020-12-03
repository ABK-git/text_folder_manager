<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Http\Requests\UserShowPost;
use App\Http\Requests\UserStorePost;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    //Userデータを登録する
    public function store(UserStorePost $request)
    {
        User::create([
            'displayName' => $request->displayName,
            'email' => $request->email,
            //'password' => $request->password
            //本番ではHash::make($request['password])を使う
            'password' => Hash::make($request['password'])
        ]);
    }

    //Userデータを取得する
    public function show(UserShowPost $request)
    {
        //ポートフォリオ用
        //$user = User::where('email', $request->input('email'))
        //->where('password', $request->input('password'))->first();

        //実用
        $user = User::where('email', $request->input('email'))->first();
        
        //passwordが間違ってる場合
        if(!Hash::check($request->input('password'),$user->password )){
            abort(422, "パスワードが違います");
        }
        return $user;
    }
}

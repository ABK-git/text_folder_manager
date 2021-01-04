<?php

namespace App\Http\Controllers;

use App\Models\MainOrSub;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Schema;

class MainOrSubController extends Controller
{
    //中間テーブルのデータを登録する
    public function store(Request $request)
    {
        //一時的に外部キー制約を無効にする
        Schema::disableForeignKeyConstraints();

        $duringTable = MainOrSub::create([
            'user_id' => $request->user_id,
            'folder_id' => $request->folder_id,
            "main_or_sub" => $request->main_or_sub
        ]);

        //外部キー制約を戻す
        Schema::enableForeignKeyConstraints();

        return $duringTable;
    }

    //中間テーブルを編集する
    public function update(Request $request)
    {
        $main_or_sub = MainOrSub::find($request->id);
        $main_or_sub->folder_id = $request->folder_id;

        $main_or_sub->save();
        return $main_or_sub;
    }

    //中間テーブルをすべて取得する
    public function getAll($id)
    {
        return MainOrSub::where("user_id",$id)->get();
    }
}

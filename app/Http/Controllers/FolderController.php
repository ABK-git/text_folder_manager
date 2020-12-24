<?php

namespace App\Http\Controllers;

use App\Models\Folder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Schema;

class FolderController extends Controller
{
    //Folderを登録する
    public function store(Request $request)
    {
        //外部キーを無効化
        Schema::disableForeignKeyConstraints();

        return Folder::create([
            'title' => $request->title,
            'user_id' => $request->user_id,
            'user_and_folder_id' => $request->user_and_folder_id,
            'main_or_sub' => $request->main_or_sub
        ]);

        //外部キーを有効化
        Schema::enableForeignKeyConstraints();
    }
}

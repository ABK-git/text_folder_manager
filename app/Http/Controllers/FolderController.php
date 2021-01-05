<?php

namespace App\Http\Controllers;

use App\Models\Folder;
use Illuminate\Http\Request;

class FolderController extends Controller
{
    //Folderを登録する
    public function store(Request $request)
    {
        return Folder::create([
            'title' => $request->title,
            'user_id' => $request->user_id,
            'during_id' => $request->during_id,
        ]);
    }

}

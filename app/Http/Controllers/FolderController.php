<?php

namespace App\Http\Controllers;

use Exception;
use App\Models\Folder;
use App\Models\MainOrSub;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class FolderController extends Controller
{
    //Folderを登録する
    public function store(Request $request)
    {

        $folder = null;
        $duringFolder = null;

        DB::beginTransaction();

        try{
            //Folderを作成
            $folder = Folder::create([
            'title' => $request->folder_name,
            'user_id' => $request->user_id,
            'during_id' => $request->during_id,
            ]);
            //中間テーブルを作成
            $duringFolder = MainOrSub::create([
                'user_id' => $request->user_id,
                'folder_id' => $folder->id,
                "main_or_sub" => false
            ]);
            //処理を確定
            DB::commit();
        }catch(Exception $e){
            //処理を取り消す
            DB::rollBack();
        }
        //Folderと中間テーブルを返す
        return array($folder, $duringFolder);
    }

    //Folderをすべて取得する
    public function getAll($id)
    {
        return Folder::where("user_id",$id)->get();
    }

    //Folderのタイトルを変更する
    public function updateTitle(Request $request){
        //return Folder::where('id',$request->id)->update(['title' => $request->title]);
        $folder = Folder::find($request->id);
        $folder->title = $request->title;
        $folder->save();

        return $folder;
    }

}

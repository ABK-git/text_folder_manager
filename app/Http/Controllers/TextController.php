<?php

namespace App\Http\Controllers;

use App\Models\Text;
use Illuminate\Http\Request;

class TextController extends Controller
{
    public function store(Request $request)
    {
        return Text::create([
            'title' => $request->title,
            'content' => $request->content,
            'user_id' => $request->user_id,
            'during_id' => $request->during_id
        ]);
    }

    //Textをすべて取得する
    public function getAll($id)
    {
        return Text::where("user_id",$id)->get();
    }

    //Textのタイトルを変更する
    public function updateTitle(Request $request){
        
        $text = Text::find($request->id);
        $text->title = $request->title;
        $text->save();

        return $text;
    }
    //Textの中身を変更する
    public function update(Request $request){
        $text = Text::find($request->id);

        $text->content = $request->content;
        $text->save();

        return $text;
    }

    //Textを削除する
    public function destroy($id)
    {
        return Text::destroy($id);
    }
}

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
}

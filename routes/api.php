<?php

use App\Http\Controllers\FolderController;
use App\Http\Controllers\MainOrSubController;
use App\Http\Controllers\TextController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

//ユーザー登録
Route::post('/register', [UserController::class,'store']);
//ユーザー取得
Route::post('/show', [UserController::class,'show']);

//MainOrSubを登録
Route::post('/main_or_sub/create', [MainOrSubController::class, 'store']);
//MainOrSubのupdate
Route::post('/main_or_sub/update', [MainOrSubController::class, 'update']);
//特定ユーザーのMainOrSubをすべて取得
Route::get('/main_or_subs/get_all/{id}', [MainOrSubController::class, 'getAll']);

//Folderを登録
Route::post('/folder/create', [FolderController::class, 'store']);
//Folderを編集
Route::post('/folder/update', [FolderController::class, 'updateTitle']);
//特定ユーザーのFolderをすべて取得
Route::get('/folder/get_all/{id}', [FolderController::class, 'getAll']);

//Textを登録
Route::post("/text/create", [TextController::class, 'store']);
//特定ユーザーのTextをすべて取得
Route::get('/text/get_all/{id}', [TextController::class, 'getAll']);
//Textの名前を編集
Route::post('/text/update_name', [TextController::class, 'updateTitle']);

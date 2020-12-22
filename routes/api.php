<?php

use App\Http\Controllers\FolderController;
use App\Http\Controllers\MainOrSubController;
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
Route::post('/register',[UserController::class,'store']);
//ユーザー取得
Route::post('/show',[UserController::class,'show']);

//MainOrSubを登録
Route::post('/main_or_sub/create', [MainOrSubController::class, 'store']);

//MainOrSubのupdate
Route::post('/main_or_sub/update', [MainOrSubController::class, 'update']);

//Folderを登録
Route::post('/folder/create',[FolderController::class, 'store']);
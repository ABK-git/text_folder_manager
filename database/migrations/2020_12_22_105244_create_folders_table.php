<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFoldersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('folders', function (Blueprint $table) {
            //uuidを使用
            $table->uuid('id')->primary();
            $table->string('title')->nullable();

            //user_idの外部参照
            $table
            ->foreignUuid('user_id')
            ->references('id')
            ->on('users')
            ->cascadeOnDelete();
            
            //中間テーブルの外部参照
            $table
            ->foreignUuid('user_and_folder_id')
            ->references('id')
            ->on('main_or_subs')
            ->cascadeOnDelete();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('folders');
    }
}

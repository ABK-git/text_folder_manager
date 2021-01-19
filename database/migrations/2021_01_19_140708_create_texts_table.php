<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTextsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('texts', function (Blueprint $table) {
            $table->uuid('id')->primary();

            $table->string('title');
            $table->string("content");

            //userの外部参照
            $table
            ->foreignUuid('user_id')
            ->references('id')
            ->on('users')
            ->cascadeOnDelete();
            
            //中間テーブルの外部参照
            $table
            ->foreignUuid('during_id')
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
        Schema::dropIfExists('texts');
    }
}

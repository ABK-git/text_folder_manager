<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMainOrSubsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('main_or_subs', function (Blueprint $table) {
            //uuid
            $table->uuid('id')->primary();
            
            //どのUserが持つものか
            $table
            ->foreignUuid('user_id')
            ->references('id')
            ->on('users')
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
        Schema::dropIfExists('main_or_subs');
    }
}

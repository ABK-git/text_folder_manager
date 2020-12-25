<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnFolderId extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('main_or_subs', function (Blueprint $table) {
            //どのFolderに属するものか
            $table
            ->foreignUuid('folder_id')->nullable()
            ->references('id')
            ->on('folders')
            ->cascadeOnDelete('id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('main_or_subs', function (Blueprint $table) {
            $table->dropColumn('folder_id');
        });
    }
}

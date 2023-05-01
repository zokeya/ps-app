<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('leave_process', function (Blueprint $table) {
            $table->foreignId('leave_transaction_id')->constrained();
            $table->foreignId('workflow_step_id')->constrained();
            $table->integer('approver_id')->constrained()->references('id')->on('users');
            $table->string('status')->default('Pending');
            $table->string('remarks')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('leave_process');
    }
};

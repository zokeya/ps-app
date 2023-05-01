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
        Schema::create('leave_types', function (Blueprint $table) {
            $table->id();
            $table->string('code')->max([15])->unique();
            $table->string('name')->unique();
            $table->decimal('entitlement',6,4)->default(00.0000);
            $table->enum('gender',['All', 'Male', 'Female'])->default('All');
            $table->boolean('include_offdays')->default(false);
            $table->boolean('include_saturdays')->default(false);
            $table->boolean('include_sundays')->default(false);
            $table->boolean('carry_forward')->default(false);
            $table->decimal('carry_fwd_days',6,4)->default(00.0000);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('leave_types');
    }
};

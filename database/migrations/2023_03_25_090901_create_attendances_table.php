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
        Schema::create('attendances', function (Blueprint $table) {
            $table->id();
            $table->integer('emp_sn');
            $table->string('emp_code')->max([15]);
            $table->string('emp_names');
            $table->string('emp_department');
            $table->string('emp_designation');
            $table->datetime('att_date');
            $table->datetime('att_timein')->nullable();
            $table->datetime('att_timeout')->nullable();
            $table->double('att_hours', 6,4)->nullable();
            $table->double('att_ot1hrs', 6,4)->nullable();
            $table->double('att_ot2hrs', 6,4)->nullable();
            $table->double('att_losthrs', 6,4)->nullable();
            $table->double('att_approvedgrosshrs', 6,4)->nullable();
            $table->boolean('att_isapproved')->default(false);
            $table->datetime('att_approvaldate')->nullable();
            $table->double('att_shifthrs', 6,4)->nullable();
            $table->double('att_productionhrs', 6,4)->nullable();
            $table->double('att_approvedot1hrs', 6,4)->nullable();
            $table->double('att_approvedot2hrs', 6,4)->nullable();
            $table->double('att_approvedlosthrs', 6,4)->nullable();
            $table->double('att_lateinhrs', 6,4)->nullable();
            $table->double('att_earlyouthrs', 6,4)->nullable();
            $table->time('att_shiftstarttime')->nullable();
            $table->time('att_shiftendtime')->nullable();
            $table->string('att_plannedshift')->nullable();
            $table->string('att_actualshift')->nullable();
            $table->string('att_holiday')->nullable();
            $table->string('att_statusnotes')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('attendances');
    }
};

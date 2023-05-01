<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class WorkflowSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        DB::table('workflows')->insert([
            [
                'code' => 'OVERTIME',
                'name' => 'Overtime Workflow',
                'description' => 'Used for Overtime(s) submissions',
            ],
            [
                'code' => 'LEAVE',
                'name' => 'Leaves Workflow',
                'description' => 'Used for Leave(s) submissions',
            ],
        ]);
    }
}

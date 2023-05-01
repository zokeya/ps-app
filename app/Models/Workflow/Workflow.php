<?php

namespace App\Models\Workflow;

use App\Models\Workflow\WorkflowStep;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Workflow extends Model
{
    use HasFactory;

    protected $guarded = [];

    /**
     * Get all of the steps for the Workflow
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function approvalSteps()
    {
        return $this->hasMany(WorkflowStep::class);
    }
}

<?php

namespace App\Models\Leave;

use App\Models\Workflow\WorkflowStep;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LeaveTransaction extends Model
{
    use HasFactory;

    protected $guarded = [];

    /**
     * The processes that belong to the LeaveTransaction
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function processes()
    {
        return $this->belongsToMany(WorkflowStep::class, 'leave_process', 'leave_transaction_id', 'workflow_step_id');
    }
}

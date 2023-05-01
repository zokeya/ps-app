<?php

namespace App\Models\Workflow;

use App\Models\Leave\LeaveTransaction;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WorkflowStep extends Model
{
    use HasFactory;

    protected $guarded = [];

    /**
     * The leaveTransactions that belong to the WorkflowStep
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function leaveTransactions()
    {
        return $this->belongsToMany(LeaveTransaction::class, 'leave_process', 'workflow_step_id', 'leave_transaction_id');
    }
}

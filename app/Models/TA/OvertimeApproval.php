<?php

namespace App\Models\TA;

use App\Models\TA\Attendance;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class OvertimeApproval extends Model
{
    use HasFactory;
    protected $guarded = [];

    /**
     * Get the Attendance that owns the OvertimeApproval
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function Attendance(): BelongsTo
    {
        return $this->belongsTo(Attendance::class);
    }
}

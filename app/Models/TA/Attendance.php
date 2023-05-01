<?php

namespace App\Models\TA;

use App\Models\TA\OvertimeApproval;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Attendance extends Model
{
    use HasFactory;
    protected $guarded = [];
    //protected $fillable = [];

    protected $casts = [
        'att_date' => 'date',
        'att_approvaldate' => 'date:m/d/y',
        // 'att_timein' => 'date',
        // 'att_timeout' => 'date',
    ];

    /**
     * Get all of the overtimeApprovals for the Attendance
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function overtimeApprovals(): HasMany
    {
        return $this->hasMany(OvertimeApproval::class);
    }
}

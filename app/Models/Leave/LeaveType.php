<?php

namespace App\Models\Leave;

use App\Models\Leave\LeaveTransaction;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class LeaveType extends Model
{
    use HasFactory;

    protected $guarded = [];

    /**
     * Get all of the transactions for the LeaveType
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function transactions()
    {
        return $this->hasMany(LeaveTransaction::class);
    }
}

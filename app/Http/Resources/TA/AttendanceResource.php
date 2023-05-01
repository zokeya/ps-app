<?php

namespace App\Http\Resources\TA;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

use function PHPUnit\Framework\isNull;

class AttendanceResource extends JsonResource
{
    public static $wrap = false;
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'emp_sn' => $this->emp_sn,
            'emp_code' => $this->emp_code,
            'emp_names' => $this->emp_names,
            'emp_department' => $this->emp_department,
            'emp_designation' => $this->emp_designation,
            'att_date' => $this->att_date->format('d/m/Y'),
            'att_timein' => is_null($this->att_timein) ? 'Missing' : date('h:i A', strtotime($this->att_timein)),
            'att_timeout' => is_null($this->att_timeout) ? 'Missing' : date('h:i A', strtotime($this->att_timeout)),
            'att_hours' => $this->att_hours,
            'att_ot1hrs' => $this->att_ot1hrs,
            'att_oth2rs' => $this->att_oth2rs,
            'att_losthrs' => $this->att_losthrs,
            'att_approvedgrosshrs' => $this->att_approvedgrosshrs,
            'att_isapproved' => $this->att_isapproved,
            'att_approvaldate' => $this->att_approvaldate,
            'att_shifthrs' => $this->att_shifthrs,
            'att_productionhrs' => $this->att_productionhrs,
            'att_approvedot1hrs' => $this->att_approvedot1hrs,
            'att_approvedot2hrs' => $this->att_approvedot2hrs,
            'att_approvedlosthrs' => $this->att_approvedlosthrs,
            'att_lateinhrs' => $this->att_lateinhrs,
            'att_earlyouthrs' => $this->att_earlyouthrs,
            'att_shiftstarttime' => $this->att_shiftstarttime,
            'att_shiftendtime' => $this->att_shiftendtime,
            'att_plannedshift' => $this->att_plannedshift,
            'att_actualshift' => $this->att_actualshift,
            'att_holiday' => $this->att_holiday,
            'att_statusnotes' => $this->att_statusnotes,
            // 'created_at' => $this->created_at->format('Y-m-d H:i:s')
        ];
    }
}

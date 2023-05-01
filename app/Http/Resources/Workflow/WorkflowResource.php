<?php

namespace App\Http\Resources\Workflow;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\Workflow\WorkflowStepResource;

class WorkflowResource extends JsonResource
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
            'code' => $this->code,
            'name' => $this->name,
            'description' => $this->description,
            // 'workflowSteps1' => $this->approvalSteps,
            'workflowSteps' => WorkflowStepResource::collection($this->whenLoaded('approvalSteps')),
            // 'created_at' => $this->created_at->format('Y-m-d H:i:s')
        ];
    }
}

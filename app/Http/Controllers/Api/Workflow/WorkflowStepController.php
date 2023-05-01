<?php

namespace App\Http\Controllers\Api\Workflow;

use App\Http\Controllers\Controller;
use App\Models\Workflow\WorkflowStep;
use App\Http\Requests\StoreWorkflowStepRequest;
use App\Http\Requests\UpdateWorkflowStepRequest;
use App\Http\Resources\Workflow\WorkflowStepResource;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class WorkflowStepController extends Controller
{
    /**
     * Display a listing of the resource.
     * @return AnonymousResourceCollection
     */
    public function index()
    {
        return WorkflowStepResource::collection(WorkflowStep::query()->orderBy('workflow_id', 'desc'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreWorkflowStepRequest $request)
    {
        $data = $request->validated();
        $processFlow = WorkflowStep::query()->create($data);

        return response(new WorkflowStepResource($processFlow), 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(WorkflowStep $processFlow)
    {
        return new WorkflowStepResource($processFlow);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateWorkflowStepRequest $request, WorkflowStep $processFlow)
    {
        $data = $request->validated();
        $processFlow->update( $data);

        return new WorkflowStepResource($processFlow);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(WorkflowStep $processFlow)
    {
        //
    }
}

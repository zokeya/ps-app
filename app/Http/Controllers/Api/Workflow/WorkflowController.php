<?php

namespace App\Http\Controllers\Api\Workflow;

use App\Http\Controllers\Controller;
use App\Models\Workflow\Workflow;
use App\Http\Requests\StoreWorkflowRequest;
use App\Http\Requests\UpdateWorkflowRequest;
use App\Http\Resources\Workflow\WorkflowResource;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class WorkflowController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return AnonymousResourceCollection
     */
    public function index()
    {
        return WorkflowResource::collection(Workflow::with(['approvalSteps'])->orderBy('id', 'desc')->paginate(15))->response();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreWorkflowRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Workflow $processType)
    {
        return new WorkflowResource($processType);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateWorkflowRequest $request, Workflow $processType)
    {
        $data = $request->validated();
        if (isset($data['approval_steps'])) {
            $processType->approvalSteps->updateOrCreate($data['approval_steps']);
        }

        // return new WorkflowResource($processType);
        return response(new WorkflowResource($processType), 201);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Workflow $processType)
    {
        //
    }
}

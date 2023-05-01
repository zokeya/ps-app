<?php

namespace App\Http\Controllers\Api\TA;

use App\Http\Controllers\Controller;
use App\Http\Resources\TA\OvertimeApprovalResource;
use App\Models\TA\OvertimeApproval;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class OvertimeController extends Controller
{
    /**
     * Display a listing of the resource.
     * @return AnonymousResourceCollection
     */
    public function index()
    {
        return OvertimeApprovalResource::collection(OvertimeApproval::query()->orderBy('created_at', 'desc')->paginate(15));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(OvertimeApproval $overtimeApproval)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, OvertimeApproval $overtimeApproval)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(OvertimeApproval $overtimeApproval)
    {
        //
    }
}

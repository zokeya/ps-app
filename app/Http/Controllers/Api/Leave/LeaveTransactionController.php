<?php

namespace App\Http\Controllers\Api\Leave;

use App\Http\Controllers\Controller;
use App\Models\Leave\LeaveTransaction;
use App\Http\Requests\StoreLeaveTransactionRequest;
use App\Http\Requests\UpdateLeaveTransactionRequest;

class LeaveTransactionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreLeaveTransactionRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(LeaveTransaction $leaveTransaction)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateLeaveTransactionRequest $request, LeaveTransaction $leaveTransaction)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(LeaveTransaction $leaveTransaction)
    {
        //
    }
}

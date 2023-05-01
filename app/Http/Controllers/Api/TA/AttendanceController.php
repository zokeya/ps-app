<?php

namespace App\Http\Controllers\Api\TA;

use Illuminate\Http\Request;
use App\Models\TA\Attendance;
use App\Http\Controllers\Controller;
use Illuminate\Database\Eloquent\Builder;
use App\Http\Requests\StoreAttendanceRequest;
use App\Http\Resources\TA\AttendanceResource;
use App\Http\Requests\UpdateAttendanceRequest;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class AttendanceController extends Controller
{
    /**
     * Display a listing of the resource.
     * @return AnonymousResourceCollection
     */
    public function index()
    {
        return AttendanceResource::collection(Attendance::query()->orderBy('att_date', 'desc')->paginate(15));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        if (!auth()->user()->tokenCan('sync:attendance')) {
            abort(403,'Unauthorized');
        }
        return Attendance::insert($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(Attendance $attendance)
    {
        return new AttendanceResource($attendance);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateAttendanceRequest $request, Attendance $attendance)
    {
        $data = $request->validated();
        // if (isset($data['password'])) {
        //     $data['password'] = bcrypt($data['password']);
        // }
        $attendance->update( $data);

        return new AttendanceResource($attendance);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Attendance $attendance)
    {
        //
    }

    public function bulkStore(Request $request)
    {
        if (!auth()->user()->tokenCan('sync:attendance')) {
            abort(403,'Unauthorized');
        }
        return Attendance::insert($request->json);
    }

    public function overtimes()
    {
        return AttendanceResource::collection(Attendance::query()
            ->where(function (Builder $query) {
                return $query->where('att_ot1hrs', '>', 0)
                             ->orWhere('att_ot2hrs', '>', 0);
            })->orderBy('att_date', 'desc')->paginate(15));

    }
}

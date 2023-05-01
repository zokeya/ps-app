<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\TA\AttendanceController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\Workflow\WorkflowController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->group(function(){
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::apiResource('/users', UserController::class);
    Route::apiResource('/workflows', WorkflowController::class);


    Route::apiResource('/attendance', AttendanceController::class);
    Route::get('/overtimes',[AttendanceController::class, 'overtimes']);

    Route::post('/attendance/create-att',[AttendanceController::class, 'store']);
    Route::post('attendance/bulk',[AttendanceController::class, 'bulkStore']);

    // Route::post('attendance/bulk',['users'=>'AttendanceController@bulkStore']);
});

Route::post('/signup', [AuthController::class, 'signup']);
Route::post('/login', [AuthController::class, 'login']);

Route::get('/test', [WorkflowController::class, 'index']);
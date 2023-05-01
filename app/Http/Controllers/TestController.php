<?php

namespace App\Http\Controllers;

use App\Models\Workflow\Workflow;
use Illuminate\Http\Request;

class TestController extends Controller
{
    public function test()
    {
       return collect(Workflow::with('approvalSteps')->get());
    }
}

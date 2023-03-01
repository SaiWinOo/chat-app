<?php

use App\Events\TestingEvent;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    TestingEvent::dispatch('hello');
    return view('app');
});

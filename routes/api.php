<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::prefix('v1')->group(function () {
    //PUBLIC
    //::public 
    Route::get('users/{slug}', [FrontController::class, 'categoria']);


    //PRIVATE
});


Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
  return $request->user();
});

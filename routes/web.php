<?php

use Spatie\Permission\Models\role;
use Illuminate\Support\Facades\Route;

// $role = Role::create(['name' => 'admin']);
// $role = Role::create(['name' => 'client']);
Route::get('/{any}', function () {
    return view('welcome');
})->where('any', '.*');;

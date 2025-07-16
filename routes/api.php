<?php

use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::post('register', [AuthController::class,'register']);
Route::post('login', [AuthController::class,'login']);

// Route::middleware(['inject.jwt', 'auth:sanctum'])->group(function () {
//     Route::get('/user', [AuthController::class, 'user']);
// });
Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('/user', [AuthController::class, 'user']);
    Route::post('/logout', [AuthController::class, 'logout']);
});

// Route::middleware(['inject.jwt', 'auth:sanctum'])->get('/check', function (Request $request) {
//     return $request->user();
// });
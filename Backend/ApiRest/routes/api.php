<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\FacturaController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group([
    'prefix' => 'auth'
], function () {
    Route::post('Register', [UserController::class, 'Register']);
    Route::post('login', [UserController::class, 'login']);
});

Route::group([
    'prefix' => 'product'
], function () {
    Route::post('Register', [ProductController::class, 'Register']);
    Route::get('Index', [ProductController::class, 'index']);
    Route::get('show/{id}', [ProductController::class, 'show']);
});
Route::group([
    'prefix' => 'Factura'
], function () {
    Route::post('Register', [FacturaController::class, 'Register']);
    Route::get('Index', [FacturaController::class, 'index']);
});


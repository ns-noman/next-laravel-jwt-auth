<?php

namespace App\Http\Controllers;

use App\Models\User;
use Cookie;
use Hash;
use Auth;
use Illuminate\Http\Request;
use Response;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $user = User::create([
            'name'=>$request->input('name'),
            'email'=>$request->input('email'),
            'password'=>Hash::make($request->input('password')),
        ]);
        return $user;
    }
    public function login(Request $request)
    {
        if(!Auth::attempt($request->only('email', 'password'))){
            return response()->json([
                "message"=> "Invalid Credentials!"
            ],  401);
        }
        $user = Auth::user();
        $token = $user->createToken('token ')->plainTextToken;
        $cookie = cookie('jwt', $token, 60*24);
        return response()->json([
            "message"=> "Success",
            "token"=> $token,
        ])->withCookie($cookie);
    }
    public function user()
    {
        return Auth::user();
    }
    public function logout(Request $request)
    {
        $cookie = Cookie::forget('jwt');
        return response()->json([
            'message'=> 'Success'
        ])->withCookie($cookie);
    }
}

<?php

namespace App\Http\Controllers\Api;

use App\Models\user;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
  public function register(Request $request){
    // validacion

    $validator = Validator::make($request->all(), [
      'name' => 'required',
      'email' => 'required|email',
      'password' => 'required',
    ]);

    if($validator->fails()){
      $response = ["error"=>$validator->errors()];
      return response()->json($response,200);
    }
    $response = ["success"=>"false"];
    $input = $request->all();
    $input["password"] = bcrypt($input["password"]);

    $user = User::create($input);
    $user->assignRole('admin');

    $response["success"] = true;
    $response["token"] = $user->createToken("alejoTest")->plainTextToken;
    return response()->json($response,200);
  }

  public function login(Request $request){
    $response = ["success"=>"false"];
    $validator = Validator::make($request->all(), [
      'email' => 'required|email',
      'password' => 'required',
    ]);
    if($validator->fails()){
      $response = ["error"=>$validator->errors()];
      return response()->json($response,200);
    }
    if(auth()->attempt(['email' => $request->email, 'password' => $request->password])){
      $user = auth()->user();
      $user->hasRole('client'); // add rol 

      $response['token'] = $user->createToken("test")->plainTextToken;
      $response['user'] = $user;
      $response['success'] = true;
    }
    return response()->json($response,200);
  }

  public function logout(){
    $response = ["success"=>false];
    auth()->user()->tokens()->delete();
    $response = [
      "success"=>true,
      "message"=>"Sesion cerrada"
    ];
    return response()->json($response, 200);
  }
}

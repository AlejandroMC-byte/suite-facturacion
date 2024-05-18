<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CategoriaController extends Controller
{
    public function index(){
        $data = Categoria::orderBy("orden")->get(["id","name"]);
        return response()->json($data, 200);
    }
    function store(Request $request){
        // validacion
        $data = new Categoria($request->all());
        // upload image base64
        if($request->urlfoto){
            $img = $request->urlfoto;
            // process
            $folderpath = "/img/categoria/";
            $image_parts = explode(";base64,",$img);
            $image_type_aux = explode("image/",$image_parts[0]);
            $image_type = $image_type_aux[1];
            $image_base64 = base64_decode($image_parts[1]);
            $file = $folderpath . Str::slug($request->nombre) . '.' .$image_type;
            file_put_contents(public_path($file),$image_base64);
        }
        $data->save;
        return response()->json($data, 200);
    }
    public function show($id){
        $data = Categoria::find($id);
        return response()->json($data, 200);
    }
    public function update(Request $request,$id){
        // validacion ...
        $data = Categoria::find($id);
        $data->fill($request->all());
        $data->save();
        return response()->json($data, 200);
    }
}

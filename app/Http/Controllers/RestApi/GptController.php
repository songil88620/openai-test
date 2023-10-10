<?php 
 
namespace App\Http\Controllers\RestApi;

use App\Models\Aires;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Http;

class GptController extends Controller
{
    public function index(Request $request)
    {
        return "gpt res";
    }

    public function addOne(Request $request)
    {

        $aires = new Aires;
        $aires->uid = $request['uid'];
        $aires->query = $request['query'];
        
        $response = Http::post('http://127.0.0.1:5000/call_gpt', [
            'msg' => $request['query'],
        ]);

        $aires->result = $response;     
       
        // return $response ; 

        if($aires->save()){
            return "ok";
        }
    }
}
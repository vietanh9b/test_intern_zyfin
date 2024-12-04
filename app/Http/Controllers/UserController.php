<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateUserRequest;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;

class UserController extends Controller
{
    public function index()
    {
        return view('index');
    }
    public function store(CreateUserRequest $request)
    {
        try {
            DB::beginTransaction();
            $data = $request->all();
            DB::table('get_in_touch_levietanh')->insert([
                'name' => $data['name'],
                'email' => $data['email'],
                'country' => $data['country_name'],
                'message' => $data['message'],
                'company' => $data['company_name'],
                'support' => $data['choose_support'],
                'created_at' => Carbon::now()
            ]);
            DB::commit();
            return redirect()->route('user.index')->with('success', 'Thêm người dùng thành công');
        } catch (\Exception $e) {
            return Redirect::back()->with('error', 'Errors: ' . $e->getMessage());
        }
    }
}

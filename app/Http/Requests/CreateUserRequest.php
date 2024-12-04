<?php
namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateUserRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'name' => 'required|string|max:255', 
            'email' => 'required|email|max:255', 
            'country' => 'required|string|max:255',
            'message' => 'required|string|max:1000',
            'company_name'=>'required',
            'choose_support' => 'required', 
        ];
    }

    public function messages()
    {
        return [
            // Messages for 'name'
            'name.required' => 'Vui lòng nhập tên.',
            'name.string' => 'Tên phải là một chuỗi ký tự.',
            'name.max' => 'Tên không được vượt quá 255 ký tự.',
    
            // Messages for 'email'
            'email.required' => 'Vui lòng nhập email.',
            'email.email' => 'Email không đúng định dạng.',
            'email.max' => 'Email không được vượt quá 255 ký tự.',
    
            // Messages for 'country'
            'country.required' => 'Vui lòng chọn quốc gia.',
            'country.string' => 'Quốc gia phải là một chuỗi ký tự.',
            'country.max' => 'Quốc gia không được vượt quá 255 ký tự.',
    
            // Messages for 'message'
            'message.required' => 'Vui lòng nhập nội dung tin nhắn.',
            'message.string' => 'Nội dung tin nhắn phải là một chuỗi ký tự.',
            'message.max' => 'Nội dung tin nhắn không được vượt quá 1000 ký tự.',
    
            'company_name.required' => 'Vui lòng chọn tên công ty.',

            // Messages for 'choose_support'
            'choose_support.required' => 'Vui lòng chọn loại hỗ trợ.',
        ];
    }

    // Phương thức này sẽ được gọi khi có lỗi validation
    // public function redirectTo()
    // {
    //     return url()->current() . '#contact-us-form';
    // }
}

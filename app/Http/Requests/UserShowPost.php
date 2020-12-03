<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserShowPost extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'email' => 'exists:users,email',
            //実用では不要
            //'password' => 'exists:users,password'
        ];
    }

    public function messages()
    {
        //Validationのエラーメッセージを設定
        return [
            'email.exists' => 'メールアドレスが登録されていません',
            //実用では不要
            //'password.exists' => 'パスワードが違います',
        ];
    }
}

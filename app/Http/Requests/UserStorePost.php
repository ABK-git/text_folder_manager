<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserStorePost extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        //有効化
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        //Validationのルールを設定
        return [
            'displayName' => ['required','min:3','max:10'],
            'email' => ['required','unique:users'],
            'password' => ['required','confirmed','min:4','max:8'],
            'password_confirmation' => ['required']
        ];
    }

    public function messages()
    {
        //Validationのエラーメッセージを設定
        return [
            'displayName.required' => 'ユーザー名を入力してください!',
            'displayName.min' => 'ユーザー名は最低3文字以上です!',
            'displayName.max' => 'ユーザー名は最高10文字までです!',

            'email.required' => 'メールアドレスを入力してください!',
            'email.unique' => 'そのメールアドレスは登録済みです!',
            
            'password.required' => 'パスワードを入力してください',
            'password.confirmed' => '入力されたパスワードと確認パスワードが一致していません!',
            'password.min' => 'パスワードは4文字以上で入力してください',
            'password.max' => 'パスワードは8文字以内で入力してください',

            'password_confirmation' => '確認パスワードを入力してください!',
        ];
    }
}

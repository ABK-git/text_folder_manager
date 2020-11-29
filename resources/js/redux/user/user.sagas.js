//action.type
import UserActionTypes from "./user.types";
//redux-saga関連
import { all, put, takeLatest, call } from "redux-saga/effects";
//axios通信
import axios from "axios";

//ユーザー情報を登録する
export function* signUp({ payload: {userCredentials} }) {
    console.log("this is signup");
    //apiを呼び出してユーザー情報を登録する
    axios
        .post("/api/register", userCredentials)
        .then(response => {
            console.log("this is success");
            //登録した名前とemaiを取得する
            const { displayName, email } = response.config.data;
            //signUpSuccessのactionを呼び出す
            put(signUpSuccess({ displayName, email }));
        })
        .catch(error => {
            //エラーメッセージ取得
            const errors = error.response.data.errors;
            console.log(errors);
        });
}

//ユーザー登録に成功した後に呼び出される
export function* signInAfterSignUp({ payload: { displayName, email } }) {
    //ここにaxios通信のログインを記載する
}

/**
 * actionsでUserActionTypes.SIGN_UP_STARTが選択されたとき、
 * signupメソッドを実行する
 * */
export function* onSignUpStart() {
    console.log("this is signupstart");
    yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
}

/**
 * actionsでUserActionTypes.SIGN_UP_SUCCESSが選択されたとき、
 * signInAfterSignUpメソッドを実行する
 */
export function* onSignUpSuccess() {
    yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp);
}

//redux-sagaによる非同期監視のスタート
export function* userSagas() {
    yield all([call(onSignUpStart), call(onSignUpSuccess)]);
}

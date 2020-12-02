//type
import UserActionTypes from "./user.types";
//action
import {
    signUpFailure,
    signUpSuccess,
    signInFailure,
    signInSuccess
} from "./user.actions";
//redux-saga関連
import { all, put, takeLatest, call } from "redux-saga/effects";
//axios通信
import axios from "axios";

//ユーザー情報の取得
export function* getUser(email, password) {
    console.log("this is getUser");
    //ユーザー情報取得のエラーメッセージ
    let errors = null;

    //paramsを作成
    let params = new URLSearchParams();
    params.append("email", email);
    params.append("password", password);
    //ユーザー情報の取得
    const user = yield axios.post("/api/show", params).catch(error => {
        errors = error.response.data.errors;
        console.log(errors);
    });

    console.log("next is user");

    //情報取得成功の場合
    if (errors === null) {
        console.log("情報取得成功");
        yield put(signInSuccess(user));
    } else {
        console.log("failure");
        yield put(signInFailure(errors));
    }
}

//ユーザー情報を登録する
export function* signUp({ payload: { userCredentials } }) {
    console.log("this is signup");
    //emailとpasswordをあらかじめ保存しておく
    const { email, password } = userCredentials;
    //登録失敗時のエラーメッセージを入れる場所
    let errors = null;

    yield axios.post("/api/register", userCredentials).catch(error => {
        errors = error.response.data.errors;
    });
    //登録に成功した場合
    if (errors === null) {
        yield put(signUpSuccess({ email, password }));
    } else {
        yield put(signUpFailure(errors));
    }
}

//ユーザー登録に成功した後に呼び出される
export function* signInAfterSignUp({ payload: { email, password } }) {
    console.log(email);
    console.log(password);
    //ユーザー取得
    yield getUser(email, password);
}

//ログイン時に呼び出される
export function* signInWithEmaiAndPassword({ payload: { userCredentials } }) {
    console.log("signInWithEmailAndPassword");
    const { email, password } = userCredentials;

    //ユーザー取得
    yield getUser(email, password);
}

/**
 * actionsでUserActionTypes.SIGN_UP_STARTが選択されたとき、
 * signupメソッドを実行する
 * */
export function* onSignUpStart() {
    console.log("this is signupstart");
    yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
}

//ユーザー登録成功時
export function* onSignUpSuccess() {
    console.log("this is onSignUpSuccess");
    yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp);
}

/**
 * actionsでUserActionTypes.SIGN_IN_STARTが選択されたとき、
 * signInWithEmaiAndPasswordメソッドを呼び出す
 */
export function* onSignInStart() {
    console.log("signInStart");
    yield takeLatest(UserActionTypes.SIGN_IN_START, signInWithEmaiAndPassword);
}

//redux-sagaによる非同期監視のスタート
export function* userSagas() {
    yield all([
        call(onSignUpStart),
        call(onSignUpSuccess),
        call(onSignInStart)
    ]);
}

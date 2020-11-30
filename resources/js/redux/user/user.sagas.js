//type
import UserActionTypes from "./user.types";
//action
import { signUpFailure, signUpSuccess } from "./user.actions";
//redux-saga関連
import { all, put, takeLatest, call } from "redux-saga/effects";
//axios通信
import axios from "axios";

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
        console.log("失敗");
        console.log(errors);
        yield put(signUpFailure(errors));
    }

    // try {
    //     console.log("this is try");
    //     //ユーザー登録
    //     response = yield axios.post("/api/register", userCredentials);
    //     console.log(response);
    //     yield put(signUpSuccess({ email, password}));
    // } catch (error) {
    //     console.log(response);
    //     yield put(signUpFailure(error.data));
    // }
}

//ユーザー登録に成功した後に呼び出される
export function* signInAfterSignUp({ payload: { email, password } }) {
    //ここにaxios通信のログインを記載する
    console.log("signInAfter");
    console.log({ email });
    console.log({ password });
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
    console.log("this is onSignUpSuccess");
    yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp);
}

//redux-sagaによる非同期監視のスタート
export function* userSagas() {
    yield all([call(onSignUpStart), call(onSignUpSuccess)]);
}

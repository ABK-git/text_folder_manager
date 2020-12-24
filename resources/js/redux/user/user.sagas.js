//type
import UserActionTypes from "./user.types";
//action
import { signInSuccess } from "./user.actions";
import { signInFailure, signUpFailure } from "../error/error.actions";

//redux-saga関連
import { all, put, takeLatest, call } from "redux-saga/effects";
//axios通信
import axios from "axios";
import { createFolder } from "../folder/folder.actions";

//ユーザー情報の取得
export function* getUser(email, password) {
    //ユーザー情報取得のエラーメッセージ
    let errors = null;

    //paramsを作成
    let params = new URLSearchParams();
    params.append("email", email);
    params.append("password", password);

    //ユーザー情報の取得
    const user = yield axios.post("/api/show", params).catch(error => {
        errors = error.response.data.errors;
        /**
         * メールアドレスに登録されている
         * パスワードが間違っていた場合
         **/
        if (errors === undefined) {
            errors = { password: [error.response.data.message] };
        }
    });

    //情報取得成功の場合
    if (errors === null) {
        //ログイン成功
        yield put(signInSuccess(user));
    } else {
        //エラーログを返す
        yield put(signInFailure(errors));
    }
}
//ユーザー情報を登録する
export function* signUp({ payload: { userCredentials } }) {

    let errors = null;
    let user = null;

    yield axios
        .post("/api/register", userCredentials)
        .then(res => (user = res))
        .catch(error => {
            errors = error.response.data.errors;
        });
    console.log("signUp");
    console.log(user);

    //登録に成功した場合
    if (errors === null && user !== null) {
        //folderデータを作成
        let folderCredentials = {};

        folderCredentials.user_id = user.data.id;
        folderCredentials.main_or_sub = true;

        //Folderを作成
        yield put(createFolder({folderCredentials}));

        //登録成功
        yield put(signInSuccess(user));
    } else {
        yield put(signUpFailure(errors));
    }
}

//ログイン時に呼び出される
export function* signInWithEmaiAndPassword({ payload: { userCredentials } }) {
    const { email, password } = userCredentials;

    //ユーザー取得
    yield getUser(email, password);
}

/**
 * actionsでUserActionTypes.SIGN_UP_STARTが選択されたとき、
 * signupメソッドを実行する
 * */
export function* onSignUpStart() {
    yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
}

/**
 * actionsでUserActionTypes.SIGN_IN_STARTが選択されたとき、
 * signInWithEmaiAndPasswordメソッドを呼び出す
 */
export function* onSignInStart() {
    yield takeLatest(UserActionTypes.SIGN_IN_START, signInWithEmaiAndPassword);
}

//redux-sagaによる非同期監視のスタート
export function* userSagas() {
    yield all([
        call(onSignUpStart),
        call(onSignInStart)
    ]);
}

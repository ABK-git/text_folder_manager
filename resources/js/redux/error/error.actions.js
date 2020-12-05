import ErrorTypes from "./error.types";
//ログイン失敗時
export const signInFailure = errors => ({
    type: ErrorTypes.SIGN_IN_FAILURE,
    payload: errors
});

//ユーザー登録失敗
export const signUpFailure = errors => ({
    type: ErrorTypes.SIGN_UP_FAILURE,
    payload: errors
});

//ユーザ認証または登録成功時
export const errorClear = () => ({
    type: ErrorTypes.ERROR_CLEAR
});

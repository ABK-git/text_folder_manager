import UserActionTypes from "./user.types";

//emailとpasswordによる認証の開始
export const SignInStart = emailAndPassword => ({
    type: UserActionTypes.SIGN_IN_START,
    payload: emailAndPassword
});

//ユーザー登録の開始
/**
 * userCredentialsの中身は
 * {displayName,email,password,password_confirmation}
 */
export const signUpStart = userCredentials => ({
    type: UserActionTypes.SIGN_UP_START,
    payload: userCredentials
});

//ユーザー登録成功
export const signUpSuccess = ({ email, password }) => ({
    type: UserActionTypes.SIGN_UP_SUCCESS,
    payload: { email, password }
});
//ユーザー登録失敗
export const signUpFailure = error => ({
    type: UserActionTypes.SIGN_UP_FAILURE,
    payload: error
});

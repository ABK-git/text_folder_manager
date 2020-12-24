import formActionTypes from "./form.types";

//ユーザー登録時の入力データの格納
export const setSignUpForm = userCredentials => ({
    type: formActionTypes.SET_SIGN_UP_FORM,
    payload: userCredentials
});
//ログイン時の入力データの格納
export const setSignInForm = userCredentials => ({
    type: formActionTypes.SET_SIGN_IN_FORM,
    payload: userCredentials
});
//ログインまたは登録成功時にFormをリセット
export const formClear = () => ({
    type: formActionTypes.FORM_CLEAR
});

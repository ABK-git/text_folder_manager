import { createSelector } from "reselect";

const selectError = state => state.error;

//登録時のerror情報を取得する
export const selectSignUpError = createSelector(
    [selectError],
    error => error.signUpError
);
//ログイン時のerror情報を取得する
export const selectSignInError = createSelector(
    [selectError],
    error => error.signInError
);
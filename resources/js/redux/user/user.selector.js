import { createSelector } from "reselect";

const selectUser = state => state.user;

//User情報を取得する
export const selectCurrentUser = createSelector(
    [selectUser],
    user => user.currentUser
);
//登録時のerror情報を取得する
export const selectSignUpError = createSelector(
    [selectUser],
    user => user.signUpError
);
//ログイン時のerror情報を取得する
export const selectSignInError = createSelector(
    [selectUser],
    user => user.signInError
);

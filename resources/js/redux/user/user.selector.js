import { createSelector } from "reselect";

const selectUser = state => state.user;

//User情報を取得する
export const selectCurrentUser = createSelector(
    [selectUser],
    user => user.currentUser
);

//読み込み情報を取得する
export const selectIsLoading = createSelector(
    [selectUser],
    user => user.isLoading
);

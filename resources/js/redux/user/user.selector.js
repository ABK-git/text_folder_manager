import { createSelector } from "reselect";

const selectUser = state => state.user;

//User情報を取得する
export const selectCurrentUser = createSelector(
    [selectUser],
    user => user.currentUser
);


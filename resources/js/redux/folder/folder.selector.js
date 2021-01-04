import { createSelector } from "reselect";

const selectFolder = state => state.folder;

//中間テーブルを取得する
export const selectDuringFolder = createSelector(
    [selectFolder],
    folder => folder.duringFolder
);

//読み込み中か否かを取得
export const selectIsDuringFolderFetching = createSelector(
    [selectFolder],
    folder => folder.isFetching
);

import { createSelector } from "reselect";

const selectFolder = state => state.folder;

//中間テーブルを取得する
export const selectDuringFolder = createSelector(
    [selectFolder],
    folder => folder.duringFolder
);
//メインの中間テーブルを作成する
export const selectMainDuringFolder = createSelector([selectFolder], folder =>
    folder.duringFolder.find(folder => folder.main_or_sub == true)
);

//Folderを取得する
export const selectFolders = createSelector(
    [selectFolder],
    folder => folder.folders.sort((a, b) => {
        if(a.updated_at < b.updated_at){
            return 1;
        }else{
            return -1;
        }
    })
);

//読み込み中か否かを取得
export const selectIsDuringFolderFetching = createSelector(
    [selectFolder],
    folder => folder.isFetching
);

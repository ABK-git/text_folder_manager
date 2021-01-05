import FolderActionTypes from "./folder.types";

//中間テーブルをReduxに格納
export const setDuringFolder = duringFolder => ({
    type: FolderActionTypes.SET_DURING_FOLDER,
    payload: duringFolder
});
//中間テーブルの作成
export const createDuringFolder = folderCredentials => ({
    type: FolderActionTypes.CREATE_DURING_FOLDER,
    payload: folderCredentials
});

//Folderを作成する
export const createFolder = folderCredentials => ({
    type: FolderActionTypes.CREATE_FOLDER,
    payload: folderCredentials
});
//作成したFolderを追加する
export const addFolder = folder => ({
    type: FolderActionTypes.ADD_FOLDER,
    payload: folder
});
//FolderをReduxに格納
export const setFolder = folder => ({
    type: FolderActionTypes.SET_FOLDER,
    payload: folder
});

//ログイン時にユーザーのFolderデータを取得する
export const fetchFoldersStart = user => ({
    type: FolderActionTypes.FETCH_FOLDERS_START,
    payload: { user }
});

//ログアウト時にstateを空にする
export const folderClear = () => ({
    type: FolderActionTypes.FOLDER_CLEAR
});

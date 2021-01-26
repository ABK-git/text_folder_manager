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

//Folderの名前を変更
export const updateFolder = folderCredentials => ({
    type: FolderActionTypes.UPDATE_FOLDER,
    payload: folderCredentials
});
//Folderの変更をReduxに反映させる
export const setUpdateFolder = folder => ({
    type: FolderActionTypes.SET_UPDATE_FOLDER,
    payload: folder
});

//Folderを消去
export const deleteFolder = folder => ({
    type: FolderActionTypes.DELETE_FOLDER,
    payload: folder
});
//削除したFolderをReduxから取り除く
export const disableDeleteFolder = folder => ({
    type: FolderActionTypes.DISABLE_FOLDER,
    payload: folder
});

//作成した中間テーブルを追加する
export const addDuringFolder = duringFolder => ({
    type: FolderActionTypes.ADD_DURING_FOLDER,
    payload: duringFolder
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

//Folderのデータベースアクセス失敗
export const folderFailure = () => ({
    type: FolderActionTypes.FOLDER_FAILURE
});

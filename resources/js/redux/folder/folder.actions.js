import FolderActionTypes from "./folder.types";

// export const createFolder = ({folderCredentials}) => ({
//     type: FolderActionTypes.CREATE_FOLDER,
//     payload: {folderCredentials}
// });
//中間テーブルをReduxに格納
export const setDuringFolder = (duringFolder) => ({
    type: FolderActionTypes.SET_DURING_FOLDER,
    payload: duringFolder
});
//中間テーブルの作成
export const createDuringFolder = (folderCredentials) => ({
    type: FolderActionTypes.CREATE_DURING_FOLDER,
    payload : folderCredentials
});
//ログイン時にユーザーのFolderデータを取得する
export const fetchFoldersStart = (user) => ({
    type: FolderActionTypes.FETCH_FOLDERS_START,
    payload: {user}
});

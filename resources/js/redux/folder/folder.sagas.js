import axios from "axios";
import { all, takeLatest, call, put } from "redux-saga/effects";
import { addFolder, setDuringFolder } from "./folder.actions";
import FolderActionTypes from "./folder.types";

export function* createDuringFolder({ payload: { folderCredentials } }) {
    //mainのfolderを作成
    let duringFolder = null;

    yield axios
        .post("/api/main_or_sub/create", folderCredentials)
        .then(response => {
            duringFolder = new Array(response.data);
        });

    if (duringFolder.id !== null) {
        console.log("duringFolder");
        console.log(duringFolder);
        yield put(setDuringFolder(duringFolder));
    }
}

export function* onCreateDuringFolder() {
    yield takeLatest(
        FolderActionTypes.CREATE_DURING_FOLDER,
        createDuringFolder
    );
}

export function* fetchFoldersAsync({ payload: { user } }) {
    //個人データの読み込み開始
    const { id } = user;
    console.log("個人データの読み込み開始");
    console.log(user);

    let main_or_subs = null;
    //中間テーブルを取得
    yield axios
        .get(`/api/main_or_subs/get_all/${id}`)
        .then(response => (main_or_subs = response.data));
    //中間テーブルをReduxにセットする
    if (main_or_subs !== null) {
        console.log(main_or_subs);
        yield put(setDuringFolder(main_or_subs));
    }
}

export function* fetchFoldersStart() {
    yield takeLatest(FolderActionTypes.FETCH_FOLDERS_START, fetchFoldersAsync);
}

export function* createFolder({ payload: folderCredentials }) {
    //作成したFolderの入れ物
    let folder = null;

    console.log(folderCredentials);

    //Folderを作成
    yield axios
        .post("api/folder/create", folderCredentials)
        .then(response => (folder = response.data));
    //エラー時の処理も実装する予定

    if(folder !== null){
        //Reduxに新しく作成したFolderを追加
        yield put(addFolder(folder));
    }
}

export function* onCreateFolder() {
    yield takeLatest(FolderActionTypes.CREATE_FOLDER, createFolder);
}

export function* folderSagas() {
    yield all([
        call(onCreateFolder),
        call(onCreateDuringFolder),
        call(fetchFoldersStart)
    ]);
}

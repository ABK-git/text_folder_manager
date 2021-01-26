import axios from "axios";
import { all, takeLatest, call, put } from "redux-saga/effects";
import {
    addDuringFolder,
    addFolder,
    folderFailure,
    setDuringFolder,
    setFolder,
    setUpdateFolder,
    disableDeleteFolder
} from "./folder.actions";
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

    let folders = null;
    //Folderを取得
    yield axios
        .get(`/api/folder/get_all/${id}`)
        .then(response => (folders = response.data));
    //FolderをReduxにセットする
    if (folders !== null) {
        yield put(setFolder(folders));
    }
}

export function* fetchFoldersStart() {
    yield takeLatest(FolderActionTypes.FETCH_FOLDERS_START, fetchFoldersAsync);
}

export function* createFolder({ payload: folderCredentials }) {
    //作成したFolderの入れ物
    let folder = null;
    let duringFolder = null;

    console.log(folderCredentials);

    //FolderとFolderの中間テーブルを作成
    yield axios.post("/api/folder/create", folderCredentials).then(response => {
        folder = response.data[0];
        duringFolder = response.data[1];
    });
    //エラー時の処理も実装する予定
    if (folder !== null && duringFolder !== null) {
        //新しく作成した中間テーブルを追加
        yield put(addDuringFolder(duringFolder));
        //新しく作成したFolderを追加
        yield put(addFolder(folder));
    }
}

export function* onCreateFolder() {
    yield takeLatest(FolderActionTypes.CREATE_FOLDER, createFolder);
}

export function* updateFolder({ payload: folderCredentials }) {
    let folder = null;
    console.log("this is update");
    yield axios.post("/api/folder/update", folderCredentials).then(response => {
        folder = response.data;
    });
    console.log(folder);
    yield put(setUpdateFolder(folder));
}

export function* onUpdateFolder() {
    yield takeLatest(FolderActionTypes.UPDATE_FOLDER, updateFolder);
}

export function* deleteFolder({ payload: folder }) {
    const { id } = folder;

    axios.delete(`/api/folder/destroy/${id}`).catch(() => (id = null));

    if (id != null) {
        yield put(disableDeleteFolder(folder));
    } else {
        yield put(folderFailure());
    }
}

export function* onDeleteFolder() {
    yield takeLatest(FolderActionTypes.DELETE_FOLDER, deleteFolder);
}

export function* folderSagas() {
    yield all([
        call(onCreateFolder),
        call(onCreateDuringFolder),
        call(fetchFoldersStart),
        call(onUpdateFolder),
        call(onDeleteFolder)
    ]);
}

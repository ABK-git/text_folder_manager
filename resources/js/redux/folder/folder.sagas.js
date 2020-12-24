import axios from "axios";
import { all, takeLatest, call, put } from "redux-saga/effects";
import { setMainFolder } from "./folder.actions";
import FolderActionTypes from "./folder.types";

export function* createFolder({ payload: { folderCredentials } }) {
    //mainのfolderを作成
    let folder = null;
    yield axios
        .post("/api/folder/create", folderCredentials)
        .then(response => (folder = response.data));

    if(folder !== null){
        yield put(setMainFolder(folder));
    }
}

export function* onCreateFolder() {
    yield takeLatest(FolderActionTypes.CREATE_FOLDER, createFolder);
}

export function* folderSagas() {
    yield all([call(onCreateFolder)]);
}

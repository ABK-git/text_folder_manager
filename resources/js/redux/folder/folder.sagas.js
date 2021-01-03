import axios from "axios";
import { all, takeLatest, call, put } from "redux-saga/effects";
import { setDuringFolder } from "./folder.actions";
import FolderActionTypes from "./folder.types";

export function* createDuringFolder({ payload: { folderCredentials } }) {
    //mainのfolderを作成
    let duringFolder = null;
    
    yield axios
        .post("/api/main_or_sub/create", folderCredentials)
        .then(response => (duringFolder = response.data));

    if(duringFolder.id !== null){
        console.log("duringFolder");
        yield put(setDuringFolder(duringFolder));
    }
}

export function* onCreateDuringFolder() {
    yield takeLatest(FolderActionTypes.CREATE_DURING_FOLDER, createDuringFolder);
}

export function* fetchFoldersAsync({payload: {user}}){
    //個人データの読み込み開始
    const {id} = user;
    console.log("個人データの読み込み開始");
    console.log(user);
}

export function* fetchFoldersStart(){
    yield takeLatest(
        FolderActionTypes.FETCH_FOLDERS_START,
        fetchFoldersAsync
    );
}

export function* folderSagas() {
    yield all([call(onCreateDuringFolder),call(fetchFoldersStart)]);
}

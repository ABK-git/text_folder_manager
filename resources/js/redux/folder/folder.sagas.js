import { all, takeLatest, call } from "redux-saga/effects";
import FolderActionTypes from "./folder.types";

export function* createFolder({ payload: folderCredentials}){
    const {folder_name} = folderCredentials;

    console.log("this is function");
    console.log(folder_name);
    
}

export function* onCreateFolder(){
    yield takeLatest(FolderActionTypes.CREATE_FOLDER, createFolder);
}

export function* folderSagas() {
    yield all([call(onCreateFolder)]);
}

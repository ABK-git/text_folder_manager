import axios from "axios";
import { all, takeLatest, call, put } from "redux-saga/effects";

import TextTypes from "./text.types";

export function* createText({ payload: textCredentials}){
    let text = null;
    console.log("this is text_sagas createText");
    console.log(textCredentials);
}

export function* onCreateText() {
    yield takeLatest(TextTypes.CREATE_TEXT, createText);
}

export function* textSagas() {
    yield all([call(onCreateText)]);
}

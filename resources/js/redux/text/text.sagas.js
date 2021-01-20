import axios from "axios";
import { all, takeLatest, call, put } from "redux-saga/effects";
import { addText } from "./text.actions";

import TextActionTypes from "./text.types";

export function* createText({ payload: textCredentials }) {
    let text = null;
    console.log("createTEext");
    console.log(textCredentials);
    yield axios.post("/api/text/create", textCredentials).then(response => {
        text = response.data;
    });
    console.log(text);
    //作成したtextをreduxに追加する
    if (text !== null) {
        console.log("this is addText");
        yield put(addText(text));
    }
}

export function* onCreateText() {
    yield takeLatest(TextActionTypes.CREATE_TEXT, createText);
}

export function* textSagas() {
    yield all([call(onCreateText)]);
}

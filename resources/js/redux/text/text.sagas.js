import axios from "axios";
import { all, takeLatest, call, put } from "redux-saga/effects";
import { addText,setTexts, textFailure } from "./text.actions";

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

export function* fetchTextsAsync({ payload: { user } }) {
    //個人データの読み込み開始
    const { id } = user;

    let texts = null;

    yield axios
        .get(`/api/text/get_all/${id}`)
        .then(response => (texts = response.data));

    if(texts != null){
        yield put(setTexts(texts));
    }else{
        yield put(textFailure());
    }
}
export function* onFetchTextsStart() {
    yield takeLatest(TextActionTypes.FETCH_TEXTS_START, fetchTextsAsync);
}

export function* textSagas() {
    yield all([call(onCreateText), call(onFetchTextsStart)]);
}

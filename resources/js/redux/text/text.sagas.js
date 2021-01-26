import axios from "axios";
import { all, takeLatest, call, put } from "redux-saga/effects";
import {
    addText,
    setTexts,
    textFailure,
    setUpdateText,
    disableDeleteText
} from "./text.actions";

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
    //画面遷移
    const { callback, redirectPath } = textCredentials;
    yield callback(redirectPath);
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

    if (texts != null) {
        yield put(setTexts(texts));
    } else {
        yield put(textFailure());
    }
}
export function* onFetchTextsStart() {
    yield takeLatest(TextActionTypes.FETCH_TEXTS_START, fetchTextsAsync);
}

export function* updateTextName({ payload: textCredentials }) {
    let text = null;
    console.log("this is updateTextName");
    console.log(textCredentials);

    yield axios
        .post("/api/text/update_name", textCredentials)
        .then(response => (text = response.data));

    //TextをReduxにセットする
    if (text != null) {
        yield put(setUpdateText(text));
    }
}

export function* onUpdateTextName() {
    yield takeLatest(TextActionTypes.UPDATE_TEXT_NAME, updateTextName);
}

export function* deleteText({ payload: text }) {
    const { id } = text;

    axios.delete(`/api/text/destroy/${id}`).catch(() => (id = null));

    if (id != null) {
        yield put(disableDeleteText(text));
    } else {
        yield put(textFailure());
    }
}

export function* onDeleteText() {
    yield takeLatest(TextActionTypes.DELETE_TEXT, deleteText);
}

export function* updateText({ payload: update_text }) {
    console.log("this os updateText");
    console.log(update_text);

    let text = null;

    yield axios
        .post("/api/text/update", update_text)
        .then(response => (text = response.data));

    if (text != null) {
        yield put(setUpdateText(text));
    } else {
        //一時的に失敗
        yield put(textFailure());
    }

    //画面遷移
    const { callback, redirectPath } = update_text;
    yield callback(redirectPath);
}

export function* onUpdateText() {
    yield takeLatest(TextActionTypes.UPDATE_TEXT, updateText);
}

export function* textSagas() {
    yield all([
        call(onCreateText),
        call(onFetchTextsStart),
        call(onUpdateTextName),
        call(onDeleteText),
        call(onUpdateText)
    ]);
}

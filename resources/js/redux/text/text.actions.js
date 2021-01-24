import TextActionTypes from "./text.types";

//Textの作成
export const createText = (textCredentials) => ({
    type: TextActionTypes.CREATE_TEXT,
    payload: textCredentials
});

//作成したTextをReduxに追加
export const addText = text => ({
    type: TextActionTypes.ADD_TEXT,
    payload: text
});

//作成したTextをReduxにセット
export const setTexts = texts => ({
    type: TextActionTypes.SET_TEXTS,
    payload: texts
});

export const textFailure = () => ({
    type: TextActionTypes.TEXT_FAILURE
});

//ログイン時にユーザーのTextデータを取得する
export const fetchTextsStart = user => ({
    type: TextActionTypes.FETCH_TEXTS_START,
    payload: { user }
});

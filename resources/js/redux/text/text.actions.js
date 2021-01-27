import TextActionTypes from "./text.types";

//Textの作成
export const createText = textCredentials => ({
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
//Text失敗
export const textFailure = () => ({
    type: TextActionTypes.TEXT_FAILURE
});

//Text作成時に入力した文章データを一時保存
export const creatingText = textCredentials => ({
    type: TextActionTypes.CREATING_TEXT,
    payload: textCredentials
});

//ログイン時にユーザーのTextデータを取得する
export const fetchTextsStart = user => ({
    type: TextActionTypes.FETCH_TEXTS_START,
    payload: { user }
});

//作成途中の文章を削除
export const clearCreatingText = () => ({
    type: TextActionTypes.CLEAR_CREATING_TEXT
});

//Textの名前を変更
export const updateTextName = textCredentials => ({
    type: TextActionTypes.UPDATE_TEXT_NAME,
    payload: textCredentials
});
//Textの文章を変更
export const updateText = update_text => ({
    type: TextActionTypes.UPDATE_TEXT,
    payload: update_text
});
//名前を変えたTextを保存する
export const setUpdateText = text => ({
    type: TextActionTypes.SET_UPDATE_TEXT_NAME,
    payload: text
});

//Textを消去
export const deleteText = text => ({
    type: TextActionTypes.DELETE_TEXT,
    payload: text
});
//削除したTextをReduxから取り除く
export const disableDeleteText = text => ({
    type: TextActionTypes.DISABLE_DELETE_TEXT,
    payload: text
});

//textをclear
export const textClear = () => ({
    type: TextActionTypes.TEXT_CLEAR
});

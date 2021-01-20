import TextActionTypes from "./text.types";

//Textの作成
export const createText = textCredentials => ({
    type: TextActionTypes.CREATE_TEXT,
    payload: textCredentials
});

//作成したTextをReduxに追加
export const addText = (text) => ({
    type: TextActionTypes.ADD_TEXT,
    payload: text
});

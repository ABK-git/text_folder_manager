import TextTypes from "./text.types";

//中間テーブルの作成
export const createText = textCredentials => ({
    type: TextTypes.CREATE_TEXT,
    payload: textCredentials
});

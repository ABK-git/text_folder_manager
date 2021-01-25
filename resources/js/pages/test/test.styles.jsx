import styled from "styled-components";

export const ChangeString = styled.span`
    font-size: 20px;
    color: #fa2917;
`;

export const LineDiv = styled.div`
    height: 20px;
    font-size: 16px;
`;

export const NoMarginDiv = styled.div`
    margin-bottom: 0px;
`;
export const NoMarginSpan = styled.div`
    margin-bottom: 0px;
`;

//文章表示
export const DisplayText = styled.div`
    height: 100%;
    width: 60%;
    padding-left: 20px;
`;
//入力欄表示
export const DisplayForm = styled.div`
    height: 100%;
    width: 40%;
    text-align: center;
    padding-right: 20px;
`;
//文章と入力欄をまとめる
export const IncludeTextAndForm = styled.div`
    display: flex;
    height: 90%;
    width: 100%;
    padding-top: 10px;
`;
//ボタンをまとめる
export const IncludeButtons = styled.div`
    display: flex;
    height: 7%;
    width: 100%;
`;

//確定ボタンのcontainer
export const ConfirmButtonContainer = styled.div`
    text-align: center;
    height: 100%;
    width: 60%;
`;

//入力欄表示のcontainer
export const DisplayFormContainer = styled.div`
    text-align: center;
    height: 100%;
    width: 40%;
`;

//textareaを示す境界線
export const BetweenTextareaToForm = styled.h2`
    margin-top: 20px;
    margin-bottom: 0px;
`;

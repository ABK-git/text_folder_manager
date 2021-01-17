import React, { useState } from "react";
import reactStringReplace from "react-string-replace";
import { useLocation } from "react-router-dom";
//styles
import {
    ChangeString,
    DisplayForm,
    DisplayText,
    IncludeTextAndForm,
    IncludeButtons,
    ConfirmButtonContainer,
    DisplayFormContainer,
    NoMarginP
} from "./test_component.styles";
import { BasicBackgroundPaddingTop } from "../background.styles";
//component
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";

const TestPage = () => {
    //locationを取得
    const location = useLocation();
    //行ごとに分割する
    const splitLine = location.state.creating_text.split("\n");

    //{}で囲まれた文字列を取り出す正規表現
    //const regExp = /{(.*?)}/g;
    const regExp = /(?<!\\){(.*?)(?<!\\)}/g;

    //{}で囲まれた部分に表示する値を保管
    //const changeValue = {};
    const [changeValue, setChangeValue] = useState({});

    //Formに変化が生じた時
    const handleChange = event => {
        //Formの名前と値を取得
        const { name, value } = event.target;
        //入力値をuseStateに記録
        setChangeValue({ ...changeValue, [name]: value });
    };

    //入力フォームの表示・非表示
    const [isDisplay, setIsDisplay] = useState(true);

    //Folder作成フォームの表示・非表示
    const handleClickDisplay = () => {
        setIsDisplay(!isDisplay);
    };

    return (
        <BasicBackgroundPaddingTop>
            <IncludeButtons>
                <ConfirmButtonContainer>
                    <CustomButton>確定</CustomButton>
                </ConfirmButtonContainer>
                <DisplayFormContainer>
                    {isDisplay ? (
                        <CustomButton onClick={handleClickDisplay}>
                            非表示
                        </CustomButton>
                    ) : (
                        <CustomButton onClick={handleClickDisplay}>
                            表示
                        </CustomButton>
                    )}
                </DisplayFormContainer>
            </IncludeButtons>

            <IncludeTextAndForm>
                <DisplayText style={{ width: isDisplay ? "70%" : "100%" }}>
                    {splitLine.map((line, index) => {
                        //文字がない行の場合
                        if (line === "") {
                            //改行だけする
                            return <br key={index} />;
                        }

                        return (
                            <NoMarginP key={index}>
                                {reactStringReplace(
                                    line,
                                    regExp,
                                    (match, i) => {
                                        //エスケープシーケンスを削除
                                        match = match.replace(/\\/g, "");

                                        //同名の入力欄が定義されていなかった場合
                                        if (changeValue[match] === undefined) {
                                            //入力欄を定義
                                            changeValue[match] = match;
                                        }

                                        return (
                                            <ChangeString key={i} name={match}>
                                                {changeValue[match]}
                                            </ChangeString>
                                        );
                                    }
                                )}
                            </NoMarginP>
                        );
                    })}
                </DisplayText>
                {isDisplay ? (
                    <DisplayForm>
                        {Object.keys(changeValue).map((value, index) => {
                            return (
                                <FormInput
                                    key={index}
                                    name={value}
                                    autoComplete="off"
                                    handleChange={handleChange}
                                    value={changeValue[value]}
                                    label={value}
                                    required
                                />
                            );
                        })}
                    </DisplayForm>
                ) : (
                    ""
                )}
            </IncludeTextAndForm>
        </BasicBackgroundPaddingTop>
    );
};

export default TestPage;

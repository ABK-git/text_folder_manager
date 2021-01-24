import React, { useState } from "react";
import reactStringReplace from "react-string-replace";
import { useLocation, useParams, useHistory } from "react-router-dom";
//redux
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import {
    selectDuringFolder,
    selectMainDuringFolder
} from "../../redux/folder/folder.selector";
import { createText } from "../../redux/text/text.actions";
import { selectCurrentUser } from "../../redux/user/user.selector";
//styles
import {
    ChangeString,
    NoMarginDiv,
    DisplayForm,
    DisplayText,
    IncludeTextAndForm,
    IncludeButtons,
    ConfirmButtonContainer,
    DisplayFormContainer,
    NoMarginSpan,
    BetweenTextareaToForm
} from "./test.component.styles";
import { BasicBackgroundPaddingTop } from "../background.styles";
//component
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import TextareaInput from "../../components/textarea-input/textarea-input.component";

const TestPage = ({ main_folder, createText, user, during_folders }) => {
    //locationを取得
    const location = useLocation();
    const history = useHistory();

    //行ごとに分割する
    let splitLine = [];

    try {
        splitLine = location.state.creating_text.split("\n");
    } catch {
        splitLine = location.state.split("\n");
    }

    //{}で囲まれた文字列を取り出す正規表現
    const regExp = /(?<!\\){(.*?)(?<!\\)}/g;

    //textareaを判別する正規表現
    const regExpTextarea = /(\[textarea\]\{.*?\})/gm;

    //{}で囲まれた部分に表示する値を保管
    const [changeValue, setChangeValue] = useState({});
    //textareaの表示する値を保管
    const [changeTextarea, setChangeTextare] = useState({});

    //Formに変化が生じた時
    const handleChange = event => {
        //Formの名前と値を取得
        const { name, value } = event.target;
        //入力値をuseStateに記録
        setChangeValue({ ...changeValue, [name]: value });
    };
    //textareaに変化が生じた時
    const handleChangeTextarea = event => {
        const { name, value } = event.target;
        //入力値を格納
        setChangeTextare({ ...changeTextarea, [name]: value });
    };

    //入力フォームの表示・非表示
    const [isDisplay, setIsDisplay] = useState(true);

    //Folder作成フォームの表示・非表示
    const handleClickDisplay = () => {
        setIsDisplay(!isDisplay);
    };

    //textの内容を確定する
    const params = useParams();
    const handleConfirmText = () => {
        const { duringFolder_id, text_name } = params;

        //text用のオブジェクト作成
        const textCredentials = {
            title: text_name,
            content: location.state.creating_text,
            user_id: user.id,
            during_id: duringFolder_id
        };
        //遷移パスを生成
        let redirectPath = "";
        redirectPath = `/${user.displayName}`;
        //直下のtextだった場合
        if (duringFolder_id === undefined) {
            textCredentials.during_id = main_folder.id;
        } else {
            const during_folder = during_folders.find(
                during_folder => during_folder.id === duringFolder_id
            );

            //属するfolderのidを取得する
            redirectPath = `/${user.displayName}/_folder/${during_folder.folder_id}`;
        }
        //画面遷移用の構成を入れる
        textCredentials.callback = callback;
        textCredentials.redirectPath = redirectPath;

        createText(textCredentials);
    };
    //redirectファンクション生成
    const callback = redirectPath => {
        history.push(redirectPath);
    };

    return (
        <BasicBackgroundPaddingTop>
            <IncludeButtons>
                <ConfirmButtonContainer
                    style={{
                        visibility: location.state.creating_text
                            ? "visible"
                            : "hidden"
                    }}
                >
                    <CustomButton onClick={handleConfirmText}>
                        確定
                    </CustomButton>
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
                <DisplayText style={{ width: isDisplay ? "60%" : "100%" }}>
                    {splitLine.map((line, index) => {
                        //文字がない行の場合
                        if (line === "") {
                            //改行だけする
                            return <br key={index} />;
                        }

                        let newLine = line;
                        console.log(newLine.match(regExpTextarea));
                        //textareaが含まれているかを確認。
                        const haveTextarea = newLine.match(regExpTextarea);

                        if (Array.isArray(haveTextarea)) {
                            newLine = reactStringReplace(
                                newLine,
                                regExpTextarea,
                                match => {
                                    //{}内の名前を取得
                                    const name = haveTextarea[0].match(
                                        regExp
                                    )[0];
                                    //{}を切り落とす
                                    const sliceName = name.slice(
                                        1,
                                        name.length - 1
                                    );
                                    console.log(sliceName);

                                    //同名の入力欄が定義されていなかった場合
                                    if (
                                        changeTextarea[sliceName] === undefined
                                    ) {
                                        //入力欄を定義
                                        changeTextarea[sliceName] = sliceName;
                                    }

                                    return (
                                        <ChangeString
                                            key={match}
                                            name={sliceName}
                                        >
                                            {changeTextarea[sliceName]
                                                .split("\n")
                                                .map((value, index) => (
                                                    <NoMarginSpan key={index}>
                                                        {value}
                                                    </NoMarginSpan>
                                                ))}
                                        </ChangeString>
                                    );
                                }
                            );
                        }

                        return (
                            <NoMarginDiv key={index}>
                                {reactStringReplace(
                                    newLine,
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
                            </NoMarginDiv>
                        );
                    })}
                </DisplayText>
                {isDisplay ? (
                    <DisplayForm>
                        {Object.keys(changeValue).map((value, index) => (
                            <FormInput
                                key={index}
                                name={value}
                                autoComplete="off"
                                handleChange={handleChange}
                                value={changeValue[value]}
                                label={value}
                                required
                            />
                        ))}
                        {Object.keys(changeTextarea).length ? (
                            <BetweenTextareaToForm>
                                ---以下textarea---
                            </BetweenTextareaToForm>
                        ) : (
                            ""
                        )}
                        {Object.keys(changeTextarea).map((value, index) => (
                            <TextareaInput
                                key={value + index}
                                name={value}
                                value={changeTextarea[value]}
                                autoComplete="off"
                                handleChange={handleChangeTextarea}
                                label={value}
                            />
                        ))}
                    </DisplayForm>
                ) : (
                    ""
                )}
            </IncludeTextAndForm>
        </BasicBackgroundPaddingTop>
    );
};

const mapStateToProps = createStructuredSelector({
    main_folder: selectMainDuringFolder,
    during_folders: selectDuringFolder,
    user: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
    createText: textCredentials => dispatch(createText(textCredentials))
});

export default connect(mapStateToProps, mapDispatchToProps)(TestPage);

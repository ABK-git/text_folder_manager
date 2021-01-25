import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useFormik } from "formik";
//styles
import {
    TitleMessage,
    CreateTextForm,
    CreateTextFormContainer
} from "./creating-text.styles";
//背景
import { BackgroundCenter } from "../background.styles";
//component
import CustomButton from "../../components/custom-button/custom-button.component";
import { connect } from "react-redux";
//redux
import { selectCreatingText } from "../../redux/text/text.selector";
import { creatingText } from "../../redux/text/text.actions";
import { createStructuredSelector } from "reselect";
//component
import DisplayRootPassContainer from "../../components/display-root-pass/display-root-pass.container";

const CreatingText = ({ creatingText, creating }) => {
    //入力フォームの表示・非表示
    const [isDisplay, setIsDisplay] = useState(false);
    //フォームの表示・非表示
    const onMouseEnterOrLeave = () => {
        setIsDisplay(!isDisplay);
    };

    //historyを取得
    const history = useHistory();
    //locationを取得
    const location = useLocation();

    //初期値
    const initialValues = {
        creating_text: creating
    };

    const { duringFolder } = location.state;

    //送信処理
    const onSubmit = values => {
        //作成途中の文章を保存
        const { creating_text } = values;
        creatingText({ creating_text });

        //testページへ遷移
        history.push({ pathname: `${location.pathname}/test`, state: {creating_text, duringFolder} });
    };

    //formikの作成
    const formik = useFormik({ initialValues, onSubmit });

    return (
        <BackgroundCenter>
            <CreateTextFormContainer onSubmit={formik.handleSubmit}>
                {isDisplay ? (
                    <CustomButton
                        type="submit"
                        onMouseLeave={onMouseEnterOrLeave}
                        design="creatingPageButton"
                    >
                        文章完成!
                    </CustomButton>
                ) : (
                    <TitleMessage onMouseEnter={onMouseEnterOrLeave}>
                        文章を入力してください
                    </TitleMessage>
                )}

                {duringFolder ? <DisplayRootPassContainer creatingDuringFolder={duringFolder}/> : ""}

                <CreateTextForm
                    name="creating_text"
                    value={formik.values.creating_text}
                    onChange={formik.handleChange}
                    placeholder="文章入力欄"
                />
            </CreateTextFormContainer>
        </BackgroundCenter>
    );
};

const mapStateToProps = createStructuredSelector({
    creating: selectCreatingText
});

const mapDispatchToProps = dispatch => ({
    creatingText: textCredentials => dispatch(creatingText(textCredentials))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreatingText);

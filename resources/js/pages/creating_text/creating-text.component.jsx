import React, { useState } from "react";
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

const CreatingText = () => {
    //入力フォームの表示・非表示
    const [isDisplay, setIsDisplay] = useState(false);
    //フォームの表示・非表示
    const onMouseEnterOrLeave = () => {
        setIsDisplay(!isDisplay);
    };

    //初期値
    const initialValues = {
        creating_text: ""
    };
    //送信処理
    const onSubmit = values => {
        console.log(values);
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

export default CreatingText;

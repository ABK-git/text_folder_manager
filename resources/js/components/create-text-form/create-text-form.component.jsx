import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useFormik } from "formik";
//styles
import {
    TextDiv,
    FormAndButton,
    InFormikContainer
} from "./create-text-form.styles";
//components
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import ErrorMessagesContainer from "../form-input/error-messages.container";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { connect } from "react-redux";

const CreateTextForm = ({user, duringFolder}) => {
    //入力フォームの表示・非表示
    const [isDisplay, setIsDisplay] = useState(false);
    //フォームの表示・非表示
    const onMouseEnterOrLeave = () => {
        setIsDisplay(!isDisplay);
    };
    //初期値
    const initialValues = {
        text_name: ""
    };

    //historyの取得
    const history = useHistory();
    //locationの取得
    const location = useLocation();

    //submit処理
    const onSubmit = values => {
        const path = location.pathname.slice(1).split("/");

        if (path.length === 1) {
            //ユーザー直下の場合
            history.push({pathname:`/${user.displayName}/creating/${values.text_name}`, state: {duringFolder}});
        } else {
            //フォルダー下の場合
            history.push({pathname: `/${user.displayName}/${duringFolder.id}/creating/${values.text_name}` ,state: {duringFolder}});
        }
    };

    const validate = values => {
        const errors = {};

        if (!values.text_name) {
            errors.text_name = "作成するtextの名前を入力してください";
        } else {
            if (values.text_name.includes("/")) {
                errors.text_name = "/はtext名に使用できません";
            }
        }
        return errors;
    };

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    });

    return (
        <TextDiv
            onMouseEnter={onMouseEnterOrLeave}
            onMouseLeave={onMouseEnterOrLeave}
        >
            <CustomButton design="createText">Text</CustomButton>
            {isDisplay ? (
                <InFormikContainer>
                    <FormAndButton onSubmit={formik.handleSubmit}>
                        <FormInput
                            type="text"
                            name="text_name"
                            autoComplete="off"
                            value={formik.values.text_name}
                            handleChange={formik.handleChange}
                            required
                        />
                        <CustomButton type="submit" design="createFolderSubmit">
                            作成
                        </CustomButton>
                    </FormAndButton>

                    <ErrorMessagesContainer
                        errorMessage={formik.errors.text_name}
                    />
                </InFormikContainer>
            ) : (
                ""
            )}
        </TextDiv>
    );
};

const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser
});

export default connect(mapStateToProps)(CreateTextForm);

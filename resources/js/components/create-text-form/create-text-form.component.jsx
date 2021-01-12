import React, { useState } from "react";
import { Formik } from "formik";
//styles
import { TextDiv, FormAndButton, InFormikContainer } from "./create-text-form.styles";
//components
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import ErrorMessagesContainer from "../form-input/error-messages.container";

const CreateTextForm = ({ duringFolder }) => {
    //入力フォームの表示・非表示
    const [isDisplay, setIsDisplay] = useState(false);
    //フォームの表示・非表示
    const handleClick = () => {
        setIsDisplay(!isDisplay);
    };

    return (
        <TextDiv>
            <CustomButton design="createText" onClick={handleClick}>
                Text
            </CustomButton>
            {isDisplay ? (
                <Formik
                    initialValues={{ text_name: "" }}
                    validate={values => {
                        const errors = {};
                        errors.text_name = new Array();
                        if (!values.text_name) {
                            errors.text_name.push(
                                "作成するtextの名前を入力してください"
                            );
                        } else {
                            if (values.text_name.includes("/")) {
                                errors.text_name.push(
                                    "/はtext名に使用できません"
                                );
                            }
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        values = new Array();
                        setSubmitting(false);
                    }}
                >
                    {({
                        values,
                        errors,
                        handleChange,
                        handleSubmit,
                        handleBlur,
                        isSubmitting
                    }) => (
                        <InFormikContainer>
                            <FormAndButton onSubmit={handleSubmit}>
                                <FormInput
                                    type="text"
                                    name="text_name"
                                    value={values.text_name}
                                    onBlur={handleBlur}
                                    handleChange={handleChange}
                                    required
                                />
                                <CustomButton
                                    type="submit"
                                    disabled={isSubmitting}
                                    design="createFolderSubmit"
                                >
                                    作成
                                </CustomButton>
                            </FormAndButton>

                            <ErrorMessagesContainer
                                errorMessage={errors.text_name}
                            />
                        </InFormikContainer>
                    )}
                </Formik>
            ) : (
                ""
            )}
        </TextDiv>
    );
};

export default CreateTextForm;

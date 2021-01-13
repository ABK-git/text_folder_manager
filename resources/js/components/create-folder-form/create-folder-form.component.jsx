import React, { useState } from "react";
import { connect } from "react-redux";
import { useFormik } from "formik";
//redux
import { selectCurrentUser } from "../../redux/user/user.selector";
import { createStructuredSelector } from "reselect";
import { createFolder } from "../../redux/folder/folder.actions";
//component
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import ErrorMessagesContainer from "../form-input/error-messages.container";
//styles
import {
    FolderDiv,
    FormAndButton,
    InFormikContainer
} from "./create-folder-form.styles";

const CreateFolderForm = ({
    user,
    duringFolder,
    createFolder,
    haveFolders
}) => {
    //入力フォームの表示・非表示
    const [isDisplay, setIsDisplay] = useState(false);

    //Folder作成フォームの表示・非表示
    const onMouseEnterOrLeave = () => {
        setIsDisplay(!isDisplay);
    };

    //初期値
    const initialValues = {
        folder_name: ""
    };

    //submit処理
    const onSubmit = values => {
        //folderCredentialsに中間テーブルのidとuserのidを付け足す
        Object.assign(values, {
            during_id: duringFolder.id,
            user_id: user.id
        });
        //Folder作成
        createFolder(values);
    };

    const validate = values => {
        const errors = {};

        if (!values.folder_name) {
            //folder_nameが入力されていない場合
            errors.folder_name = "作成するfolderの名前を入力してください";
        } else {
            if (values.folder_name.includes("/")) {
                errors.folder_name = "/はtext名に使用できません";
            }
            //同じ階層に同名フォルダが存在していた場合
            const existsFolderName = haveFolders.find(
                haveFolder => haveFolder.title === values.folder_name
            );
            if (existsFolderName !== undefined) {
                errors.folder_name = "同名フォルダが存在しています";
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
        <FolderDiv
            onMouseEnter={onMouseEnterOrLeave}
            onMouseLeave={onMouseEnterOrLeave}
        >
            <CustomButton design="createFolder">Folder</CustomButton>
            {isDisplay ? (
                <InFormikContainer>
                    <FormAndButton
                        onSubmit={formik.handleSubmit}
                        style={{ display: isDisplay ? "" : "none" }}
                    >
                        <FormInput
                            type="text"
                            name="folder_name"
                            value={formik.values.folder_name}
                            autoComplete="off"
                            handleChange={formik.handleChange}
                            required
                        ></FormInput>
                        <CustomButton type="submit" design="createFolderSubmit">
                            作成
                        </CustomButton>
                    </FormAndButton>

                    <ErrorMessagesContainer errorMessage={formik.errors.folder_name} />
                </InFormikContainer>
            ) : (
                ""
            )}
        </FolderDiv>
    );
};

const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
    createFolder: folderCredentials => dispatch(createFolder(folderCredentials))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateFolderForm);

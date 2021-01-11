import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
//redux
import { selectCurrentUser } from "../../redux/user/user.selector";
import { createStructuredSelector } from "reselect";
import { createFolder } from "../../redux/folder/folder.actions";
//component
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
//styles
import { FolderDiv, FormAndButton } from "./create-folder-form.styles";

const CreateFolderForm = ({ user, duringFolder, createFolder }) => {
    //入力フォームの表示・非表示
    const [isDisplay, setIsDisplay] = useState(false);
    //Folder名の入力フォーム
    const [folderCredentials, setFolderCredentials] = useState({
        title: ""
    });

    //Folder作成フォームの表示・非表示
    const handleClick = () => {
        setIsDisplay(!isDisplay);
    };

    const handleChange = event => {
        const { value, name } = event.target;

        setFolderCredentials({ ...folderCredentials, [name]: value });
    };

    const handleSubmit = event => {
        event.preventDefault();

        //folderCredentialsに中間テーブルのidとuserのidを付け足す
        Object.assign(folderCredentials, {
            during_id: duringFolder.id,
            user_id: user.id
        });
        console.log(folderCredentials);
        createFolder(folderCredentials);
    };
    const { title } = folderCredentials;

    return (
        <FolderDiv>
            <CustomButton design="createFolder" onClick={handleClick}>
                Folder
            </CustomButton>
            <FormAndButton
                onSubmit={handleSubmit}
                style={{ display: isDisplay ? "" : "none" }}
            >
                <FormInput
                    type="text"
                    name="title"
                    value={title}
                    handleChange={handleChange}
                    required
                ></FormInput>
                <CustomButton type="text" design="createFolderSubmit">
                    作成
                </CustomButton>
            </FormAndButton>
        </FolderDiv>
    );
};

const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
    createFolder: folderCredentials => dispatch(createFolder(folderCredentials))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateFolderForm);

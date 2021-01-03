import React, { useState } from "react";
import { connect } from "react-redux";
import { createFolder } from "../../redux/folder/folder.actions";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";

import {
    CreateFolderAndTextContainer,
    FolderDiv,
    FormAndButton
} from "./folder-and-text-buttons.styles.jsx";

const FolderAndTextButtons = ({createFolder}) => {
    const [isDisplay, setIsDisplay] = useState(false);

    const handleClick = () => {
        setIsDisplay(!isDisplay);
    };

    const [folderCredentials, setFolderCredentials] = useState({
        folder_name: ""
    });

    const handleChange = event => {
        const { value, name } = event.target;

        setFolderCredentials({ ...folderCredentials, [name]: value });

        console.log(folderCredentials.folder_name);
    };

    const handleSubmit = event => {
        event.preventDefault();
        console.log("handleSubmit");

        createFolder(folderCredentials);
    };

    return (
        <CreateFolderAndTextContainer>
            <CustomButton design="createText">Text</CustomButton>
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
                        name="folder_name"
                        handleChange={handleChange}
                        required
                    ></FormInput>
                    <CustomButton type="text" design="createFolderSubmit">
                        作成
                    </CustomButton>
                </FormAndButton>
            </FolderDiv>
        </CreateFolderAndTextContainer>
    );
};

const mapDispatchToProps = dispatch => ({
    createFolderStart: folderCredentials =>
        dispatch(createFolderStart(folderCredentials))
});

export default connect(null, mapDispatchToProps)(FolderAndTextButtons);

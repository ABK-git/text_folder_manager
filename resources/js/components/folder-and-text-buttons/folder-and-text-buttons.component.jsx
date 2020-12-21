import React, { useState } from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";

import {
    CreateFolderAndTextContainer,
    FolderDiv,
    FormAndButton
} from "./folder-and-text-buttons.styles.jsx";

const FolderAndTextButtons = () => {
    const [isDisplay, setIsDisplay] = useState(false);

    const handleChange = () => {
        setIsDisplay(!isDisplay);
    };

    return (
        <CreateFolderAndTextContainer>
            <CustomButton design="createText">Text</CustomButton>
            <FolderDiv>
                <CustomButton design="createFolder" onClick={handleChange}>
                    Folder
                </CustomButton>

                <FormAndButton style={{ display: isDisplay ? "" : "none" }}>
                    <FormInput
                        type="text"
                        name="folder_name"
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

export default FolderAndTextButtons;

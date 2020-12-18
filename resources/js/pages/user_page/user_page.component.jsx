import React from "react";
import CustomButton from "../../components/custom-button/custom-button.component";
//背景
import { BasicBackground } from "../background.styles";
import { CreateFolderAndTextContainer } from "./user_page.styles";

const UserPage = () => (
    <BasicBackground>
        <CreateFolderAndTextContainer>
          <CustomButton design="createText">Text</CustomButton>
          <CustomButton design="createFolder">Folder</CustomButton>
        </CreateFolderAndTextContainer>
    </BasicBackground>
);

export default UserPage;

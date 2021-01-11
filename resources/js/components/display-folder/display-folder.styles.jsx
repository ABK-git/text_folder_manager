import styled from "styled-components";

import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
// export const DisplayFolderContainer = styled.div`
//     margin-top: 20px;
//     display: inline-block;
//     width: 20vw;
//     height: 10%;
//     text-align: center;
// `;

// export const BackgroundImage = styled.div`
//     width: 80%;
//     height: 20%;
//     background-size: cover;
//     background-position: center;
//     background-image: url("/images/display-document/display-folder/folder.jpg");
// `;

export const DisplayFolderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    width: 22vw;
    height: 30vh;
    margin-top: 20px;
    margin-left: 20px;
    cursor: pointer;
`;

export const BackgroundImage = styled.div`
    width: 100%;
    height: 90%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
    background-image: url("/images/display-document/display-folder/folder.jpg");
`;

export const FolderFooter = styled.div`
  width: 100%;
  height: 10%;
  
  font-size: 16px;
  font-weight: bold;
`;

export const FooterForm = styled(FormInput)`
  border: 0px;
  height: 100%;
  text-align: center;
`;

export const UpdateNameButton = styled(CustomButton)`
  height: 100px;
  width: 200px;
`;

import styled from "styled-components";

import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";

export const DisplayFolderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    width: 22vw;
    height: 30vh;
    margin-top: 80px;
    margin-left: 20px;
    cursor: pointer;

    &:hover {
        .image {
            opacity: 0.8;
        }
        button {
            opacity: 0.85;
            display: flex;
        }
    }
`;

export const DisplayFolderButton = styled(CustomButton)`
    height: 20%;
    width: 70%;
    display: none;
    margin: auto;
    margin-top: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const DisplayFolderButtonsContainer = styled.div`
    width: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
`;

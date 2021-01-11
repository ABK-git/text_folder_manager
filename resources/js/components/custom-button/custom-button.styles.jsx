import styled, { css } from "styled-components";

const signInAndSignUpStyles = css`
    margin: 30px auto;
    background-color: rgb(62, 62, 172);
    width: 70%;

    &:hover {
        background-color: #357ae8;
        border: none;
    }
`;

const createText = css`
    background-color: #d41e3d;
    border: none;
    margin-right: 10px;
    height: 50px;
`;

const createFolder = css`
    background-color: #fa7855;
    border: none;
    height: 50px;
`;

const createFolderSubmit = css`
    font-size: 16px;
    background-color: #f1a1f5;
    height: 100%;
`;

const updateFolderName = css`
    font-size: 16px;
    background-color: #eb1d7b;
    height: 100%;
    width: 80%;
    border-radius: 10px;

    &:hover {
        opacity: 0.5;
    }
`;

const getButtonStyles = props => {
    switch (props.design) {
        case "auth":
            return signInAndSignUpStyles;

        case "createText":
            return createText;

        case "createFolder":
            return createFolder;

        case "createFolderSubmit":
            return createFolderSubmit;

        case "updateFolderName":
            return updateFolderName;

        default:
            return "";
    }
};

export const CustomButton = styled.button`
    background-color: #d41e3d;
`;

export const CustomButtonContainer = styled.button`
    font-size: 26px;
    font-weight: bolder;
    cursor: pointer;
    display: inline-block;

    ${getButtonStyles}
`;

export const FolderButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

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
`;

const createFolder = css`
    background-color: #fa7855;
    border: none;
`;

const createFolderSubmit = css`
    font-size: 16px;
    background-color: #f1a1f5;
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

const toNext = css`
    border: none;
    font-weight: bolder;
    border-radius: 10px;
    background-color: #c31afa;

    &:hover {
        opacity: 0.5;
    }
`;

const toBack = css`
    border: none;
    font-weight: bolder;
    border-radius: 10px;
    background-color: #32f067;

    &:hover {
        opacity: 0.5;
    }
`;

const displaySwitch = css`
    border: none;
    font-weight: bolder;
    border-radius: 10px;
    background-color: #f7f7f7;
    color: #0a010a;

    &:hover {
        opacity: 0.5;
        background-color: #0a010a;
        color: #f7f7f7;
    }
`;

const displaySwitchInDocument = css`
    font-weight: bolder;
    background-color: #f7f7f7;
    color: #0a010a;
    border-radius: 10px;

    &:hover {
        opacity: 0.5;
        background-color: #0a010a;
        color: #f7f7f7;
        border-color: #F0402C;
        border-width: medium;
    }
`;

const creatingPageButton = css`
    margin-bottom: 5px;
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

        case "creatingPageButton":
            return creatingPageButton;

        case "toBack":
            return toBack;

        case "toNext":
            return toNext;

        case "displaySwitch":
            return displaySwitch;

        case "displaySwitchInDocument":
            return displaySwitchInDocument;

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

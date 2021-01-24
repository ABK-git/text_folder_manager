import React, { useState } from "react";
import { BackgroundCenter } from "../../pages/background.styles";
import { useFormik } from "formik";
//components
import DisplayFolder from "../display-folder/display-folder.component";
import DisplayText from "../display-text/display-text.component";
import CustomButton from "../custom-button/custom-button.component";
import DisplayRootPass from "../display-root-pass/display-root-pass.component";
//css
import {
    DisplayContainer,
    DisplaySwitchButtons,
    DisplaySearchTitle
} from "./display-document.styles";

const DisplayDocument = ({ documents, selectFolder }) => {
    //Folderのみ表示
    const [disableFolder, setDisableFolder] = useState(false);
    //Textのみ表示
    const [disableText, setDisableText] = useState(false);
    //両方表示
    const [both, setBoth] = useState(true);

    //Only Folderボタン
    const displayOnlyFolder = () => {
        setDisableFolder(false);
        setDisableText(true);
        setBoth(false);
    };
    //Only Textボタン
    const displayOnlyText = () => {
        setDisableText(false);
        setDisableFolder(true);
        setBoth(false);
    };
    //Bothボタン
    const displayBoth = () => {
        setDisableText(false);
        setDisableFolder(false);
        setBoth(true);
    };

    const initialValues = {
        search_title: ""
    };
    const formik = useFormik({ initialValues });

    return (
        <BackgroundCenter>
            <DisplaySwitchButtons>
                <CustomButton onClick={displayOnlyFolder} disabled={disableText}>
                    only Folder
                </CustomButton>
                <CustomButton onClick={displayBoth} disabled={both}>
                    Both
                </CustomButton>
                <CustomButton onClick={displayOnlyText} disabled={disableFolder}>
                    only Text
                </CustomButton>
            </DisplaySwitchButtons>
            <DisplaySearchTitle
                type="search"
                name="search_title"
                placeholder="search"
                autoComplete="off"
                value={formik.values.search_title}
                onChange={formik.handleChange}
            />
            <DisplayRootPass selectFolder={selectFolder}/>
            <DisplayContainer>
                {documents
                    .filter(document =>
                        document.title
                            .toLowerCase()
                            .includes(formik.values.search_title.toLowerCase())
                    )
                    .map(document => {
                        //textの場合
                        if (document.content != undefined) {
                            return disableText ? (
                                ""
                            ) : (
                                <DisplayText
                                    key={document.id}
                                    text={document}
                                />
                            );
                        } //folderの場合
                        else {
                            return disableFolder ? (
                                ""
                            ) : (
                                <DisplayFolder
                                    key={document.id}
                                    folder={document}
                                />
                            );
                        }
                    })}
            </DisplayContainer>
        </BackgroundCenter>
    );
};

export default DisplayDocument;

import React, { useState } from "react";
import { BackgroundCenter } from "../../pages/background.styles";
import { useFormik } from "formik";
//components
import DisplayFolder from "../display-folder/display-folder.component";
import DisplayText from "../display-text/display-text.component";
import CustomButton from "../custom-button/custom-button.component";

//css
import {
    DisplayContainer,
    DisplaySwitchButtons,
    DisplaySearchTitle
} from "./display-document.styles";

const DisplayDocument = ({ documents }) => {
    const initialValues = {
        search_title: ""
    };

    //Folderのみ表示
    const [onlyFolder, setOnlyFolder] = useState(false);
    //Textのみ表示
    const [onlyText, setOnlyText] = useState(false);
    //両方表示
    const [both, setBoth] = useState(true);

    //Only Folderボタン
    const displayOnlyFolder = () => {
        setOnlyFolder(true);
        setOnlyText(false);
        setBoth(false);
    };
    //Only Textボタン
    const displayOnlyText = () => {
        setOnlyText(true);
        setOnlyFolder(false);
        setBoth(false);
    };
    //Bothボタン
    const displayBoth = () => {
        setOnlyText(false);
        setOnlyFolder(false);
        setBoth(true);
    };

    const formik = useFormik({ initialValues });
    return (
        <BackgroundCenter>
            <DisplaySwitchButtons>
                <CustomButton onClick={displayOnlyFolder} disabled={onlyFolder}>
                    only Folder
                </CustomButton>
                <CustomButton onClick={displayBoth} disabled={both}>
                    Both
                </CustomButton>
                <CustomButton onClick={displayOnlyText} disabled={onlyText}>
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
                            return (
                                <DisplayText
                                    key={document.id}
                                    text={document}
                                />
                            );
                        } //folderの場合
                        else {
                            return (
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

import React from "react";
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

    const formik = useFormik({ initialValues });
    return (
        <BackgroundCenter>
            <DisplaySwitchButtons>
                <CustomButton>only Folder</CustomButton>
                <CustomButton>Both</CustomButton>
                <CustomButton>only Text</CustomButton>
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
                            .includes(formik.values.search_title)
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

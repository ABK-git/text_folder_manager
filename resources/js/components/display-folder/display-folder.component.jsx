import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { updateFolder } from "../../redux/folder/folder.actions.js";

import {
    DisplayFolderContainer,
    BackgroundImage,
    FolderFooter,
    FooterForm
} from "./display-folder.styles";

import CustomButton from "../../components/custom-button/custom-button.component";

const DisplayFolder = ({ folder, updateFolder, user }) => {
    const history = useHistory();

    //名前編集フォームの表示・非表示
    const [isDisplay, setIsDisplay] = useState(false);

    //名前入力
    const [newName, setNewName] = useState({ name: folder.title });

    const handleChange = event => {
        const { name, value } = event.target;

        setNewName({ ...newName, [name]: value });
    };

    const handleSubmit = () => {
        const folderCredentials = {
            id: folder.id,
            title: newName.name
        };
        console.log(folderCredentials);

        updateFolder(folderCredentials);
    };

    const mouseEnterOrLeave = () => {
        setIsDisplay(!isDisplay);
    };

    return (
        <DisplayFolderContainer>
            <BackgroundImage
                onClick={() => {
                    console.log("background");

                    history.push(`/${user.displayName}/_folder/${folder.id}`);
                }}
            />
            <FolderFooter
                onMouseEnter={mouseEnterOrLeave}
                onMouseLeave={mouseEnterOrLeave}
            >
                {folder.title}
                <form
                    style={{ display: isDisplay ? "" : "none" }}
                    onSubmit={handleSubmit}
                    autoComplete="off"
                >
                    <FooterForm
                        value={newName.name}
                        handleChange={handleChange}
                        type="text"
                        name="name"
                    />
                    {folder.title !== newName.name ? (
                        <CustomButton type="submit" design="updateFolderName">
                            変更
                        </CustomButton>
                    ) : (
                        ""
                    )}
                </form>
            </FolderFooter>
        </DisplayFolderContainer>
    );
};

const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
    updateFolder: folderCredentials => dispatch(updateFolder(folderCredentials))
});

export default connect(mapStateToProps, mapDispatchToProps)(DisplayFolder);

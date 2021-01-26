import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selector";
import {
    updateFolder,
    deleteFolder
} from "../../redux/folder/folder.actions.js";

import {
    DisplayFolderContainer,
    BackgroundImage,
    FolderFooter,
    FooterForm,
    DisplayFolderButton,
    DisplayFolderButtonsContainer,
    UpdateNameButton
} from "./display-folder.styles";

const DisplayFolder = ({ folder, updateFolder, user, deleteFolder }) => {
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
    //Folderを開く
    const handleClickOpenFolder = () => {
        history.push(`/${user.displayName}/_folder/${folder.id}`);
    };
    //Folderを消去する
    const handleClickDeleteFolder = () => {
        deleteFolder(folder);
    };

    return (
        <DisplayFolderContainer>
            <BackgroundImage onClick={handleClickOpenFolder} />

            <DisplayFolderButtonsContainer>
                <DisplayFolderButton onClick={handleClickOpenFolder}>
                    OPEN
                </DisplayFolderButton>
                <DisplayFolderButton onClick={handleClickDeleteFolder}>
                    DELETE
                </DisplayFolderButton>
            </DisplayFolderButtonsContainer>

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
                        <UpdateNameButton
                            type="submit"
                            design="updateFolderName"
                        >
                            変更
                        </UpdateNameButton>
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
    updateFolder: folderCredentials =>
        dispatch(updateFolder(folderCredentials)),
    deleteFolder: folder => dispatch(deleteFolder(folder))
});

export default connect(mapStateToProps, mapDispatchToProps)(DisplayFolder);

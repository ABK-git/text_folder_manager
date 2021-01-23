import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

import {
    DisplayTextContainer,
    BackgroundImage,
    TextFooter,
    FooterForm
} from "./display-text.styles";

//component
import CustomButton from "../../components/custom-button/custom-button.component";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

const DisplayText = ({ text , user}) => {
    const history = useHistory();
    const location = useLocation();

    //名前編集フォームの表示・非表示
    const [isDisplay, setIsDisplay] = useState(false);

    //名前入力
    const [newName, setNewName] = useState({ name: text.title });

    const mouseEnterOrLeave = () => {
        setIsDisplay(!isDisplay);
    };

    const handleChange = event => {
        const { name, value } = event.target;

        setNewName({ ...newName, [name]: value });
    };

    const handleClick = () => {
        const path = location.pathname.slice(1).split("/");
        console.log("handleClick");
        
        history.push({
            pathname: `/${user.displayName}/_text/${text.id}`,
            state: text.content
        });
        console.log("終了");
    };

    const handleSubmit = () => {
        const textCredentials = {
            id: text.id,
            title: newName.name
        };
        console.log(textCredentials);

        //updateFolder(folderCredentials);
    };

    return (
        <DisplayTextContainer>
            <BackgroundImage
                onClick={handleClick}
            />
            <TextFooter
                onMouseEnter={mouseEnterOrLeave}
                onMouseLeave={mouseEnterOrLeave}
            >
                {text.title}
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
                    {text.title !== newName.name ? (
                        <CustomButton type="submit" design="updateFolderName">
                            変更
                        </CustomButton>
                    ) : (
                        ""
                    )}
                </form>
            </TextFooter>
        </DisplayTextContainer>
    );
};

const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser
});

export default connect(mapStateToProps)(DisplayText);

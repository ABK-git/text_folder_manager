import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
    DisplayTextContainer,
    BackgroundImage,
    TextFooter,
    FooterForm,
    DisplayTextButtonsContainer,
    DisplayTextButton, 
    UpdateNameButton
} from "./display-text.styles";
//component
import CustomButton from "../custom-button/custom-button.component";
//redux
import { selectCurrentUser } from "../../redux/user/user.selector";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { updateTextName } from "../../redux/text/text.actions";

const DisplayText = ({ text, user, updateTextName }) => {
    const history = useHistory();

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
        history.push({
            pathname: `/${user.displayName}/_text/${text.id}`,
            state: { creating_text: text.content }
        });
        console.log("終了");
    };

    const handleSubmit = () => {
        const textCredentials = {
            id: text.id,
            title: newName.name
        };
        console.log(textCredentials);

        updateTextName(textCredentials);
    };

    return (
        <DisplayTextContainer>
            <BackgroundImage onClick={handleClick} />
            <DisplayTextButtonsContainer>
                <DisplayTextButton>OPEN</DisplayTextButton>
                <DisplayTextButton>UPDATE</DisplayTextButton>
                <DisplayTextButton>DELETE</DisplayTextButton>
            </DisplayTextButtonsContainer>
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
                        <UpdateNameButton type="submit" design="updateFolderName">
                            変更
                        </UpdateNameButton>
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

const mapDispatchToProps = dispatch => ({
    updateTextName: textCredentials => dispatch(updateTextName(textCredentials))
});

export default connect(mapStateToProps, mapDispatchToProps)(DisplayText);

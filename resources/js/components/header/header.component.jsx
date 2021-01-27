import React from "react";
//redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { folderClear } from "../../redux/folder/folder.actions";
import { textClear } from "../../redux/text/text.actions";
import { errorClear } from "../../redux/error/error.actions";
import { signOut } from "../../redux/user/user.actions";
import { formClear } from "../../redux/form/form.actions";
import { selectCurrentUser } from "../../redux/user/user.selector";
//css
import {
    HeaderContainer,
    OptionsContainer,
    OptionLink,
    LogoToHomeContainer,
    HeaderContents
} from "./header.styles";

const Header = ({
    user,
    signOut,
    folderClear,
    textClear,
    formClear,
    errorClear
}) => {
    const handleClick = () => {
        signOut();
        folderClear();
        textClear();
        formClear();
        errorClear();
    };

    return (
        <HeaderContainer>
            {user ? (
                <HeaderContents>
                    <LogoToHomeContainer to={`/${user.displayName}`} />
                    <OptionsContainer>
                        <OptionLink to={`/${user.displayName}/read_me`}>
                            ReadMe
                        </OptionLink>
                        <OptionLink to="/" onClick={handleClick}>
                            SIGN OUT
                        </OptionLink>
                    </OptionsContainer>
                </HeaderContents>
            ) : (
                <HeaderContents>
                    <LogoToHomeContainer to="/" />
                    <OptionsContainer>
                        <OptionLink to="/read_me">ReadMe</OptionLink>
                    </OptionsContainer>
                </HeaderContents>
            )}
        </HeaderContainer>
    );
};
const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
    signOut: () => dispatch(signOut()),
    folderClear: () => dispatch(folderClear()),
    textClear: () => dispatch(textClear()),
    errorClear: () => dispatch(errorClear()),
    formClear: () => dispatch(formClear())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

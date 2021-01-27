import React from "react";
//redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { folderClear } from "../../redux/folder/folder.actions";
import { textClear } from "../../redux/text/text.actions";
import { signOut } from "../../redux/user/user.actions";
import { selectCurrentUser } from "../../redux/user/user.selector";
//css
import {
    HeaderContainer,
    OptionsContainer,
    OptionLink,
    LogoToHomeContainer,
    HeaderContents
} from "./header.styles";

const Header = ({ user, signOut, folderClear, textClear }) => {
    const handleClick = () => {
        signOut();
        folderClear();
        textClear();
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
                ""
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
    textClear: () => dispatch(textClear())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

import React from "react";
//redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { folderClear } from "../../redux/folder/folder.actions";
import { signOut } from "../../redux/user/user.actions";
import { selectCurrentUser } from "../../redux/user/user.selector";
//css
import {
    HeaderContainer,
    OptionsContainer,
    OptionLink,
    LogoToHomeContainer
} from "./header.styles";

const Header = ({ user, signOut, folderClear }) => {
    const handleClick = () => {
        signOut();
        folderClear();
    };

    return (
        <HeaderContainer>
            {user ? <LogoToHomeContainer to={`/${user.displayName}`} /> : ""}
            <OptionsContainer>
                {user ? (
                    <OptionLink to="/" onClick={handleClick}>
                        SIGN OUT
                    </OptionLink>
                ) : (
                    ""
                )}
            </OptionsContainer>
        </HeaderContainer>
    );
};
const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
    signOut: () => dispatch(signOut()),
    folderClear: () => dispatch(folderClear())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

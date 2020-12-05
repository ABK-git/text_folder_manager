import React from "react";
//redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { signOut } from "../../redux/user/user.actions";
import { selectCurrentUser } from "../../redux/user/user.selector";
//css
import {
    HeaderContainer,
    OptionsContainer,
    OptionLink,
    OptionDiv,
    LogoToHomeContainer
} from "./header.styles";

const Header = ({ user, signOut }) => (
    <HeaderContainer>
        <LogoToHomeContainer to="/"/>
        <OptionsContainer>
            {user ? (
                <OptionLink as="div" onClick={signOut}>SIGN OUT</OptionLink>
            ) : (
                <OptionDiv>
                    <OptionLink to="/signin">SIGN IN</OptionLink>
                    <OptionLink to="/signup">SIGN UP</OptionLink>
                </OptionDiv>
            )}
        </OptionsContainer>
    </HeaderContainer>
);
const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
    signOut: () => dispatch(signOut())
});

export default connect(mapStateToProps,mapDispatchToProps)(Header);

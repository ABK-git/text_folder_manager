import { connect } from "react-redux";
import { compose } from "redux";
//redux
import { createStructuredSelector } from "reselect";
import { selectIsLoading } from "../../redux/user/user.selector";
//component
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import SignInAndSignUp from "./sign_in_and_sign_up";

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsLoading(state)
});

const SignInAndSignUpContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(SignInAndSignUp);

export default SignInAndSignUpContainer;

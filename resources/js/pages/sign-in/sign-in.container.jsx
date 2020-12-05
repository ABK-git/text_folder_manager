import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectLoading } from "../../redux/user/user.selector";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import SignIn from "./sign-in.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectLoading,
});

const SignInContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(SignIn);

export default SignInContainer;
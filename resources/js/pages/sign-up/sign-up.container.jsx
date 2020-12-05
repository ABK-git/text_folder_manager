import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectLoading } from "../../redux/user/user.selector";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import SignUp from "./sign-up.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectLoading,
});

const SignUpContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(SignUp);

export default SignUpContainer;
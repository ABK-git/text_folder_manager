import { connect } from "react-redux";
import { compose } from "redux";
//redux
import { createStructuredSelector } from "reselect";
import { selectIsTextLoading } from "../../redux/text/text.selector";
//component
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import TestPage from "./test.component";

const mapStateToProps = createStructuredSelector({
    isLoading: (state) => selectIsTextLoading(state)
});

const TestContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(TestPage);

export default TestContainer;
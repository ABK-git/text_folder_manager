import { connect } from "react-redux";
import { compose } from "redux";
//redux
import { createStructuredSelector } from "reselect";
import { selectIsDuringFolderFetching } from "../../redux/folder/folder.selector";
//component
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import DisplayRootPass from "./display-root-pass.component";

const mapStateToProps = createStructuredSelector({
    isLoading: (state) => selectIsDuringFolderFetching(state)
});

const DisplayRootPassContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(DisplayRootPass);

export default DisplayRootPassContainer;
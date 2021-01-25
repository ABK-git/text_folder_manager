//Redux
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { selectIsTextLoading } from "../../redux/text/text.selector";
//component
import DisplayDocument from "../display-document/display-document.component";
import WithSpinner from "../with-spinner/with-spinner.component";

const mapStateToProps = createStructuredSelector({
    isLoading: state => selectIsTextLoading(state)
});
//Folderデータの読み込みが終わるまで待つ
const DisplayDocumentContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(DisplayDocument);

export default DisplayDocumentContainer;
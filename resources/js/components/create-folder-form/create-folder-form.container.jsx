import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectIsDuringFolderFetching } from "../../redux/folder/folder.selector";
import WithSpinner from "../with-spinner/with-spinner.component";
import createFolderForm from "./create-folder-form.component";

const mapStateToProps = createStructuredSelector({
    isLoading: state => selectIsDuringFolderFetching(state)
});
//Folderデータの読み込みが終わるまで待つ
const CreateFolderFormContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(createFolderForm);

export default CreateFolderFormContainer;

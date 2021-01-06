//Redux
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { selectIsDuringFolderFetching } from "../../redux/folder/folder.selector";
//component
import Folder from "./folder.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

const mapStateToProps = createStructuredSelector({
    isLoading: state => selectIsDuringFolderFetching(state)
});
//Folderデータの読み込みが終わるまで待つ
const FolderContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(Folder);

export default FolderContainer;
//Redux
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { selectIsDuringFolderFetching } from "../../redux/folder/folder.selector";
//component
import UserTopPage from "./user_top.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

const mapStateToProps = createStructuredSelector({
    isLoading: state => selectIsDuringFolderFetching(state)
});
//Folderデータの読み込みが終わるまで待つ
const UserTopContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(UserTopPage);

export default UserTopContainer;
import { all, call } from "redux-saga/effects";

import { userSagas } from "./user/user.sagas";
import { folderSagas } from "./folder/folder.sagas";
import { textSagas } from "./text/text.sagas";

export default function* rootSaga() {
    yield all([call(userSagas), call(folderSagas), call(textSagas)]);
}

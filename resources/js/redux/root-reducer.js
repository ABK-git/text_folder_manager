const { combineReducers } = require("redux");
//reducer
import userReducer from './user/user.reducer';

const rootReducer = combineReducers({
    user: userReducer
});

export default rootReducer
import {combineReducers} from 'redux';
import authReducers from "./authReducer";
import usersReducer from "./usersReducer";
export default combineReducers({
    auth : authReducers,
    users: usersReducer
});
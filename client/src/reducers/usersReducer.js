import { FETCH_USER_LIST } from "../actions/types";

export default function (state = [], action) {
    // console.log(action);
    switch (action.type) {
        case FETCH_USER_LIST:
            return action.payload || false;
        default:
            return state;
    }}
import {
    ADD_LIST_ITEM,
    DEL_LIST_ITEM,
    DONE_ITEM
} from "../constants/constants.js";

const tasks = (state = [], action) => {
    switch (action.type) {
        case ADD_LIST_ITEM:
            return [...state, action.item];
        case DEL_LIST_ITEM:
            return [
                ...state.slice(0, action.index),
                ...state.slice(action.index + 1)
            ];
        case DONE_ITEM:
            return [
                ...state.slice(0,action.index),
                ...state.slice(action.index + 1)
            ]
        default:
            return state;
    }
};

export default tasks;
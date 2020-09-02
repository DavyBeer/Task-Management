impoort { combineReducers } from "redux";
import {
    ADD_LIST_ITEM,
    DEL_LIST_ITEM,
    EDIT_LIST_ITEM,
    MARK_LIST_ITEM
} from "./constants/constants.js";

const allList = (state = [], action) => {
    switch (action.type) {
        case "ADD_LIST_ITEM":
            return [...state,action.task];
        case "DEL_LIST_ITEM":
            return [...state.slice(0,action.index),...state.slice(action.index+1)];
        case "EDIT_LIST_ITEM":
            return [...state.slice(0,action.index),...state.slice(action.index)];
        default:
            return;
    }
};

const activeList = (state = [], action) => {
    switch (action.type) {
        case "ADD_LIST_ITEM":
            return [...state,action.task];
        case "DEL_LIST_ITEM":
            return [...state.slice(0,action.index),...state.slice(action.index+1)];
        case "EDIT_LIST_ITEM":
            return [...state.slice(0,action.index),...state.slice(action.index)];
        case "MARK_LIST_ITEM":
            return [...state.slice(0,action.index),...state.slice(action.index+1)];
        default:
            return state;
    }
};

const markedList = (state = [], action) => {
    switch (action.type) {
        case "MARK_LIST_ITEM":
            return [...state,action.task];
        case "DEL_LIST_ITEM":
            return [...state.slice(0,action.index),...state.slice(action.index+1)];
        case "EDIT_LIST_ITEM":
            return [...state.slice(0,action.index),...state.slice(action.index)];
        default:
            return state;
    }
};

const reducer = combineReducers({
    allList,
    activeList,
    markedList
});

export default reducer;
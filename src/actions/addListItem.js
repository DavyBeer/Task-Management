import { ADD_LIST_ITEM } from "./constants/constants.js";

const addListItem = (task) => {
    return {
        type: ADD_LIST_ITEM,
        item: task
    };
};

const reducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_LIST_ITEM":
            return [...state,action.task]
        case "DEL_LIST_ITEM":
            return [...state.slice(0,action.index),...state.slice(action.index+1)]
        case "EDIT_LIST_ITEM":
            return;[...state.slice(0,action.index),...state.slice(action.index)]
        default:
            return;
    }
}

export default addListItem;
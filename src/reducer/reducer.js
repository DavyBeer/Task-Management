import {
    ADD_LIST_ITEM,
    DEL_LIST_ITEM,
    EDIT_LIST_ITEM,
    MARK_LIST_ITEM,
    FILTER_LIST_ITEMS
} from "../constants/constants.js";

const reducer = (state = [], action) => {
    switch (action.type) {
        case ADD_LIST_ITEM:
            return [...state, action.item];
        case DEL_LIST_ITEM:
            return [
                ...state.slice(0, action.index),
                ...state.slice(action.index + 1)
            ];
        case EDIT_LIST_ITEM:
            return [
                ...state.slice(0, action.index),
                ...state.slice(action.index,0)
            ];
        case MARK_LIST_ITEM:
            return [
                ...state.slice(0,action.index),
                ...state.slice(action.index + 1)
            ];
      default:
        return state;
    }
};

export default reducer;
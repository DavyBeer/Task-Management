import { ADD_LIST_ITEM } from "./constants/constants.js";

const addListItem = (task) => {
    return {
        type: ADD_LIST_ITEM,
        item: task
    };
};

export default addListItem;
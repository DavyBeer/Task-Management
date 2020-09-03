import { EDIT_LIST_ITEM } from "./constants/contants.js";

const editListItem = index => {
    return {
      type: "EDIT_LIST_ITEM",
      index: index
    };
  };

export default editListItem;
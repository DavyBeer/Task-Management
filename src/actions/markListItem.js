import { MARK_LIST_ITEM } from "../constants/constants.js";

const markListItem = index => {
    return {
      type: MARK_LIST_ITEM,
      index: index
    };
  };

export default markListItem;
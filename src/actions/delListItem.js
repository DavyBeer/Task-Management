import { DEL_LIST_ITEM } from "../constants/constants.js";

const delListItem = index => {
    return {
      type: DEL_LIST_ITEM,
      index: index
    };
  };

export default delListItem;
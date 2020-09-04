import { DONE_ITEM } from "../constants/constants.js";

const doneItem = (index) => {
    return {
      type: DONE_ITEM,
      index: index
    };
  };

export default doneItem;
import { FILTER_LIST_ITEMS } from "../constants/constants.js";

const filterListItem = (name) => {
    return {
      type: FILTER_LIST_ITEMS,
      filter: filter
    };
  };

export default filterListItem;
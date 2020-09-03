import { FILTER_LIST_ITEMS } from "../constants/constants.js";

const filterListItems = (filter) => {
    return {
      type: FILTER_LIST_ITEMS,
      filter: filter
    };
  };

export default filterListItems;
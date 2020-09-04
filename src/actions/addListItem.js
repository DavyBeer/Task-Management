import { ADD_LIST_ITEM } from "../constants/constants.js";

const addListItem = (name) => {
    return {
      type: ADD_LIST_ITEM,
      item: {
        name: name
        
      }
    };
};

export default addListItem;
import React from "react";
import addButtonContainer from "./containers/addButtonContainer";

const Todo = () => {
  return (
    <div>
        <input placeHolder="Enter an item"></input>
        <addButtonContainer />
    </div>
  )
};

export default Todo;

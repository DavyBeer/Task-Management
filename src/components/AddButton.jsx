import React from "react";

const AddButton = props => {
    return (
        <div>
            <button onClick={() => props.onSelect(props.id)}>
                Add
            </button>
        </div>
    );
};

export default AddButton;
import { connect } from "react-redux";
import addListItem from "./actions/addListItem.js";
import AddButton from "./components/AddButton";

const mapStateToProps = state => {
    return {
        tasks:state
    };
};

const capDispatchToProps = dispatch => {
    return {
        onAdd: (task) => {
            dispatch(addListItem(task));
        }
    };
};

const addButtonContainer = connect(mapStateToProps, mapDispatchToProps)(
    addButton
);

export default addButtonContainer;
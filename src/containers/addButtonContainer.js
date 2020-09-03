import { connect } from "react-redux";
import addListItem from "./actions/addListItem.js";
import AddButton from "./components/AddButton";

const mapStateToProps = state => {
    return {
        tasks:state
    };
};

const addButtonContainer = connect(mapStateToProps, null)(
    addButton
);

export default addButtonContainer;
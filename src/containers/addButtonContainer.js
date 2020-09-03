import { connect } from "react-redux";
import AddButton from "../components/TaskList.jsx";
import addListItem from "../actions/addListItem";
import delListItem from "../actions/delListItem";

const mapStateToProps = state => {
    return {
      items: state
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      onAdd: (name) => {
        dispatch(addListItem(name));
      },
      onDelete: id => {
        dispatch(delListItem(id));
      }
    };
  };
  

const AddButtonContainer = connect(mapStateToProps, mapDispatchToProps)(
    AddButton
  );

export default AddButtonContainer;
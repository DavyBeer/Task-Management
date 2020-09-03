import { connect } from "react-redux";
import TaskList from "../components/TaskList.jsx";
import addListItem from "../actions/addListItem";
import delListItem from "../actions/delListItem";
import FilterListItem from "../actions/filterListItem";

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
      },
      onMark: (name, id) => {
        dispatch(markListItem(name,id));
      }
    };
  };
  

const TaskListContainer = connect(mapStateToProps, mapDispatchToProps)(
    TaskList
  );

export default TaskListContainer;
import { connect } from "react-redux";
import TaskList from "../components/TaskList.jsx";
import addListItem from "../actions/addListItem";
import delListItem from "../actions/delListItem";
import FilterListItems from "../actions/filterList";

const mapStateToProps = state => {
    return {
      items: state
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      onAdd: (name, filt) => {
        dispatch(addListItem(name, 1));
      },
      onDelete: id => {
        dispatch(delListItem(id));
      },
      onFilter: (name, filt) => {
        dispatch(FilterListItems(name, 2));
      }
    };
  };
  

const TaskListContainer = connect(mapStateToProps, mapDispatchToProps)(
    TaskList
  );

export default TaskListContainer;
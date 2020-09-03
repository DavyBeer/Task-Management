import React from "react";

const Item = props => {
    return (
      <div>
        <div>
          Item : {props.name} 
          <button onClick={() => props.onDelete(props.index)}>Delete</button>
          <button onClick={() => props.onFilter(props.filt)}>Completed</button>
        </div>
      </div>
    );
};

class Input extends React.Component {
    constructor(props) {
      super(props);
      this.state = { name: "" };
    }
    handleChangeName(event) {
      this.setState({ name: event.target.value });
    }
    addListItem() {
      this.props.onAdd(this.state.name);
      this.setState({ name: ""});
    }
    render() {
      return (
        <div>
          <input
            onChange={this.handleChangeName.bind(this)}
            value={this.state.name}
          />
          <button onClick={() => this.addListItem()}>Add</button>
          <hr />
          <button onClick={() => this.changefilter()}>Filter</button>
        </div>
      );
    }
}

const TaskList = props => {
    return (
      <div>
        <Input onAdd={props.onAdd} />
        {props.items.map((item, index) => {
          return (
            <Item
              onDelete={props.onDelete}
              onMark={props.onMark}
              index={index}
              name={item.name}
            />
          );
        })}
      </div>
    );
};

export default TaskList;
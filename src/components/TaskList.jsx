import React from "react";

const Item = props => {
    return (
      <div className="header">
        <div>
          Item : {props.name} 
          <button onClick={() => props.onDelete(props.index)}>Delete</button>
          <input className="check" type="checkbox"></input>
        </div>
      </div>
    );
};

class Input extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: ""
      };
    }
    handleChangeName(event) {
      this.setState({ name: event.target.value });
    }
    addListItem() {
      this.props.onAdd(this.state.name);
      this.setState({ name: ""});
    }
    handleClick = e => {
      e.target.classList.toggle("strikeThrough");
    }
    render() {
      return (
        <div className="header">
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
              onChange={props.onChange}
              index={index}
              name={item.name}
            />
          );
        })}
      </div>
    );
};

export default TaskList;
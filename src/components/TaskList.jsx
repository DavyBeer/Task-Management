import React from "react";

const Item = props => {
    return (
      <div>
        <div>
          Item : {props.name}
        </div>
        <button onClick={() => props.onDelete(props.index)}>Delete</button>
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
        </div>
      );
    }
}

const AddButton = props => {
    return (
      <div>
        <Input onAdd={props.onAdd} />
        {props.items.map((item, index) => {
          return (
            <Item
              onDelete={props.onDelete}
              index={index}
              name={item.name}
            />
          );
        })}
      </div>
    );
};

export default AddButton;
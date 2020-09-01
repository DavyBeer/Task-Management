import React from "react";
import { Prompt } from "react-router-dom";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit() {
    this.setState({ value: "" });
  }
  render() {
    var style = {
      width: 300,
      height: 30,
      margin: 5
    };
    return (
      <div>
        <h5>First Name:</h5>
        <input
          value={this.state.value}
          onChange={this.handleChange.bind(this)}
          style={style}
        />
        <h5>Last Name:</h5>
        <input
            value={this.state.value}
            onChange={this.handleChange.bind(this)}
            style={style}    
        />
        <h5>Email:</h5>
        <input
            value={this.state.value}
            onChange={this.handleChange.bind(this)}
            style={style}    
        />
        <h5>Comments:</h5>
        <input
            value={this.state.value}
            onChange={this.handleChange.bind(this)}
            style={style}    
        />
        <div>
          <button onClick={this.handleSubmit.bind(this)}>Send</button>
        </div>
        <Prompt
          when={this.state.value !== ""}
          message="are you sure you want to leave without sending a message?"
        />
      </div>
    );
  }
}

export default Contact;

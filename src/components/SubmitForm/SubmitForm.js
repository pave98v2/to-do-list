import React from "react";
import './SubmitForm.css';

class SubmitForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.addItem(this.state.value);
    this.setState({ value: "" });
  }
  render() {
    return (
      <div className="submit-form">
        <form onSubmit={this.handleSubmit}>
          <label>
            Task:
          </label>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <input type="submit" value="Add to list" />
        </form>
        <h4>{this.state.value}</h4>
      </div>
    )
  }
}

export default SubmitForm;
import React from "react";
import SubmitForm from "../SubmitForm";
import ListItems from "../ListItems";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listItems: []
    };
    this.addItem = this.addItem.bind(this);
  }

  addItem(item) {
    console.log("item: " + item);
    this.setState(prevState => ({
      listItems: [item, ...prevState.listItems]
    }))
  }

  render() {
    return (
      <div className="todo-list">
        <SubmitForm addItem={this.addItem} />
        <ListItems items={this.state.listItems} />
      </div>
    );
  }
}

export default TodoList;
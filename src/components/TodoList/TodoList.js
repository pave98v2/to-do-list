import React from "react";
import "./TodoList.css";
import SubmitForm from "../SubmitForm";
import ListItems from "../ListItems";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listItems: []
    };
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItem(item) {
    console.log("item: " + item);
    this.setState(prevState => ({
      listItems: [item, ...prevState.listItems]
    }))
  }

  deleteItem(index) {

    const list = this.state.listItems;
    if (index > -1) {
      list.splice(index, 1);
    }

    this.setState({
      listItems: list
    })
  }

  render() {
    return (
      <div className="todo-list">
        <SubmitForm addItem={this.addItem} />
        <ListItems deleteItem={this.deleteItem} items={this.state.listItems} />
      </div>
    );
  }
}

export default TodoList;
import React from "react";
import Item from '../Item';
import "./ListItems.css";

class ListItems extends React.Component {

  render() {
    console.log(this.props.items);
    let array;
    if (this.props.items.length > 0) {
      array = this.props.items.map((item, index) => { return (<Item key={item + Math.floor(Math.random() * 10)} deleteItem={this.props.deleteItem} index={index} name={item} />) });
    } else {
      array = <h2 className="empty-list">Your To-do list is empty</h2>
    }

    return (
      <div className="list-items">
        <ul key="item-list">
          {array}
        </ul>
      </div>
    )
  }
}

export default ListItems;

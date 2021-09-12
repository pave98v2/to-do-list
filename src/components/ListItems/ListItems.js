import React from "react";
import Item from '../Item';
import "./ListItems.css";

class ListItems extends React.Component {

  render() {
    console.log(this.props.items);
    return (
      <div className="list-items">
        <ul key="item-list">
          {this.props.items.map((item) => { return (<Item key={item + Math.floor(Math.random() * 10)} name={item} />) })}
        </ul>
      </div>
    )
  }
}

export default ListItems;

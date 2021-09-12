import React from "react";
import "./Item.css";

class Item extends React.Component {




  render() {
    return (
      <li key={this.props.name} className="item" >
        <p>{this.props.name}</p>
        <button onClick={() => this.props.deleteItem(this.props.index)}>X</button>
      </li>
    );
  }
}

export default Item;

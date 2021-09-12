import React from "react";

class Item extends React.Component {
  render() {
    return (
      <li key={this.props.name} className = "item" >
        <p>{this.props.name}</p>
      </li>
    );
  }
}

export default Item;

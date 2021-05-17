import React from "react";

function ProductCard(props) {
  return (
    <div className="App">
      <div>{props.name}</div>
      <div>{props.description}</div>
      <div>{props.price}</div>
      <div>{props.quantity}</div>
    </div>
  );
}

export default ProductCard;

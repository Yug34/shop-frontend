import React from "react";

function ProductCard(props) {
    function addToCart() {
    //    TODO
    }

  return (
    <div className="App">
      <div>{props.name}</div>
      <div>{props.description}</div>
      <div>{props.price}</div>
      <div>{props.quantity}</div>

        <button onClick={addToCart}>Add to cart</button>
    </div>
  );
}

export default ProductCard;

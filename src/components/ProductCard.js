import React, { useEffect } from "react";

function ProductCard(props) {
    function addToCart() {
    //    TODO
    }

    useEffect(() => {
        console.log(props);
    }, [props])

  return (
    <div className="App">
      <div>{props.name}</div>
      <div>{props.description}</div>
      <div>{props.price}</div>
      <div>{props.quantity}</div>
      {/*TODO*/}
      {/*<img src={`data:${props.image.contentType};base64,${props.image.data.data.toString('base64')}`} />*/}
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
}

export default ProductCard;

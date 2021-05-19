import React, { useEffect, useState } from "react";

function ProductCard(props) {
  let [imgLink, setImgLink] = useState(null);

  function addToCart() {
    //    TODO
  }

  useEffect(() => {
    function _arrayBufferToBase64(buffer) {
      let binary = "";
      let bytes = new Uint8Array(buffer);
      let len = bytes.byteLength;
      for (let i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
      }
      return window.btoa(binary);
    }

    setImgLink(
      `data:${props.image.contentType};base64,${_arrayBufferToBase64(
        props.image.data.data
      )}`
    );
  }, [props]);

  return (
    <div className="App">
      <div>{props.name}</div>
      <div>{props.description}</div>
      <div>{props.price}</div>
      <div>{props.quantity}</div>
      <img
        src={imgLink}
        alt={props.name}
        style={{ width: "150px", height: "150px" }}
      />
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
}

export default ProductCard;

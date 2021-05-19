import React, { useEffect, useState } from "react";
import {Card, Button} from "react-bootstrap";

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

    setImgLink(`data:${props.image.contentType};base64,${_arrayBufferToBase64(props.image.data.data)}`);
  }, [props]);

  useEffect(() => {
      console.log(imgLink);
  }, [imgLink]);

  return (
    <div className="productCard">
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imgLink} />
            <div style={{position: "absolute", width: "fit-content", margin: "5px 0 0 10px", padding: "1px 3px 1px 3px", backgroundColor: "#65bb68", borderRadius: "10px"}}>₹{props.price}</div>
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>{props.description}</Card.Text>
                <Card.Subtitle className="mb-2 text-muted">{props.quantity} left in stock</Card.Subtitle>
                <Button variant="primary" onClick={addToCart}>Add to cart</Button>
            </Card.Body>
        </Card>
    </div>
  );
}

export default ProductCard;

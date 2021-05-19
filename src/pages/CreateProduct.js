import React from "react";
import {Form, Button, Row, Col} from "react-bootstrap";

function CreateProduct() {
  return (
    <Form
      action="http://localhost:6969/catalog/display"
      method="POST"
      encType="multipart/form-data"
      style={{ width: "50vw", marginLeft: "25vw" }}
    >
      <Form.Group>
        <Form.Label>Product Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          placeholder="Enter product name"
          id="name"
          required={true}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          name="description"
          placeholder="Enter product description"
          id="desc"
          required={true}
        />
      </Form.Group>
      <Row>
        <Col>
            <Form.Label>Quantity</Form.Label>
            <Form.Control
                type="number"
                name="quantity"
                placeholder="Enter quantity"
                id="quantity"
                required={true}
            />
        </Col>
        <Col>
            <Form.Label>Price</Form.Label>
            <Form.Control
                type="number"
                id="price"
                name="price"
                placeholder="Enter unit price"
                required={true}
            />
        </Col>


      </Row>
      <Form.Group>
        <Form.File
          id="image"
          type="file"
          name="image"
          label="Upload Image"
          required={true}
        />
      </Form.Group>
      <Button type="submit" style={{width: "20%", marginLeft: "40%"}}>Submit</Button>
    </Form>
  );
}

export default CreateProduct;

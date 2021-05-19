import React from "react";
import { Form, Button, FormLabel, FormText } from "react-bootstrap";

function CreateProduct() {
  return (
    <div className="App">
      <Form
        action="http://localhost:6969/catalog/display"
        method="POST"
        encType="multipart/form-data"
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
            placeholder="Enter product name"
            id="desc"
            required={true}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            type="text"
            name="quantity"
            placeholder="Enter quantity"
            id="quantity"
            required={true}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Price</Form.Label>
          <Form.Control
            id="price"
            name="price"
            placeholder="100"
            required={true}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Upload Image</Form.Label>
          <Form.Control id="image" type="file" name="image" required={true} />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}

export default CreateProduct;

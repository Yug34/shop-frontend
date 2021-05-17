import React from "react";

function CreateProduct() {
  return (
      <div className="App">
        <form action="http://localhost:6969/catalog/display" method="POST" encType="multipart/form-data">
          <div>
            <label htmlFor="name">Product Name</label>
            <input id="name" name="name" type="text" placeholder="name" required=""/>
          </div>
          <div>
            <label htmlFor="desc">Product Description</label>
            <input id="desc" name="description" placeholder="Description" required=""/>
          </div>
          <div>
            <label htmlFor="quantity">Quantity</label>
            <input id="quantity" name="quantity" placeholder="10" required=""/>
          </div>
          <div>
            <label htmlFor="price">Price</label>
            <input id="price" name="price" placeholder="100" required=""/>
          </div>
          <div>
            <label htmlFor="image">Upload Image</label>
            <input id="image" type="file" name="image" required=""/>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
  );
}

export default CreateProduct;
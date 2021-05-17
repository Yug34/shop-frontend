import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

function ListProduct() {
  let [productList, setProductList] = useState(null);
  let [productCards, setProductCards] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/catalog/list")
      .then((res) => res.json())
      .then((data) => {
        setProductList(data);
      });
  }, []);

  useEffect(() => {
    if (productList) {
      setProductCards(
        productList.map((product) => (
          <div key={product._id}>
            <ProductCard
              description={product.description}
              name={product.name}
              price={product.price}
              quantity={product.quantity}
              id={product._id}
              image={product.image}
            />
          </div>
        ))
      );
    }
  }, [productList]);

  return (
    <div className="App">
      <div className="productCardContainer">
        {productList ? productCards : null}
      </div>
    </div>
  );
}

export default ListProduct;

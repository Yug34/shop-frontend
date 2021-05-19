import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

function ListProduct() {
  let [productList, setProductList] = useState(null);
  let [productCards, setProductCards] = useState(null);

  useEffect(() => {
    fetch("http://localhost:6969/catalog/list")
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
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <h3 style={{ textAlign: "center" }}>All products:</h3>
        <Masonry columnsCount={3} gutter="0">{productList ? productCards : null}</Masonry>
      </ResponsiveMasonry>
    </div>
  );
}

export default ListProduct;

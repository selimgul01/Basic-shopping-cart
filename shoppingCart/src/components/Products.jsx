import React from "react";
import ProductItem from "./ProductItem";
import productData from "../productData";

const Products = ({ cart, setCart }) => {
  return (
    <div className="grid grid-cols-3 gap-10 mt-8">
      {productData.map((product) => (
        <ProductItem
          cart={cart}
          setCart={setCart}
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
};

export default Products;

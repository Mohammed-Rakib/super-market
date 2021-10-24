import React, { useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  const url = "http://localhost:7070/products";

  const loadProducts = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    loadProducts(url);
  }, []);

  return (
    <div className="md:w-9/12 mx-auto w-11/12 py-5 ">
      <h1 className="px-2 text-green-800 py-4 ">Featured Products </h1>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1">
        {products.map((product) => (
          <Product key={product.key} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;

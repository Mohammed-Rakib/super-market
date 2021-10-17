import { useEffect, useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);

  // async function for fatching products
  const loadProducts = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    loadProducts("products.JSON");
  }, []);
  return { products };
};

export default useProducts;

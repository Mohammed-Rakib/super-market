import React from "react";
import { useHistory } from "react-router-dom";

const Product = (props) => {
  const { img, price, key } = props.product;
  const name = props.product.name.slice(0, 35);

  const history = useHistory();

  // product details handler
  const productDetailsHandler = (key) => {
    history.push(`/products/${key}`);
  };

  return (
    <div
      onClick={() => productDetailsHandler(key)}
      className="m-3 p-2 product cursor-pointer"
    >
      <div className="flex justify-center p-3 w-full overflow-hidden">
        <img
          src={img}
          className="img-fluid product-image overflow-hidden transition-all duration-500"
          alt={name}
        />
      </div>
      <p className="text-gray-400 text-sm">{name}...</p>
      <h6>
        <small className="text-gray-300">price:</small> ${price}
      </h6>
    </div>
  );
};

export default Product;

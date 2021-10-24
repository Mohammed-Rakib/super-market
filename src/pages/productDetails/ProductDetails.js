import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BsArrowUpRightSquare } from "react-icons/bs";
import { FcPlus } from "react-icons/fc";
import { AiOutlineMinusCircle } from "react-icons/ai";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [count, setCount] = useState(1);
  console.log(product);

  useEffect(() => {
    fetch(`http://localhost:7070/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);

  // increase
  const increase = () => {
    setCount(count++);
  };

  return (
    <div className="md:w-9/12 w-11/12 mx-auto py-5">
      <div className="row">
        <div className="col-md-9 shadow p-4">
          <div className="row">
            <div className="col-md-6 flex justify-center items-center">
              <img src={product.img} alt="" />
            </div>
            <div className="col-md">
              <h6 className="text-blue-900">{product.name}</h6>
              <p className="my-3 text-sm">Category: {product.category}</p>
              <p className="my-3 text-sm ">Brand | {product.seller}</p>
              <p className="my-3 text-sm ">
                Stock :{" "}
                <span className="font-bold text-xl">{product.stock}</span>
              </p>
              <p className="my-3 text-sm ">
                Stock : $
                <span className="font-bold text-xl">{product.price}</span>
              </p>

              <div className="flex  align-center space-x-4">
                <AiOutlineMinusCircle className="text-xl text-red-400 cursor-pointer" />
                <span className="">{count}</span>
                <FcPlus onCLick={increase} className="text-xl cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <p className="px-3">Warranty</p>
          <p className="px-3 flex">
            <BsArrowUpRightSquare className="text-2xl text-green-400 mr-3" />
            100% Authentic
          </p>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

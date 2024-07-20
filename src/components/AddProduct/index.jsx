import React from "react";
import {  useSelector } from "react-redux";
import Products from "../Products";

function AddProduct() {
  const { product } = useSelector((s) => s.main);

  return (
    <div className="">
      <div className="container">
        <div className="flex items-center justify-between flex-wrap">
          {product.map((el ,idx) => <Products el={el} key={idx}/>)}
        </div>
      </div>
    </div>
  );
}

export default AddProduct;

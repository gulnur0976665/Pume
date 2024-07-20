import React from "react";
import { useSelector } from "react-redux";
import Products from "../Products";

const Sale = () => {
  const { product } = useSelector((s) => s.main);
  return (
    <div>
      <div className="container">
        <div className="flex items-center justify-between flex-wrap">
          {product.map((el, idx) =>
            el.price > 2000 ? <Products el={el} key={idx} /> : null
          )}
        </div>
      </div>
    </div>
  );
};

export default Sale;

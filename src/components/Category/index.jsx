import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { deleteProduct } from "../../redux/createProductSlice";
import { createBacket } from "../../redux/createBacketSlicee";
import Products from "../Products";

function Category() {
  const dispatch = useDispatch();
  const { product, dark } = useSelector((s) => s.main);
  const { title } = useParams();
  console.log(title, "title");
  let filterCat = product.filter((el) => el.category === title);
  console.log(filterCat, "filter");

  return (
    <div>
      <div className="container">
        <div className="flex items-center flex-wrap gap-[20px]">
          {filterCat.map((el, idx) => (
            <Products el={el} key={idx}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Category;

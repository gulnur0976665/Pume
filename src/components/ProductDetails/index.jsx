import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { createBacket } from "../../redux/createBacketSlicee";
const ProductDetails = () => {
  const { product, dark } = useSelector((state) => state.main);
  const { backet } = useSelector((s) => s.bac);
  const nav = useNavigate()
  const { detId } = useParams();
  const findProduct = product.find((el) => el.id === +detId);

  const {
    title,
    url,
    url1,
    url2,
    url3,
    url4,
    url5,
    url6,
    url7,
    category,
    price,
    description,
    rating,
    color
  } = findProduct;
  const allRating = [1, 2, 3, 4, 5];
  const imageUrls = [url, url1, url2, url3, url4, url5, url6, url7];
  const someBacket = backet.some((item) => item.id == findProduct.id);

  return (
    <div className="mt-[40px]">
      <div className="container">
        <div className="flex items-start">
   
            <div className="flex items-center gap-4 w-[76%] flex-wrap">
              {imageUrls.map((imageUrl, index) =>
                imageUrl ? (
                  <Zoom key={index}>
                  <img
                    src={imageUrl}
                    alt="img"
                    className="w-[460px] h-[500px]"
                  />
                </Zoom>
                ) : null
              )}
            </div>
          
          <div className="flex flex-col gap-4 mt-[20px]">
            <h1
              style={{ color: dark ? "black" : "white" }}
              className="text-[28px] font-bold tracking-wide">
              {title}
            </h1>
            <div className="flex items-center gap-2">
              {allRating.map((num) => (
                <div
                  key={num}
                  className="star"
                  style={{ background: num <= rating ? "orange" : "gray" }}
                />
              ))}
            </div>
            <div className="flex flex-col gap-2">
              {price > 2000 && (
                <h1 className="text-[20px] font-black text-red-600">
                  {price - (price / 100) * 20} com
                </h1>
              )}
              <h1
                style={{ color: dark ? "black" : "white" }}
                className={`text-[20px] font-black ${
                  price > 2000 ? "line-through" : ""
                }`}>
                {price} com
              </h1>
            </div>
            <div className="">
               <h1 style={{ color: dark ? "black" : "white" }} className="text-[20px] font-bold tracking-widest">
                {
                  color ? "Color" : null
                }
               </h1>

              <p  className={`${dark ? "text-gray-800" : "text-gray-400"}`}>{color}</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <h1
                style={{ color: dark ? "black" : "white" }}
                className="text-[30px] font-medium tracking-wider">
                Description
              </h1>
          <div className="">
          <h1
                style={{ color: dark ? "black" : "white" }}
                className="w-[378px] font-serif">
                {description.slice(0,190)}...
              </h1>
              <a
                style={{ color: dark ? "black" : "white" }}
                className="text-[20px] font-medium tracking-wider cursor-pointer underline">
                Read More
              </a>
          </div>
            </div>
            <div className="flex flex-col gap-5 mt-6">
              <button
               style={{
                background: dark ? "black" : "white",
                color: dark ? "white" : "black"
              }}
              
              className="tracking-wider text-[20px] font-bold py-4">   {someBacket? "Go to Basket" : "Add to Basket"}</button>
              <button style={{
                border: dark ? "2px solid black " : "2px solid white"
                
              }}
              
              className="tracking-wider text-[20px] font-bold  py-4">ADD TO FAVORITE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

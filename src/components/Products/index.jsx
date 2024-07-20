import React from "react";
import { createBacket } from "../../redux/createBacketSlicee";
import { IoClose } from "react-icons/io5";
import { deleteProduct } from "../../redux/createProductSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import sale from '../../assets/sale1.png'

const Products = ({ el }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {dark} = useSelector((s) => s.main)
  const { backet } = useSelector((s) => s.bac);
  const someBacket = backet.some((item) => item.id == el.id);
  const allRating = [1,2,3,4,5]
  return (
    <div className="">
      <div className="container">
        <div key={el.id} className="">
          <div onClick={() => dispatch()}
          style={{
            background: dark ? "white" : "black"
          }}
           className=" w-[430px] h-[620px] relative ">
         {
          el.price > 2000  ?  <img src={sale} alt="img" width={200} className="absolute top-[-7px] left-[-7px]"/> : null
         }
            <a
              onClick={() => dispatch(deleteProduct(el.id))}
              className="text-black absolute top-[3px] right-[3px] text-[35px] cursor-pointer">
              <IoClose />
            </a>
            <Link to={`/productDet/${el.id}`}>
            <img
              src={el.url}
              alt="img"
              className="w-full h-[450px] text-blue-300"
            />
            </Link>
            <div className=" mt-5 flex flex-col gap-1">
              <h1 style={{color: dark ? "black" : "white"}} className="text-[20px]  font-bold ">{el.title}</h1>
              <div className="flex items-center gap-7 ">
                <p className="text-[20px] text-gray-500">{el.category}</p>

              <div className="flex items-center gap-2">
              {
                  allRating.map((num) => (
                    <div className="star"
                    style={{
                      background: num <= el.rating ? "orange" : "gray"
                    }}
                    >
                      
                    </div>
                  ))
                }
              </div>
               
              </div>



              
              <div className="flex items-center gap-[30px] ">
               
              {
                el.price > 2000 ?    <h1  className="text-[20px] font-bold text-red-600">
                {el.price - el.price / 100 * 20 } com
              </h1> : null
              }
               <h1 style={{color: dark ? "black" : "white"}} className={`text-[20px] font-bold ${el.price > 2000 ? "line-through" : ""}`}>
                  {el.price} com
                </h1> 
                <button
                  onClick={() => {   
                    someBacket
                      ? navigate(`/backet`)
                      : dispatch(createBacket(el))}
                  }
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                  {someBacket? "Go to Basket" : "Add to Basket"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

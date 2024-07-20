import React from "react";
import { useDispatch, useSelector } from "react-redux";
import BacketProduct from "../BacketProduct";
import empty from "../../assets/empty-cart.png";
import CountUp from "react-countup";
import { removeAll } from "../../redux/createBacketSlicee";

function Backet() {
  const dispatch = useDispatch();
  const { backet } = useSelector((s) => s.bac);
  const {dark} = useSelector((s) => s.main)
  console.log(backet, "bas");
  const totalPrice = backet.reduce((acc, el, idx, arr) => {
    return acc + el.price * el.quantity;
  }, 0);
  return (
    <div>
      <div className="container">
        <div className="py-10 w-[86%] mx-auto">
          {backet.length ? (
            <div className="">
              <div className="relative overflow-x-auto shadow-2xl sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-black dark:text-black">
                  <thead className="text-2xl text-black uppercase bg-white dark:bg-white dark:text-black ">
                    <tr>
                      <th scope="col" className="px-14 py-3">
                        Img
                      </th>
                      <th scope="col" className="px-20 py-3">
                        Name
                      </th>
                      <th scope="col" className="px-20 py-3">
                        Increment
                      </th>
                      <th scope="col" className="px-20 py-3">
                        Price
                      </th>
                      <th scope="col" className="px-10 py-3">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {backet.map((el, idx) => (
                      <BacketProduct el={el} key={idx} />
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex items-center justify-between mt-8">
                <h1 style={{
                  color: dark ? "black" : "white"
                }} className=" text-[35px]  font-bold ">
                  Total Price: 
                  <CountUp
                    start={0}
                    end={totalPrice}
                    duration={2.75}
                    separator=""
                    decimals={0}
                    decimal=""
                    ></CountUp> С
                       
                </h1>
                <button
                  onClick={() => dispatch(removeAll())}
                  className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-2xl px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                  Remove All
                </button>
              </div>
            </div>
          ) : (
            <div className="flex items-center flex-col justify-center w-[50%]  mx-auto">
              <img src={empty} alt="" className="w-[80%]" />
              <h1 className="text-white text-[40px] font-medium ml-20 ">
                YOUR CART IS EMPTY
              </h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Backet;

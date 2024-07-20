import React from "react";
import { useDispatch } from "react-redux";
import {
  deletBacket,
  desCrement,
  inCrement,
} from "../../redux/createBacketSlicee";

function BacketProduct({ el }) {
  const dispatch = useDispatch();

  return (
    <tr className="bg-white border-b dark:bg-white dark:border-white">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        <img src={el.url} alt="" className="w-[120px] h-[120px]" />
      </th>
      <td className="px-11 py-4 text-[19px] font-semibold">{el.title}</td>
      <td className="px-20 py-4 text-2xl">
        <div className="flex items-center">
          <button
            onClick={() => dispatch(desCrement(el.id))}
            className="inline-flex items-center justify-center p-1 text-sm font-medium h-6 w-6 text-white bg-black border-black rounded-full focus:outline-none hover:bg-black focus:ring-4 focus:ring-black dark:bg-black dark:text-white dark:border-black dark:hover:bg-black dark:hover:border-black dark:focus:ring-black"
            type="button">
            <span className="sr-only">Quantity button</span>
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 2">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h16"
              />
            </svg>
          </button>
          <div className="ms-3">
            <h1 className="bg-black w-14 text-center border border-black text-white text-sm rounded-lg focus:ring-white focus:border-black block px-2.5 py-1 dark:bg-black dark:border-black dark:placeholder-white dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              {el.quantity}
            </h1>
          </div>
          <button
            onClick={() => dispatch(inCrement(el.id))}
            className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-white bg-white border border-white rounded-full focus:outline-none hover:bg-black focus:ring-4 focus:ring-black dark:bg-black dark:text-white dark:border-black dark:hover:bg-black dark:hover:border-black dark:focus:ring-black"
            type="button">
            <span className="sr-only">Quantity button</span>
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 1v16M1 9h16"
              />
            </svg>
          </button>
        </div>
      </td>

      <td className="px-11 py-4 ">
        {el.price > 2000 ? (
          <h1 className="text-[24px] font-semibold">
            {(el.price - (el.price / 100) * 20) * el.quantity} com
          </h1>
        ) : (
          <h1 className="text-[24px] font-semibold">
            {el.price * el.quantity} com
          </h1>
        )}
      </td>
      <td className="px-6 py-4">
        <a
          onClick={() => dispatch(deletBacket(el.id))}
          className="font-medium text-white dark:text-white hover:underline bg-black py-[8px] px-[35px] rounded-md outline-none cursor-pointer ">
          delete
        </a>
      </td>
    </tr>
  );
}

export default BacketProduct;

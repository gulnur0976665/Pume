import React, { useState } from "react";
import logo from "../../assets/header-logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { IoMdCart } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { darkMode, searchProduct } from "../../redux/createProductSlice";
import { IoMoon } from "react-icons/io5";
import { MdSunny } from "react-icons/md";

function Header() {
  const {dark} = useSelector((s) => s.main)
  console.log(dark,'dark');
  const [search, setSearch] = useState(true);
  const [search1, setSearch1] = useState(false);
const [inputValue, setInputValue] = useState(false);

 const [inputValue1, setInputValue1] = useState("");

  const nav = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="p-[30px]">
      <div className="container">
        <div className="flex items-center justify-between ">
          <img src={logo} alt="Logo" className="" />
          {search ? (
            <div style={{
              color: dark ? "black" : "white"
            }} className="flex items-center gap-[55px]">
              <Link
                to={"/"}
                onClick={() => {
                }}
                className=" text-2xl font-bold  ">
                HOME
              </Link>
              <a
                onClick={() => {
                  nav(`/category/men's shoes`);
                  
                }}
                className=" text-2xl font-bold">
                MAN
              </a>
              <a
                onClick={() => {
                  nav(`/category/women's shoes`);
                }}
                className=" text-2xl font-bold">
                WOMAN
              </a>
              <a
                onClick={() => {
                  nav(`/category/kid's shoes`);
                }}
                className=" text-2xl font-bold">
                KIDS
              </a>
              <Link to={`/sale`} className="text-2xl font-bold">SALE</Link>
            </div>
          ) : null}

          <div
          style={{
            color: dark ? "black" : "white"
          }}
          className="flex items-center gap-[45px] ">
            {inputValue ? (
              <div className="relative">
                <input
                  onChange={(e) => {
                    setInputValue1(e.target.value);
                    setSearch1(true)
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      dispatch(searchProduct(inputValue1));
                      nav(`/search`);
                    }
                  }}
                  onInput={() => {
                    dispatch(searchProduct(inputValue1));
                    nav(`/search`);
                  }}
                  value={inputValue1}
                  type="text"
                  placeholder="Search..."
                  style={{
                    border: dark ? "2px solid black" : "2px solid white"
                  }}
                  className="w-[64pc] h-[50px] rounded-[20px] outline-none bg-transparent  text-2xl text-white px-10"
                />
              {
                search1 ?   <a onClick={() => setInputValue1("")} className=" text-[35px] font-bold cursor-pointer absolute top-2 right-14">
                <IoIosClose />
              </a> : null
              }
                <a className=" text-[25px] cursor-pointer absolute top-3 left-2">
                  <IoSearch />
                </a>
                <a
                  onClick={() => {
                    setInputValue(false);
                    setSearch(true);
                    nav(`/`);
                    setInputValue1("");
                  }}
                  className=" text-[35px] font-bold cursor-pointer absolute top-2 right-2">
                  <IoIosClose />
                </a>
              </div>
            ) : null}
            
            {search ? (
              <a
                onClick={() => {
                  setInputValue(true);
                  setSearch(false);
                }}
                className=" text-[30px] cursor-pointer">
                <IoSearch />
              </a>
            ) : null}

            <a
              onClick={() => nav(`/backet`)}
              className=" text-[30px] cursor-pointer">
              <IoMdCart />
            </a>
             <a
              onClick={() => dispatch(darkMode())}
              className=" text-[30px] cursor-pointer">
            { dark ? <MdSunny/> :  <IoMoon /> }
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

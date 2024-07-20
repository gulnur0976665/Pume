import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProduct1 } from "../../redux/createProductSlice";

function CreateProduct() {
  const [productUrl, setProductUrl] = useState("");
  const [productUrl1, setProductUrl1] = useState("");
  const [productUrl2, setProductUrl2] = useState("");
  const [productUrl3, setProductUrl3] = useState("");
  const [productUrl4, setProductUrl4] = useState("");
  const [productUrl5, setProductUrl5] = useState("");
  const [productUrl6, setProductUrl6] = useState("");
  const [productUrl7, setProductUrl7] = useState("");


  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDes, setProductDes] = useState("");
  const [productCat, setProductCat] = useState("");
  const [productColor, setProductColor] = useState("");

  const { product } = useSelector((s) => s.main);
  const {dark} = useSelector((s) => s.main)
  const dispatch = useDispatch();

  const randomRating = () => {
    return Math.floor(Math.random() * 6);
  };
  const addToProduct = () => {
    if (
      productUrl.trim() === "" ||
      productUrl1.trim() === "" ||
      productUrl2.trim() === "" ||
      productUrl3.trim() === "" ||
      productUrl4.trim() === "" ||
      // productUrl5.trim() === "" ||
      // productUrl6.trim() === "" ||
      // productUrl7.trim() === "" ||


      productName.trim() === "" ||
      productPrice.trim() === "" ||
      productDes.trim() === "" ||
      productCat.trim() === "" ||
      productColor.trim() === ""
    ) {
      alert(404);
    } else {
      let newProduct = {
        id: product.length ? product[product.length - 1].id + 1 : 1,
        url: productUrl,
        url1: productUrl1,
        url2: productUrl2,
        url3: productUrl3,
        url4: productUrl4,
        url5: productUrl5,
        url6: productUrl6,
        url6: productUrl6,
        url7: productUrl7,
        title: productName,
        price: productPrice,
        description: productDes,
        category: productCat,
        color: productColor,
        rating: randomRating()
      };
      setProductUrl("");
      setProductUrl1("");
      setProductUrl2("");
      setProductUrl3("");
      setProductUrl4("");
      setProductUrl5("");
      setProductUrl6("");
      setProductUrl7("");


      setProductName("");
      setProductPrice("");
      setProductDes("");
      setProductCat("");
      setProductColor("");
      return dispatch(createProduct1(newProduct));
    }
  };

  const inputStyle = {
    color: dark ? "black" : "white",
    border: "none",
    borderBottom: dark ?  '2px solid black' : '2px solid white'
  };
  return (
    <div className="">
      <div className="container">
        <div className="flex items-center justify-center flex-col gap-4 mt-14">
          <select
            onChange={(e) => setProductCat(e.target.value)}
            value={productCat}
            style={{
              border: dark ? "2px solid black" : "2px solid white",
              color: dark ? "black" : "white"
            }}
            className="font-bold py-[8px] px-[100px] mb-[10px] text-[20px] bg-transparent  rounded-[3px]">
            <option value="">SNEAKERS</option>
            <option value="men's shoes">MENS</option>
            <option value="women's shoes">WOMENS</option>
            <option value="kid's shoes">KIDS</option>
          </select>

          <div className="relative z-0  mb-5 group w-[40%] mx-auto">
            <input
              type="url"
              onChange={(e) => setProductUrl(e.target.value)}
              value={productUrl}
              name="floating_email"
              id="floating_email"
              style={inputStyle}

              className="block py-2.5 px-0 w-full text-2xl  bg-transparent border-0 border-b-2 border-black appearance-none dark:text-white dark:border-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_email"
              class="peer-focus:font-medium absolute text-2xl font-black  text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Product Url
            </label>
          </div>
          <div className="relative z-0  mb-5 group w-[40%] mx-auto">
            <input
              type="url"
              onChange={(e) => setProductUrl1(e.target.value)}
              value={productUrl1}
              name="floating_email"
              id="floating_email"
              style={inputStyle}

              className="block py-2.5 px-0 w-full text-2xl  bg-transparent border-0 border-b-2 border-black appearance-none dark:text-white dark:border-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_email"
              class="peer-focus:font-medium absolute text-2xl font-black  text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Product Url1
            </label>
          </div>
          <div className="relative z-0  mb-5 group w-[40%] mx-auto">
            <input
              type="url"
              onChange={(e) => setProductUrl2(e.target.value)}
              value={productUrl2}
              name="floating_email"
              id="floating_email"
              style={inputStyle}

              className="block py-2.5 px-0 w-full text-2xl  bg-transparent border-0 border-b-2 border-black appearance-none dark:text-white dark:border-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_email"
              class="peer-focus:font-medium absolute text-2xl font-black  text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Product Url2
            </label>
          </div>
          <div className="relative z-0  mb-5 group w-[40%] mx-auto">
            <input
              type="url"
              onChange={(e) => setProductUrl3(e.target.value)}
              value={productUrl3}
              name="floating_email"
              id="floating_email"
              style={inputStyle}

              className="block py-2.5 px-0 w-full text-2xl  bg-transparent border-0 border-b-2 border-black appearance-none dark:text-white dark:border-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_email"
              class="peer-focus:font-medium absolute text-2xl font-black  text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Product Url3
            </label>
          </div>
          <div className="relative z-0  mb-5 group w-[40%] mx-auto">
            <input
              type="url"
              onChange={(e) => setProductUrl4(e.target.value)}
              value={productUrl4}
              name="floating_email"
              id="floating_email"
              style={inputStyle}

              className="block py-2.5 px-0 w-full text-2xl  bg-transparent border-0 border-b-2 border-black appearance-none dark:text-white dark:border-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_email"
              class="peer-focus:font-medium absolute text-2xl font-black  text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Product Url4
            </label>
          </div>
          <div className="relative z-0  mb-5 group w-[40%] mx-auto">
            <input
              type="url"
              onChange={(e) => setProductUrl5(e.target.value)}
              value={productUrl5}
              name="floating_email"
              id="floating_email"
              style={inputStyle}

              className="block py-2.5 px-0 w-full text-2xl  bg-transparent border-0 border-b-2 border-black appearance-none dark:text-white dark:border-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_email"
              class="peer-focus:font-medium absolute text-2xl font-black  text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Product Url5
            </label>
          </div>
          <div className="relative z-0  mb-5 group w-[40%] mx-auto">
            <input
              type="url"
              onChange={(e) => setProductUrl6(e.target.value)}
              value={productUrl6}
              name="floating_email"
              id="floating_email"
              style={inputStyle}

              className="block py-2.5 px-0 w-full text-2xl  bg-transparent border-0 border-b-2 border-black appearance-none dark:text-white dark:border-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_email"
              class="peer-focus:font-medium absolute text-2xl font-black  text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Product Url6
            </label>
          </div>
          <div className="relative z-0  mb-5 group w-[40%] mx-auto">
            <input
              type="url"
              onChange={(e) => setProductUrl7(e.target.value)}
              value={productUrl7}
              name="floating_email"
              id="floating_email"
              style={inputStyle}

              className="block py-2.5 px-0 w-full text-2xl  bg-transparent border-0 border-b-2 border-black appearance-none dark:text-white dark:border-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_email"
              class="peer-focus:font-medium absolute text-2xl font-black  text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Product Url7
            </label>
          </div>


          <div className="relative z-0  mb-5 group w-[40%] mx-auto">
            <input
              type="text"
              onChange={(e) => setProductName(e.target.value)}
              value={productName}
              name="floating_email"
              id="floating_email"
              style={inputStyle}

              className="block py-2.5 px-0 w-full text-2xl text-gray-900 bg-transparent  appearance-none dark:text-white dark:border-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer"
              placeholder=""
              required
            />
            <label
              htmlFor="floating_email"
              class="peer-focus:font-medium absolute text-2xl font-black text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Product Name
            </label>
          </div>
          <div className="relative z-0  mb-5 group w-[40%] mx-auto">
            <input
              type="text"
              onChange={(e) => setProductPrice(e.target.value)}
              value={productPrice}
              name="floating_email"
              id="floating_email"
              style={inputStyle}
              className="block py-2.5 px-0 w-full text-2xl text-white bg-transparent appearance-none dark:text-white dark:border-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_email"
              class="peer-focus:font-medium absolute text-2xl font-black  text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Product Price
            </label>
          </div>
          <div className="relative z-0  mb-5 group w-[40%] mx-auto">
            <input
              type="text"
              onChange={(e) => setProductDes(e.target.value)}
              value={productDes}
              name="floating_email"
              id="floating_email"
              style={inputStyle}
              className="block py-2.5 px-0 w-full text-2xl text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_email"
              class="peer-focus:font-medium absolute text-2xl font-black  text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Product Description
            </label>
          </div> 
          <div className="relative z-0  mb-5 group w-[40%] mx-auto">
            <input
              type="text"
              onChange={(e) => setProductColor(e.target.value)}
              value={productColor}
              name="floating_email"
              id="floating_email"
              style={inputStyle}
              className="block py-2.5 px-0 w-full text-2xl text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_email"
              class="peer-focus:font-medium absolute text-2xl font-black  text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Product Color
            </label>
          </div>
          <button
            onClick={() => addToProduct()}
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            Create
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateProduct;

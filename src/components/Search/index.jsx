import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createBacket } from '../../redux/createBacketSlicee';

const Search = () => {
    const {search} = useSelector((s) => s.main)
    console.log(search,'search');
    const nav = useNavigate()
    const dispatch = useDispatch()

//   const someSearch = search.some((item) => item.id === el.id);

    return (                                              
        <div>
            <div className="container">
                <div className="flex items-center flex-wrap gap-[50px]">
            {
                search.map((el) => (
                    <div className="bg-black  w-[420px] h-[540px] relative ">
                 
                    <img
                      src={el.url}
                      alt="img"
                      className="w-full h-[450px] text-blue-300"
                    />
                    <div className=" mt-5 ">
                      <h1 className="text-[20px]  font-bold text-white">
                        {el.title}
                      </h1>
                      <p className="text-[20px] text-gray-500">{el.category}</p>
            
                      <div className="flex items-center gap-[30px] ">
                        <h1 className="text-[20px] font-bold text-white">
                          {el.price} com
                        </h1>
                        <button
                        //   onClick={() =>
                        //     someSearch ? nav(`/backet`) : dispatch(createBacket(el))  
                        //   }
                          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                          Add To Backet
                        </button>
                      </div>
                    </div>
                  </div>
                ))
            }
                </div>
            </div>
        </div>
    );
};

export default Search;
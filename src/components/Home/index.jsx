import React from 'react';
import { useNavigate } from 'react-router-dom';
import bglogo from '../../assets/bgHome.png'
function Home() {
    const nav = useNavigate()
    return (
        <div 
        style={{
           background: `url(${bglogo}) no-repeat center/cover`,
           minHeight: "81vh",
          
        }}
            className=''
        >
            <div className="container">
                <div className="">
                   <div className="fixed bottom-[60px] flex items-center gap-5 left-[50%]">
                   <button onClick={() => nav(`/createProduct`)} className='bg-white text-black py-2 px-8 font-bold outline-none'>
                        ADD TO CART
                    </button>
                    <button onClick={() => nav(`/product`)}  className='bg-transparent border-2 border-solid border-white text-white py-2 px-8 outline-none'>
                        BUY NOW
                    </button>
                   </div>
                </div>
            </div>
        </div>
    );
}

export default Home;

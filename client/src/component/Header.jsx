import React from "react";
import { FaSearch,FaPlay } from "react-icons/fa";

const Header = () => {
  return (
    <div className="py-3 px-10 sm:px-4 md:px-6 lg:px-6 ">
      <div className="container mx-auto py-[16vh]">
        <div className="grid grid-cols-1 relative lg:grid-cols-2 gap-8 items-center">
          <div className="lg:w-[42rem] w-full flex flex-col space-y-6 ">
            <div className="text-4xl md:text-5xl font-bold tetx-[#2e2e2e] lg:text-6xl ">
              Delivery  <span className="text-[#f54748]">directly</span> to{" "}
              <span className="text-[#f54748]">your</span> &{" "}
              <span className="text-[#Fdc55e]">Door</span>
            </div>

            <div className="lg:text-xl text-[#191919] md:text-lg text-base">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
              dolorem nemo, praesentium nihil excepturi ullam amet harum tempora
              consequatur accusantium culpa iste voluptates
            </div>

            <div className="flex rounded-full py-2 px-4 justify-between items-center bg-white shadow-md">
              <div className="flex items-center">
                <FaSearch size={22} className="cursor-pointer" />
                <input
                  type="text"
                  className="text-[#191919] w-full border-none py-2 px-4 "
                />
              </div>

              <div className="h-10 w-10 relative bg-[#fdc55e] rounded-full">
                <FaSearch
                  size={15}
                  className="cursor-pointer text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
                />
              </div>
            </div>

            <div className="flex gap-8 items-center ">
              <button className="bg-[#f54748] active:scale-90 transition duration-500 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-medium text-white">
                explore now
              </button>

              <div className="sm:flex hidden gap-4 items-center ">
                <div className="h-14 w-14 shadow-md cursor-pointer relative bg-white rounded-full">
                    <FaPlay size={18} className='cursor-poniter text-[#f54748] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'/>
                </div>

                <div className="lg:text-xl  text-[#191919] md:text-lg text-base cursor-pointer">
                    watch now
                </div>
              </div>


            </div>
          </div>
         
          <img src="https://thumbs.dreamstime.com/z/pizza-girl-11974285.jpg" alt=""  className="h-[22rem] w-80 mx-auto justify-end rounded-full "/>
          {/* <img src="https://food-hunt-client.vercel.app/assets/banner-GJedZKVr.png" alt=""  className="h-[22rem] w-80 mx-auto justify-end rounded-full "/> */}
         
        </div>
      </div>
    </div>
  );
};

export default Header;

import React from "react";

const Service = () => {
  return (
    <div className="py-3 px-10 sm:px-4 md:px-6 lg:px-6">
      <div className="container mx-auto py-[2vh]">
        <div className="grid grid-cols-1 relative lg:grid-cols-2 gap-8 items-center">
          {/* <img src='https://th.bing.com/th/id/OIP.ihU55fbdl1qAZ_LFBoFwSQAAAA?pid=ImgDet&w=181&h=180&c=7&dpr=1.3' alt="" className='h-[22rem] mx-auto justify-end rounded-full w-50'  /> */}
          <img
            src="./images/chef.png"
            alt=""
            className="h-[32rem] mx-auto justify-end rounded-full "
          />

          <div className="w-full md:w-[32rem] flex flex-col space-y-6 ">
            <div className="text-2xl md:text-3xl font-bold text-[#2e2e2e] lg:text-4xl ">
              We are <span className="text-[#f54748]">more</span> than{" "}
              <span className="text-[#fdc55e]">multiple</span> service
            </div>

            <div className="lg:text-lg text-[#191919] md:text-base text-sm ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              tempore optio consequuntur ab iusto magnam accusamus ducimus nemo
              est aspernatur!
            </div>

            <div className="flex gap-8 items-center">
              <button className="bg-[#f54748] active:scale-90 transition duration-500 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-medium text-white ">
                About us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;

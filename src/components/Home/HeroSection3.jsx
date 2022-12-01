import React from "react";
import { BsFillCameraReelsFill, BsBookHalf, BsMicrosoft } from "react-icons/bs";
import { Link } from "react-router-dom";

function HeroSection3() {
  return (
    <div>
      <div className="h-[200px] sm:h-[300px] my-28 ">
        <div className="my-16">
          <p className="text-center text-2xl sm:text-4xl font-bold text-textSecondary">
            Menu Utama Kami
          </p>
          <p className="text-center text-gray-400">
            Dapat kamu akses dimanapun dan kapanpun
          </p>
        </div>
        <div className="flex items-center justify-center mx-20 gap-2">
          <Link to={"/video"} className="w-20 sm:w-40 h-20 sm:h-40 border-gray-500 rounded-lg shadow-gray-300 shadow-sm  ">
            <BsFillCameraReelsFill className="text-[50px] sm:text-[100px] m-auto text-red" />
            <p className="text-[12px] sm:text-lg sm:mt-5 text-center text-red">
              Videos{" "}
            </p>
          </Link>
          <Link to={"/Blog"} className="w-20 sm:w-40 h-20 sm:h-40 border-gray-500 rounded-lg shadow-gray-300 shadow-sm  ">
            <BsBookHalf className="text-[50px] m-auto text-bgPrimary sm:text-[100px]" />
            <p className="text-[12px] sm:text-lg sm:mt-5 text-center text-bgPrimary">
              Blogs{" "}
            </p>
          </Link>
          {/* <div className="w-20  sm:w-40 h-20 sm:h-40 border-gray-500 rounded-lg shadow-gray-300 shadow-sm ">
            <BsMicrosoft className="text-[50px] m-auto text-yellow sm:text-[100px]" />
            <p className="text-[12px] sm:text-lg sm:mt-5 text-center text-yellow">
              {" "}
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default HeroSection3;

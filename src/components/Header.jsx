import React from "react";
import { Link } from "react-router-dom";
import MentalHack from "../images/MentalHack.png";
import { BiUserCircle } from "react-icons/bi";

function Header() {
  return (
    <div>
      <nav className="bg-bgPrimary w-full shadow-xl">
        {/* Desktop Menu */}
        <div className="container mx-auto px-4">
          <div className="">
            <div className="flex justify-between space-x-7">
              <div>
                <a href="" className="flex items-center py-4 lg:px-2 px-0">
                  <img src={MentalHack} alt="logo" />
                </a>
              </div>
              {/* Primary Navbar Items */}
              <div className="hidden md:flex flex-nowrap justify-around items-center py-1 px-2 text-[12px] sm:text-[16px] w-full sm:w-auto sm:mx-8 font-semibold text-textWhite">
                <Link
                  to={"/"}
                  className="mx-2 mt-4 sm:mt-0 sm:mr-6 hover:font-bold"
                >
                  Beranda
                </Link>
                <Link
                  to={"/blog"}
                  className="mx-2 mt-4 sm:mt-0 sm:mr-6 hover:font-bold"
                >
                  Blogs
                </Link>
                <Link
                  to={"/video"}
                  className="mx-2 mt-4 sm:mt-0 sm:mr-6 hover:font-bold"
                >
                  Videos
                </Link>
                <Link
                  to={"/team"}
                  className="mx-2 mt-4 sm:mt-0 sm:mr-6 hover:font-bold"
                >
                  About Us
                </Link>
                <Link
                  to={"/faq"}
                  className="mx-2 mt-4 sm:mt-0 sm:mr-6 hover:font-bold"
                >
                  FAQ
                </Link>
              </div>
              <div className="flex items-center gap-2 py-1 px-2 text-[12px] sm:text-[16px] w-full sm:w-auto sm:mx-8 font-semibold text-textWhite">
                <Link
                  to={"/login"}
                  className=" mt-4 sm:mt-0 border-2 border-white-500 hover:border-textPrimary hover:text-textPrimary  py-1 rounded-lg w-24 text-center"
                >
                  Login
                </Link>
                <Link
                  to={"/register"}
                  className="mt-4 sm:mt-0 border-2 border-white-500 py-1 hover:border-textPrimary hover:text-textPrimary rounded-lg w-24 text-center"
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;

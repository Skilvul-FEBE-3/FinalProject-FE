import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "/images/MentalHack.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-bgPrimary shadow-xl">
      <div>
        <div className="flex flex-col lg:flex-row">
          <div className="flex justify-between items-center border-b lg:border-b-0">
            <div className="py-2 ">
              <Link to={"/"}>
                <img src={Logo} alt="" />
              </Link>
            </div>
            <div className="px-2">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="focus:outline text-white font-bold block lg:hidden"
              >
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    className={!isOpen ? "block" : "hidden"}
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                  <path
                    className={isOpen ? "block" : "hidden"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div
            className={`${
              isOpen ? "block" : "hidden"
            } lg:flex flex-col lg:flex-row justify-between w-full text-white font-semibold1`}
          >
            <div className="flex flex-col lg:flex-row">
              <Link to={"/"} className="p-4 hover:font-bold">
                Home
              </Link>
              <Link to={"/blog"} className="p-4 hover:font-bold">
                Blog
              </Link>
              <Link to={"/video"} className="p-4 hover:font-bold">
                Video
              </Link>
              <Link to={"/team"} className="p-4 hover:font-bold">
                About Us
              </Link>
              <Link to={"/faq"} className="p-4 hover:font-bold">
                FAQ
              </Link>
            </div>
            <div className="mr-3 my-3 flex gap-3 flex-col items-baseline lg:flex-row">
              <Link
                className="px-5 border-2 border-white-500 hover:border-3 hover:font-bold rounded-lg"
                to={"/login"}
              >
                Sign in
              </Link>
              <Link
                className="px-4 border-2 border-white-500 hover:border-3 hover:font-bold rounded-lg"
                to={"/register"}
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;

import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MentalHack from '/images/MentalHack.png';
import Logo from '/images/MentalHack.png';
import { FaUserCircle } from 'react-icons/fa';

import { BiUserCircle } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { getMe } from '../features/authSlice';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticate, setIsAuthenticate] = useState(false);
  const [profileToggle, setProfileToggle] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);
  console.log(user);

  const logout = () => {
    localStorage.clear();
    navigate('/')
  };

  return (
    <nav className="bg-bgPrimary shadow-xl">
      <div>
        <div className="flex flex-col lg:flex-row">
          <div className="flex justify-between items-center border-b lg:border-b-0">
            <div className="py-2 ">
              <Link to={'/'}>
                <img src={Logo} alt="" />
              </Link>
            </div>
            <div className="px-2">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="focus:outline text-white font-bold block lg:hidden"
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    className={!isOpen ? 'block' : 'hidden'}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                  <path
                    className={isOpen ? 'block' : 'hidden'}
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
              isOpen ? 'block' : 'hidden'
            } lg:flex flex-col lg:flex-row justify-between w-full text-white font-semibold1`}
          >
            <div className="flex flex-col lg:flex-row">
              <Link to={'/dashboard'} className="p-4 hover:font-bold">
                Home
              </Link>
              <Link to={'/blog'} className="p-4 hover:font-bold">
                Blog
              </Link>
              <Link to={'/video'} className="p-4 hover:font-bold">
                Video
              </Link>
              <Link to={'/team'} className="p-4 hover:font-bold">
                About Us
              </Link>
              <Link to={'/faq'} className="p-4 hover:font-bold">
                FAQ
              </Link>
            </div>
            {isSuccess ? (
              <div className="my-3 flex items-center lg:flex-row">
                <Link className="hidden sm:hidden md:hidden lg:block">
                  {user.name}
                </Link>
                <Link
                  className="mx-5"
                  onClick={() => setProfileToggle(!profileToggle)}
                >
                  <FaUserCircle className="text-3xl hover:text-textPrimary" />
                  {profileToggle ? (
                    <ul className="dropdown-menu min-w-max items-center  bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 m-0 bg-clip-padding border-none dropdown-menu fixed right-5">
                      <li>
                        <Link
                          className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                          href="#"
                        >
                          Profile
                        </Link>
                      </li>
                      <li>
                        <button
                          onClick={logout}
                          className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                          href="#"
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  ) : null}
                </Link>
                {/* <img width={24} src={'https://finalproject-be-production.up.railway.app/images/'+user.photo.split('/').pop()} alt="" /> */}
              </div>
            ) : !isSuccess ? (
              <div className="mr-3 my-3 flex gap-3 flex-col items-baseline lg:flex-row">
                <Link
                  className="px-5 border-2 border-white-500 hover:border-3 hover:font-bold rounded-lg"
                  to={'/login'}
                >
                  Sign in
                </Link>
                <Link
                  className="px-4 border-2 border-white-500 hover:border-3 hover:font-bold rounded-lg"
                  to={'/register'}
                >
                  Sign up
                </Link>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;

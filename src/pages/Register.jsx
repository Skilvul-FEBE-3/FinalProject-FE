import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from './Layout';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const Register = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `${import.meta.env.VITE_BASE_URL}/auth/register`,
        {
          name,
          email,
          password,
          confPassword,
        }
      );
      navigate('/');
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message);
      }
    }
  };

  return (
    <Layout>
      {/* <section className="h-screen">
        <div className="px-6 h-full text-gray-800">
          <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
            <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="w-full"
                alt="Sample image"
              />
            </div>
            <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
              {message ? (
                <div
                  className="bg-red-100 rounded-lg py-5 px-6 mb-4 text-base text-red-700"
                  role="alert"
                >
                  {message}
                </div>
              ) : (
                ''
              )}
              <form onSubmit={Register}>
                <div className="mb-6">
                  <input
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="name"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="email"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="mb-6">
                  <input
                    type="password"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="password"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="conf-password"
                    placeholder="Confirm Password"
                    value={confPassword}
                    onChange={(e) => setConfPassword(e.target.value)}
                  />
                </div>
                <div className="text-center lg:text-left">
                  <button
                    type="submit"
                    className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Register
                  </button>
                  <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                    have an account?
                    <a
                      href="/"
                      className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                    >
                      Login
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section> */}

      <div className="mx-auto pb-32 self-center bg-bgOther">
        <div className="container flex mx-auto justify-items-center items-center py-1 px-4 sm:py-4 sm:px-16 md:py-8 md:px-3 rounded-sm shadow-lg lg:w-[1080px]">
          <div className="w-full">
            <div className="flex">
              <div className="w-full lg:w-3/4 mt-12 mb-12 sm:mb-24 mx-4 px-6 py-2 sm:px-12 sm:py-4 rounded-xl bg-textSecondary text-white">
                {message ? (
                  <div
                    className="bg-red-100 rounded-lg py-5 px-6 mb-4 text-base text-red-700"
                    role="alert"
                  >
                    {message}
                  </div>
                ) : (
                  ''
                )}
                <form onSubmit={Register}>
                  <h1 className="text-4xl font-bold text-white  text-center mb-2">
                    Form Daftar
                  </h1>
                  <div className="flex justify-center">
                    <img src="/images/logo.png" alt="Logo" className="mb-8" />
                  </div>
                  <label htmlFor="name" className="text-lg font-semibold block">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="text-lg text-black px-2 py-1 rounded-xl w-full"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <label
                    htmlFor="email"
                    className="mt-4 text-lg font-semibold block"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="example@email.com"
                    className="text-lg text-black px-2 py-1 rounded-xl w-full"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label
                    htmlFor="password"
                    className="mt-4 text-lg font-semibold block"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="********"
                    className="text-lg text-black px-2 py-1 rounded-xl w-full"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label
                    htmlFor="confirmpassword"
                    className="mt-4 text-lg font-semibold block"
                  >
                    Konfirmasi Password
                  </label>
                  <input
                    type="password"
                    placeholder="********"
                    className="text-lg text-black px-2 py-1 rounded-xl w-full mb-4"
                    value={confPassword}
                    onChange={(e) => setConfPassword(e.target.value)}
                  />
                  <h1>
                    Sudah memiliki akun?
                    <Link to={'/login'} className="font-semibold">
                      {' '}
                      Masuk disini.
                    </Link>
                  </h1>
                  <div className=" mt-12 mb-8 flex justify-end w-full">
                    <button
                      type="submit"
                      className="block py-2 px-6 bg-textPrimary rounded-full w-full text-lg font-bold text-[#fff]"
                    >
                      Daftar
                    </button>
                  </div>
                </form>
              </div>
              <div className="hidden lg:w-2/4 mx-4 lg:flex justify-center items-center">
                <img src="/images/Dokter.png" alt="HeroImage" className="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Register;

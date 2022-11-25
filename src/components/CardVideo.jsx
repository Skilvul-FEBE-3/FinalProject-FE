import React from 'react'
import { BsFillArrowRightCircleFill } from "react-icons/bs";

function CardVideo() {
  return (
    <div>

      {/* CARD VIDEOS  */}
      <div className="card flex my-10 mx-[8rem] p-2 bg-white flex-col lg:flex-row rounded-xl sm:mx-[8rem] lg:mx-[10rem] drop-shadow-md transform transition-all hover:translate-y-2 hover:drop-shadow-xl">

        <img className='thumbnail rounded-lg w-[350px] mx-auto' src="https://img.freepik.com/free-vector/gradient-mountain-landscape_52683-77407.jpg?w=1060&t=st=1669274509~exp=1669275109~hmac=4e1e55eceecef08020fa1b36e9633f11cf472b752dc1f95076debc8fc0773a84" alt="thumbnail" />

          {/* TITLE & DESC  */}
          <div className="card-detail m-2 flex flex-col justify-between">

              <div className="flex font-semibold text-gray-500 justify-between">
                <h5 className='mr-2 p-2 border-2 rounded-full border-green-200'>#category</h5>
                <h6 className='ml-2 p-2'>dd/mm/yy</h6>
              </div>

            <div className="mx-4 my-2">
              <h2 className='text-lg font-bold sm:text-2xl'>title</h2>
              <p className='font-medium text-gray-500 text-justify sm:font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum expedita nostrum at voluptates quam libero. Deleniti, mollitia culpa. Cumque magni perspiciatis deserunt veniam earum commodi et animi ex voluptate nobis.</p>
            </div>

            {/* AUTHOR */}
            <div className="flex justify-between mx-2 mt-4">
              <div className="author flex justify-center items-center">
                <img className='w-[48px] rounded-full' src="https://static.vecteezy.com/system/resources/thumbnails/006/487/917/small_2x/man-avatar-icon-free-vector.jpg" alt="author" />
                <p className='mx-2 font-medium text-sky-500 text-md sm:font-bold sm:text-lg'>Author / YT Channel </p>
              </div>

              {/* WATCH BUTTON */}
              <div className="relative flex items-center justify-center px-12 overflow-hidden font-bold text-blue-400 transition duration-300 ease-out border-2 border-blue-400 rounded-full group">

                <span className='absolute flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-400 group-hover:translate-x-0 ease'>
                  <BsFillArrowRightCircleFill />
                </span>

                <a href="#" className='absolute flex items-center justify-center w-full h-full text-blue-400 transition-all duration-300 transform group-hover:translate-x-full ease'>Watch!</a>
                
              </div>

            </div>
          </div>
      </div>

      <div className="card flex my-10 mx-[8rem] p-2 bg-white flex-col lg:flex-row rounded-xl sm:mx-[8rem] lg:mx-[10rem] drop-shadow-md transform transition-all hover:translate-y-2 hover:drop-shadow-xl">

<img className='thumbnail rounded-lg w-[350px] mx-auto' src="https://img.freepik.com/free-vector/gradient-mountain-landscape_52683-77407.jpg?w=1060&t=st=1669274509~exp=1669275109~hmac=4e1e55eceecef08020fa1b36e9633f11cf472b752dc1f95076debc8fc0773a84" alt="thumbnail" />

  {/* TITLE & DESC  */}
  <div className="card-detail m-2 flex flex-col justify-between">

      <div className="flex font-semibold text-gray-500 justify-between">
        <h5 className='mr-2 p-2 border-2 rounded-full border-green-200'>#category</h5>
        <h6 className='ml-2 p-2'>dd/mm/yy</h6>
      </div>

    <div className="mx-4 my-2">
      <h2 className='text-lg font-bold sm:text-2xl'>title</h2>
      <p className='font-medium text-gray-500 text-justify sm:font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum expedita nostrum at voluptates quam libero. Deleniti, mollitia culpa. Cumque magni perspiciatis deserunt veniam earum commodi et animi ex voluptate nobis.</p>
    </div>

    {/* AUTHOR */}
    <div className="flex justify-between mx-2 mt-4">
      <div className="author flex justify-center items-center">
        <img className='w-[48px] rounded-full' src="https://static.vecteezy.com/system/resources/thumbnails/006/487/917/small_2x/man-avatar-icon-free-vector.jpg" alt="author" />
        <p className='mx-2 font-medium text-sky-500 text-md sm:font-bold sm:text-lg'>Author / YT Channel </p>
      </div>

      {/* WATCH BUTTON */}
      <div className="relative flex items-center justify-center px-12 overflow-hidden font-bold text-blue-400 transition duration-300 ease-out border-2 border-blue-400 rounded-full group">

        <span className='absolute flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-400 group-hover:translate-x-0 ease'>
          <BsFillArrowRightCircleFill />
        </span>

        <a href="#" className='absolute flex items-center justify-center w-full h-full text-blue-400 transition-all duration-300 transform group-hover:translate-x-full ease'>Watch!</a>
        
      </div>

    </div>
  </div>
      </div>

      <div className="card flex my-10 mx-[8rem] p-2 bg-white flex-col lg:flex-row rounded-xl sm:mx-[8rem] lg:mx-[10rem] drop-shadow-md transform transition-all hover:translate-y-2 hover:drop-shadow-xl">

<img className='thumbnail rounded-lg w-[350px] mx-auto' src="https://img.freepik.com/free-vector/gradient-mountain-landscape_52683-77407.jpg?w=1060&t=st=1669274509~exp=1669275109~hmac=4e1e55eceecef08020fa1b36e9633f11cf472b752dc1f95076debc8fc0773a84" alt="thumbnail" />

  {/* TITLE & DESC  */}
  <div className="card-detail m-2 flex flex-col justify-between">

      <div className="flex font-semibold text-gray-500 justify-between">
        <h5 className='mr-2 p-2 border-2 rounded-full border-green-200'>#category</h5>
        <h6 className='ml-2 p-2'>dd/mm/yy</h6>
      </div>

    <div className="mx-4 my-2">
      <h2 className='text-lg font-bold sm:text-2xl'>title</h2>
      <p className='font-medium text-gray-500 text-justify sm:font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum expedita nostrum at voluptates quam libero. Deleniti, mollitia culpa. Cumque magni perspiciatis deserunt veniam earum commodi et animi ex voluptate nobis.</p>
    </div>

    {/* AUTHOR */}
    <div className="flex justify-between mx-2 mt-4">
      <div className="author flex justify-center items-center">
        <img className='w-[48px] rounded-full' src="https://static.vecteezy.com/system/resources/thumbnails/006/487/917/small_2x/man-avatar-icon-free-vector.jpg" alt="author" />
        <p className='mx-2 font-medium text-sky-500 text-md sm:font-bold sm:text-lg'>Author / YT Channel </p>
      </div>

      {/* WATCH BUTTON */}
      <div className="relative flex items-center justify-center px-12 overflow-hidden font-bold text-blue-400 transition duration-300 ease-out border-2 border-blue-400 rounded-full group">

        <span className='absolute flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-400 group-hover:translate-x-0 ease'>
          <BsFillArrowRightCircleFill />
        </span>

        <a href="#" className='absolute flex items-center justify-center w-full h-full text-blue-400 transition-all duration-300 transform group-hover:translate-x-full ease'>Watch!</a>
        
      </div>

    </div>
  </div>
      </div>

      <div className="card flex my-10 mx-[8rem] p-2 bg-white flex-col lg:flex-row rounded-xl sm:mx-[8rem] lg:mx-[10rem] drop-shadow-md transform transition-all hover:translate-y-2 hover:drop-shadow-xl">

<img className='thumbnail rounded-lg w-[350px] mx-auto' src="https://img.freepik.com/free-vector/gradient-mountain-landscape_52683-77407.jpg?w=1060&t=st=1669274509~exp=1669275109~hmac=4e1e55eceecef08020fa1b36e9633f11cf472b752dc1f95076debc8fc0773a84" alt="thumbnail" />

  {/* TITLE & DESC  */}
  <div className="card-detail m-2 flex flex-col justify-between">

      <div className="flex font-semibold text-gray-500 justify-between">
        <h5 className='mr-2 p-2 border-2 rounded-full border-green-200'>#category</h5>
        <h6 className='ml-2 p-2'>dd/mm/yy</h6>
      </div>

    <div className="mx-4 my-2">
      <h2 className='text-lg font-bold sm:text-2xl'>title</h2>
      <p className='font-medium text-gray-500 text-justify sm:font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum expedita nostrum at voluptates quam libero. Deleniti, mollitia culpa. Cumque magni perspiciatis deserunt veniam earum commodi et animi ex voluptate nobis.</p>
    </div>

    {/* AUTHOR */}
    <div className="flex justify-between mx-2 mt-4">
      <div className="author flex justify-center items-center">
        <img className='w-[48px] rounded-full' src="https://static.vecteezy.com/system/resources/thumbnails/006/487/917/small_2x/man-avatar-icon-free-vector.jpg" alt="author" />
        <p className='mx-2 font-medium text-sky-500 text-md sm:font-bold sm:text-lg'>Author / YT Channel </p>
      </div>

      {/* WATCH BUTTON */}
      <div className="relative flex items-center justify-center px-12 overflow-hidden font-bold text-blue-400 transition duration-300 ease-out border-2 border-blue-400 rounded-full group">

        <span className='absolute flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-400 group-hover:translate-x-0 ease'>
          <BsFillArrowRightCircleFill />
        </span>

        <a href="#" className='absolute flex items-center justify-center w-full h-full text-blue-400 transition-all duration-300 transform group-hover:translate-x-full ease'>Watch!</a>
        
      </div>

    </div>
  </div>
      </div>

      <div className="card flex my-10 mx-[8rem] p-2 bg-white flex-col lg:flex-row rounded-xl sm:mx-[8rem] lg:mx-[10rem] drop-shadow-md transform transition-all hover:translate-y-2 hover:drop-shadow-xl">

<img className='thumbnail rounded-lg w-[350px] mx-auto' src="https://img.freepik.com/free-vector/gradient-mountain-landscape_52683-77407.jpg?w=1060&t=st=1669274509~exp=1669275109~hmac=4e1e55eceecef08020fa1b36e9633f11cf472b752dc1f95076debc8fc0773a84" alt="thumbnail" />

  {/* TITLE & DESC  */}
  <div className="card-detail m-2 flex flex-col justify-between">

      <div className="flex font-semibold text-gray-500 justify-between">
        <h5 className='mr-2 p-2 border-2 rounded-full border-green-200'>#category</h5>
        <h6 className='ml-2 p-2'>dd/mm/yy</h6>
      </div>

    <div className="mx-4 my-2">
      <h2 className='text-lg font-bold sm:text-2xl'>title</h2>
      <p className='font-medium text-gray-500 text-justify sm:font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum expedita nostrum at voluptates quam libero. Deleniti, mollitia culpa. Cumque magni perspiciatis deserunt veniam earum commodi et animi ex voluptate nobis.</p>
    </div>

    {/* AUTHOR */}
    <div className="flex justify-between mx-2 mt-4">
      <div className="author flex justify-center items-center">
        <img className='w-[48px] rounded-full' src="https://static.vecteezy.com/system/resources/thumbnails/006/487/917/small_2x/man-avatar-icon-free-vector.jpg" alt="author" />
        <p className='mx-2 font-medium text-sky-500 text-md sm:font-bold sm:text-lg'>Author / YT Channel </p>
      </div>

      {/* WATCH BUTTON */}
      <div className="relative flex items-center justify-center px-12 overflow-hidden font-bold text-blue-400 transition duration-300 ease-out border-2 border-blue-400 rounded-full group">

        <span className='absolute flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-400 group-hover:translate-x-0 ease'>
          <BsFillArrowRightCircleFill />
        </span>

        <a href="#" className='absolute flex items-center justify-center w-full h-full text-blue-400 transition-all duration-300 transform group-hover:translate-x-full ease'>Watch!</a>
        
      </div>

    </div>
  </div>
      </div>

      <div className="card flex my-10 mx-[8rem] p-2 bg-white flex-col lg:flex-row rounded-xl sm:mx-[8rem] lg:mx-[10rem] drop-shadow-md transform transition-all hover:translate-y-2 hover:drop-shadow-xl">

<img className='thumbnail rounded-lg w-[350px] mx-auto' src="https://img.freepik.com/free-vector/gradient-mountain-landscape_52683-77407.jpg?w=1060&t=st=1669274509~exp=1669275109~hmac=4e1e55eceecef08020fa1b36e9633f11cf472b752dc1f95076debc8fc0773a84" alt="thumbnail" />

  {/* TITLE & DESC  */}
  <div className="card-detail m-2 flex flex-col justify-between">

      <div className="flex font-semibold text-gray-500 justify-between">
        <h5 className='mr-2 p-2 border-2 rounded-full border-green-200'>#category</h5>
        <h6 className='ml-2 p-2'>dd/mm/yy</h6>
      </div>

    <div className="mx-4 my-2">
      <h2 className='text-lg font-bold sm:text-2xl'>title</h2>
      <p className='font-medium text-gray-500 text-justify sm:font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum expedita nostrum at voluptates quam libero. Deleniti, mollitia culpa. Cumque magni perspiciatis deserunt veniam earum commodi et animi ex voluptate nobis.</p>
    </div>

    {/* AUTHOR */}
    <div className="flex justify-between mx-2 mt-4">
      <div className="author flex justify-center items-center">
        <img className='w-[48px] rounded-full' src="https://static.vecteezy.com/system/resources/thumbnails/006/487/917/small_2x/man-avatar-icon-free-vector.jpg" alt="author" />
        <p className='mx-2 font-medium text-sky-500 text-md sm:font-bold sm:text-lg'>Author / YT Channel </p>
      </div>

      {/* WATCH BUTTON */}
      <div className="relative flex items-center justify-center px-12 overflow-hidden font-bold text-blue-400 transition duration-300 ease-out border-2 border-blue-400 rounded-full group">

        <span className='absolute flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-400 group-hover:translate-x-0 ease'>
          <BsFillArrowRightCircleFill />
        </span>

        <a href="#" className='absolute flex items-center justify-center w-full h-full text-blue-400 transition-all duration-300 transform group-hover:translate-x-full ease'>Watch!</a>
        
      </div>

    </div>
  </div>
      </div>

      {/* </div> */}

    </div>
  )
}

export default CardVideo
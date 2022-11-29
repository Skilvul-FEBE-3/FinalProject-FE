import React from 'react'
import { BsFillArrowRightCircleFill } from "react-icons/bs";

function CardBlog() {



  return (
    <>
      {/* <h2>CardBlog</h2> */}
    <div className="bg-green-100 w-full min-h-screen flex justify-center items-center">
      <div className='w-80 p-2 bg-white rounded-lg transform transition-all hover:translate-y-1 duration-300 shadow-lg hover:shadow-xl'>
        <img className='h-50 object-cover rounded-xl' src="https://img.freepik.com/free-vector/gradient-mountain-landscape_52683-77407.jpg?w=1060&t=st=1669274509~exp=1669275109~hmac=4e1e55eceecef08020fa1b36e9633f11cf472b752dc1f95076debc8fc0773a84" alt="" />
        <div className='p-2'>
          <div className="flex justify-between items-center">

            <h2 className='font-bold text-lg py-1'>Title</h2>

              <p className='text-[8px] md:text-[12px]'>dd/mm/yy</p>
            </div>
          <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia natus provident fugit consectetur perspiciatis culpa laboriosam debitis delectus. Consequatur ratione nemo veritatis corrupti necessitatibus maxime exercitationem eum eos doloremque ad!</p>
        </div>

        <div className="flex justify-between mx-4">
            <div className="author flex justify-center items-center">
              <img
                className="w-[24px] rounded-full"
                src='https://static.vecteezy.com/system/resources/thumbnails/006/487/917/small_2x/man-avatar-icon-free-vector.jpg'
                alt="author"
              />
              <p className="mx-2 text-sky-500 font-semibold md:font-bold text-[8px]  md:text-[12px]">
                author
              </p>
            </div>
            <div className="relative flex items-center justify-center px-8 md:px-10 overflow-hidden font-semibold md:font-bold text-blue-400 transition duration-300 ease-out border-2 border-blue-400 rounded-full group">
              <span className="absolute flex items-center justify-center w-full h-full duration-300 -translate-x-full text-blue-400 group-hover:translate-x-0 ease">
                <BsFillArrowRightCircleFill />
              </span>

              <button
                href="#"
                className="text-[8px] md:text-[12px] absolute flex items-center justify-center w-full h-full text-blue-400 transition-all duration-300 transform group-hover:translate-x-full ease"
                >
                ReadMore
              </button>
            </div>
          </div>
    </div>
    </div>
    </>
  )
}

export default CardBlog
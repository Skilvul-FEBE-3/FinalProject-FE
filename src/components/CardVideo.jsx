import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

function CardVideo() {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios(
      "https://636ccb0d91576e19e315574a.mockapi.io/blog"
    ).then((res) => {
      setVideos(res.data);
      // setIsLoading(false);
    });
  }, []);


  return (
    videos.map((item, index) => (
      <div key={index}>
      <div className='Container' >

      {/* CARD VIDEOS  */}
      <div className="card flex my-10 mx-[6rem] p-2 bg-white lg:flex-row rounded-xl md:mx-[10rem] lg:mx-[14rem] drop-shadow-md transform transition-all hover:translate-y-2 hover:drop-shadow-xl"> {/*flex-col*/}
        <img
          className="thumbnail rounded-lg h-[120px] mx-auto sm:h-[150px]"
          src={item.img}
          alt="thumbnail"
        />

        {/* TITLE & DESC  */}
        <div className="card-detail flex flex-col justify-between">
          <div className="flex font-semibold text-gray-500 text-[8px] md:text-[12px] justify-between">
            <h5 className="ml-3 p-1">#category</h5>
            <h6 className="mx-2 p-1">{item.releaseDate}</h6>
          </div>

          <div className="mx-4">
            <h2 className="text-md font-semibold md:font-bold md:text-xl">{item.tittle}</h2>
            <p className="font-normal text-[8px] text-gray-500 text-justify md:font-semibold md:text-[12px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              expedita nostrum at voluptates quam libero. Deleniti, mollitia
              culpa. Cumque magni perspiciatis deserunt veniam earum commodi et
              animi ex voluptate nobis.
            </p>
          </div>

          {/* AUTHOR */}
          <div className="flex justify-between mx-4">
            <div className="author flex justify-center items-center">
              <img
                className="w-[24px] rounded-full"
                src="https://static.vecteezy.com/system/resources/thumbnails/006/487/917/small_2x/man-avatar-icon-free-vector.jpg"
                alt="author"
              />
              <p className="mx-2 text-sky-500 font-semibold md:font-bold text-[8px]  md:text-[12px]">
                {item.author}
              </p>
            </div>

            {/* WATCH BUTTON */}
            <div className="relative flex items-center justify-center px-8 md:px-12 overflow-hidden font-semibold md:font-bold text-blue-400 transition duration-300 ease-out border-2 border-blue-400 rounded-full group">
              <span className="absolute flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-400 group-hover:translate-x-0 ease">
                <BsFillArrowRightCircleFill />
              </span>

              <a
                href="#"
                className="text-[8px] md:text-[12px] absolute flex items-center justify-center w-full h-full text-blue-400 transition-all duration-300 transform group-hover:translate-x-full ease"
              >
                Watch!
              </a>
            </div>
          </div>
        </div>
      </div>

      </div>
    </div>
    ))
      
      
  );
}

export default CardVideo;
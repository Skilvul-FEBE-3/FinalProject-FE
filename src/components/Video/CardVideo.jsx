import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Loading from "../../images/loading2.gif";
import Empty from "../../images/empty.gif";

function CardVideo() {
  const navigation = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [searching, setSearching] = useState("");
  const [videos, setVideos] = useState([]);

  const searchVideo = (e) => {
    e.preventDefault();
    axios(
      `https://636ccb0d91576e19e315574a.mockapi.io/blog?tittle=${searching}`
    ).then((res) => {
      setVideos(res.data);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    axios(
      "https://636ccb0d91576e19e315574a.mockapi.io/blog?page=1&limit=6"
    ).then((res) => {
      setVideos(res.data);
      setIsLoading(false);
    });
  }, []);

  console.log(videos);

  const clickVideos = (item) => {
    console.log("berhasil klik");
    console.log(item);
  };

  const handleDetail = (id) => {
    navigation(`/video/${id}`);
  };

  return (
    <div>
      <section className="p-12 sm:p-auto">
        <header className="w-full mx-auto text-center">
          <h1 className="font-bold text-2xl sm:text-4xl text-center text-[#006969]">
            Cari
          </h1>
          <br />
          <p className="text-gray-500">Ayo ketik sesuatu, lalu enter</p>
        </header>

        <div className="mt-12 flex justify-center w-full">
          <div>
            <div className="input-group relative flex flex-wrap items-stretch w-full mb-4">
              <form className="flex" type="submit" onSubmit={searchVideo}>
                <input
                  className="form-control form-control relative flex-auto min-w-0 block w-[250px] sm:w-[600px] lg:w-[800px] px-3 py-1.5 text-xs sm:text-base font-normal text-gray-700 bg-white bg-clip-padding border border-gray-200 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-textSecondary focus:outline-none"
                  type="text"
                  placeholder="Cari disini..."
                  name="search"
                  aria-label="Search"
                  value={searching}
                  onChange={(e) => setSearching(e.target.value)}
                />
              </form>
            </div>
          </div>
        </div>
      </section>

      {isLoading ? (
        <img src={Loading} alt="isLoading" className="h-40 sm:h-60 mx-auto" />
      ) : !videos || videos == "" ? (
        <div className="flex justify-center font-mono font-semibold text-[#295454]">
          <img src={Empty} alt="isLoading" className="h-60 sm:h-80 mx-auto" />
        </div>
      ) : (
        videos.map((item, index) => (
          <div key={index}>
            {/* CARD VIDEOS  */}
            <div className="card flex items-center my-10 mx-[6rem] p-2 bg-white lg:flex-row rounded-xl md:mx-[10rem] lg:mx-[14rem] drop-shadow-md transform transition-all hover:translate-y-2 hover:drop-shadow-xl">
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
                  <h2 className="text-md font-semibold md:font-bold md:text-xl text-textPrimary">
                    {item.tittle}
                  </h2>
                  <p className="font-normal text-[8px] text-gray-500 text-justify md:font-semibold md:text-[12px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illum expedita nostrum at voluptates quam libero. Deleniti,
                    mollitia culpa. Cumque magni perspiciatis deserunt veniam
                    earum commodi et animi ex voluptate nobis.
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
                    <p className="mx-2 text-gray-500 font-semibold md:font-bold text-[8px]  md:text-[12px]">
                      {item.author}
                    </p>
                  </div>

                  {/* WATCH BUTTON */}
                  <div className="relative flex items-center justify-center px-8 md:px-12 overflow-hidden font-semibold md:font-bold text-bgPrimary transition duration-300 ease-out border-2 border-bgPrimary rounded-full group">
                    <button
                      onClick={() => handleDetail(item.id)}
                      className="absolute flex items-center justify-center w-full h-full text-white bg-bgPrimary duration-300 -translate-x-full group-hover:translate-x-0 ease"
                    >
                      <BsFillArrowRightCircleFill />
                    </button>

                    <button className="text-[8px] md:text-[12px] absolute flex items-center justify-center w-full h-full text-bgPrimary transition-all duration-300 transform group-hover:translate-x-full ease">
                      Watch!
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default CardVideo;

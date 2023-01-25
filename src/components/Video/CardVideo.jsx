import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import Loading from '/images/loading2.gif';
import Empty from '/images/empty.gif';
import { splitDate } from '../../util/Helper';

function CardVideo() {
  const navigation = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [searching, setSearching] = useState('');
  const [videos, setVideos] = useState([]);

  const searchVideo = (e) => {
    e.preventDefault();
    axios(`${import.meta.env.VITE_BASE_URL}/video?judul=${searching}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }).then((res) => {
      setVideos(res.data.video);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    getVideo();
  }, []);

  const getVideo = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/video`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }
    );
    setVideos(response.data.video);
    setIsLoading(false);
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
      ) : !videos || videos == '' ? (
        <div className="flex justify-center font-mono font-semibold text-[#295454]">
          <img src={Empty} alt="isLoading" className="h-60 sm:h-80 mx-auto" />
        </div>
      ) : (
        videos.map((item, index) => (
          <div key={index}>
            {/* CARD VIDEOS  */}
            <Link to={`/video/${item._id}`}>
              <div className="card flex items-center my-10 mx-[6rem] p-2 bg-white lg:flex-row rounded-xl md:mx-[10rem] lg:mx-[14rem] drop-shadow-md transform transition-all hover:translate-y-2 hover:drop-shadow-xl">
                <img
                  className="thumbnail rounded-lg h-[120px] mx-auto sm:h-[150px]"
                  src={`https://img.youtube.com/vi/${item.videoId}/mqdefault.jpg`}
                  alt="thumbnail"
                />

                {/* TITLE & DESC  */}
                <div className="card-detail flex flex-col justify-between">
                  <div className="flex font-semibold text-gray-500 text-[8px] md:text-[12px] justify-between">
                    <h6 className="mx-2 px-2">
                      {splitDate(item.tanggalUpload)}
                    </h6>
                  </div>

                  <div className="mx-4">
                    <h2 className="text-md font-semibold md:font-bold md:text-xl text-textPrimary">
                      {item.judul}
                    </h2>
                    <p className="font-normal text-[8px] text-gray-500 text-justify md:font-semibold md:text-[12px]">
                      {item.deskripsi}
                    </p>
                  </div>

                  {/* AUTHOR */}
                  <div className="flex justify-between mx-4 mt-3 mb-2">
                    <div className="author flex justify-center items-center">
                      <img
                        className="w-[24px] rounded-full visible"
                        src="https://static.vecteezy.com/system/resources/thumbnails/006/487/917/small_2x/man-avatar-icon-free-vector.jpg"
                        alt="author"
                      />
                      <p className="mx-2 text-gray-500 font-semibold md:font-bold text-[8px]  md:text-[12px]">
                        disini author
                      </p>
                    </div>

                    {/* WATCH BUTTON */}
                    <div className="relative flex items-center justify-center px-8 md:px-12 overflow-hidden font-semibold md:font-bold text-bgPrimary transition duration-300 ease-out border-2 border-bgPrimary rounded-full group">
                      <Link
                        to={`/video/${item._id}`}
                        className="absolute flex items-center justify-center w-full h-full text-white bg-bgPrimary duration-300 -translate-x-full group-hover:translate-x-0 ease"
                      >
                        <BsFillArrowRightCircleFill />
                      </Link>

                      <button className="text-[8px] md:text-[12px] absolute flex items-center justify-center w-full h-full text-bgPrimary transition-all duration-300 transform group-hover:translate-x-full ease">
                        Watch!
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))
      )}
    </div>
  );
}

export default CardVideo;

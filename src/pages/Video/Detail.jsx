import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../../components/Video/Comment';

function DetailVideo() {
  const { id } = useParams();
  const [isLoading, setisLoading] = useState(true);
  const [videos, setVideos] = useState([]);
  const [content, setContent] = useState([]);

  useEffect(() => {
    getVideosById(id);
    // getContent(id);
    setisLoading(false);
  }, []);

  const getVideosById = async (id) => {
    const response = await axios.get(
      `https://finalproject-be-production.up.railway.app/video/${id}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }
    );
    setVideos(response.data.data);
  };

  console.log(videos);
  // const getContent = async (id) => {
  //   const response = await axios.get(
  //     `https://636ccb0d91576e19e315574a.mockapi.io/blog/${id}/content`
  //   );
  //   setContent(response.data);
  // };

  return (
    <div className="mx-auto">
      <div>
        <div>
          <div className="mx:10 sm:mx-20 md:mx-60 px-5 pt-5 text-2xl sm:text-4xl font-bold text-textPrimary text-center">
            {videos.tittle}
          </div>
          <div className="flex items-center justify-between mx-2 sm:mx-[273px] my-3 font-serif px-5 font-semibold text-sm sm:text-lg text-[#71717a]">
            <div>
              disini author
              {/* {videos.author} */}
            </div>
            <div>{videos.tanggalUpload}</div>
          </div>
          <div className="m-auto py-2 w-[100%] sm: flex flex-wrap justify-center">
            {/* <img src={videos.img} alt="" className="w-[90%] sm:w-[55%]" /> */}
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${videos.videoId}`}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        {/* {content.map((item, index) => ( */}
        <div className="mx-[10px]">
          <h3 className="text-xl font-semibold text-textSecondary my-10 mx-16">
            {/* {item.subtittle} */}
            subtitle ini
          </h3>
          <p className="text-sm text-justify mt-4 my-10 mx-16">
            {videos.deskripsi}
          </p>
        </div>
        {/* ))} */}
      </div>
      <div>
        <Comment />
      </div>
    </div>
  );
}

export default DetailVideo;

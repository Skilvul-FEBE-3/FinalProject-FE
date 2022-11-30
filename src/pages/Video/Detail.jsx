import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import loading from "../../images/loading2.gif";
import axios from "axios";

function DetailVideo() {
  const { id } = useParams();
  const [isLoading, setisLoading] = useState(true);
  const [videos, setVideos] = useState([]);
  const [content, setContent] = useState([]);

  useEffect(() => {
    getVideosById(id);
    getContent(id);
    setisLoading(false);
  }, []);

  const getVideosById = async (id) => {
    const response = await axios.get(
      `https://636ccb0d91576e19e315574a.mockapi.io/blog?id=${id}`
    );
    setVideos(response.data[0]);
  };

  const getContent = async (id) => {
    const response = await axios.get(
      `https://636ccb0d91576e19e315574a.mockapi.io/blog/${id}/content`
    );
    setContent(response.data);
  };

  return (
    <div className="mx-auto">
      <div>
        <div>
          <div className="mx:10 sm:mx-20 md:mx-60 px-5 pt-5 text-2xl sm:text-4xl font-bold text-textPrimary text-center">
            {videos.tittle}
          </div>
          <div className="flex items-center justify-between mx-2 sm:mx-[273px] my-3 font-serif px-5 font-semibold text-sm sm:text-lg text-[#71717a]">
            <div>{videos.author}</div>
            <div>{videos.releaseDate}</div>
          </div>
          <div className="m-auto py-2 w-[100%] sm: flex flex-wrap justify-center">
            <img src={videos.img} alt="" className="w-[90%] sm:w-[55%]" />
          </div>
        </div>
        {content.map((item, index) => (
          <div key={index} className="mx-[10px]">
            <h3 className="text-xl font-semibold text-textSecondary my-10 mx-16">
              {item.subtittle}
            </h3>
            <p className="text-sm text-justify mt-4 my-10 mx-16">
              {item.descContent}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DetailVideo;

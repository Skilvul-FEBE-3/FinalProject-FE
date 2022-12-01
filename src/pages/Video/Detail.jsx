import React from 'react';
import Comment from '../../components/Video/Comment';

function DetailVideo() {
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
      <Comment />
    </div>
  );
}

export default DetailVideo;

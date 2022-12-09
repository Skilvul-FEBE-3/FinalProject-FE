import axios from 'axios';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function Comment() {
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const { id } = useParams();
  console.log(id);

  useState(async () => {
    const response = await axios.get(
      `https://finalproject-be-production.up.railway.app/blog/${id}/comment`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }
    );
    setComments(response.data.comment);
    setIsLoading(false);
  }, []);


  console.log(comments);

  return (
    <div className="container  ">
      <h2 className="font-bold text-textPrimary text-md px-10">
        Komentar Para Pembaca
      </h2>
      <input
        className="text-sm flex border-b-2 my-6 mx-[2.5rem] justify-center items-center w-[90%] focus:outline-none"
        type="text"
        name="comment"
        placeholder="Tuliskan komentar..."
      />
      {comments.map((item, index) => (
        <div className="comment-card" key={index}>
          <div className="w-full my-6 px-2">
            <div className="flex gap-2 items-center my-3 w-[100%] px-6 py-2 text-sm lg:text-md text-emerald-500 font-normal">
              <div className="bg-bgPrimary lg:py-1 px-3 lg:px-3 rounded-full text-white">
                {item.postedBy.name}
              </div>
              <div className="text-gray-500 text-xs">{item.datePosted}</div>
            </div>

            <div className="flex text-ms items-center mx-8 pr-10 sm:pr-0 my-4 text-justify sm:text-xs md:text-sm lg:text-md text-black">
              <div>{item.content}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Comment;

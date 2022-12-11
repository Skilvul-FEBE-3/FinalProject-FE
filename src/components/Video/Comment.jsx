import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { splitDate } from '../../util/Helper';

function Comment() {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [commentTeks, setCommentTeks] = useState('');
  const { id } = useParams();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    getComments();
  }, []);

  const getComments = async () => {
    const response = await axios.get(
      `https://finalproject-be-production.up.railway.app/video/${id}/comment`
    );
    setComments(response.data.data.comment);
    setIsLoading(false);
  };

  const postComment = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/video/${id}/comment`,
      {
        commentContent: commentTeks,
        postedBy: user.id,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }
    );
    getComments();
  };

  return (
    <div className="container ">
      <h2 className="font-bold text-textPrimary text-md px-10">
        Komentar Para Penonton
      </h2>
      <form type="submit" onSubmit={postComment}>
        <input
          className="text-sm flex border-b-2 my-6 mx-[2.5rem] justify-center items-center w-[90%] focus:outline-none"
          type="text"
          placeholder="Tuliskan komentar..."
          value={commentTeks}
          onChange={(e) => setCommentTeks(e.target.value)}
        />
      </form>
      {comments.map((item, index) => (
        <div className="comment-card" key={index}>
          <div className="w-[97%] my-6 px-2">
            <div className="flex gap-2 items-center my-3 w-[100%] px-6 py-2 text-sm lg:text-md text-emerald-500 font-normal">
              <div className="bg-bgPrimary lg:py-1 px-3 lg:px-3 rounded-full text-white">
                {item.postedBy.name}
              </div>
              <div className="text-gray-500 text-xs">
                {splitDate(item.dateCreated)}
              </div>
            </div>

            <div className="flex text-ms items-center mx-8 pr-10 sm:pr-0 my-4 text-justify sm:text-xs md:text-sm lg:text-md text-black">
              <div>{item.commentContent}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Comment;

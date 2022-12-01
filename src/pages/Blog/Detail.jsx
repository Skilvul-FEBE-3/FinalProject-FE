import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import loading from '/images/loading2.gif';
import axios from 'axios';

function DetailBlog() {
  const { id } = useParams();
  const [isLoading, setisLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);
  const [dateCreated, setDateCreated] = useState('')
  const [content, setContent] = useState([]);

  useEffect(() => {
    getBlogsById(id);
    // getContent(id);
    setisLoading(false);
  }, []);

  const getBlogsById = async (id) => {
    const response = await axios.get(
      `https://finalproject-be-production.up.railway.app/blog/${id}`
    );
    setDateCreated(splitDate(response.data.data.dateCreated));
    setBlogs(response.data.data);
  };

  // const getContent = async (id) => {
  //   const response = await axios.get(
  //     `https://636ccb0d91576e19e315574a.mockapi.io/blog/${id}/content`
  //   );
  //   setContent(response.data);
  // };

  const splitDate = (date) => {
    let splitT = date.split('T');
    let splitStrip = splitT[0].split('-');
    var months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    return `${splitStrip[2]}  ${months[splitStrip[1]]}  ${splitStrip[0]}`;
  };

  return (
    <div className="mx-auto">
      <div>
        <div className="mx-20 sm:mx-60 px-5 pt-5 text-2xl sm:text-4xl font-bold text-textPrimary text-center">
          {blogs.title}
        </div>
        <div>
          <div className="font-serif px-5 font-semibold text-sm sm:text-lg text-[#71717a] text-center mt-2">
            {dateCreated}
          </div>
          <div className="font-serif px-5 mb-3 italic text-center text-sm sm:text-lg">
            siapa hayo
          </div>
          <div className="m-auto w-[80%] sm: flex flex-wrap justify-center">
            <img src={blogs.image} alt="" />
          </div>
        </div>
        {/* {content.map((item, index) => ( */}
          <div className="mt-8 mx-[50px]">
            <h3 className="text-xl font-semibold text-textSecondary my-10 mx-16">
              {blogs.subTitle}
            </h3>
            <p className="text-sm text-justify mt-4 my-10 mx-16">
              {blogs.description}
            </p>
          </div>
        {/* ))} */}
      </div>
    </div>
  );
}

export default DetailBlog;

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '/images/loading2.gif';
import Empty from '/images/empty.gif';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';

function CardBlog() {
  const [searching, setSearching] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);

  const searchBlog = (e) => {
    e.preventDefault();
    axios(
      `https://finalproject-be-production.up.railway.app/blog?title=${searching}`
    ).then((res) => {
      setBlogs(res.data);
    });
  };

  useEffect(() => {
    getBlogs();
  }, []);

  const getBlogs = async () => {
    const response = await axios.get(
      'https://finalproject-be-production.up.railway.app/blog',
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }
    );
    setBlogs(response.data);
    setIsLoading(false);
  };
  console.log(blogs);

  const clickBlog = (item) => {
    console.log('berhasil klik');
    console.log(item);
  };

  const splitdate = (date) => {
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
    return `${splitStrip[2]}  ${months[splitStrip[1] - 1]}  ${splitStrip[0]}`;
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
              <form className="flex" type="submit" onSubmit={searchBlog}>
                <input
                  className="form-control form-control relative flex-auto min-w-0 block w-[250px] sm:w-[600px] lg:w-[800px] px-3 py-1.5 text-xs sm:text-base font-normal text-gray-700 bg-white bg-clip-padding border border-gray-200 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-bgPrimary focus:outline-none"
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

      <div className="flex flex-wrap justify-center">
        {isLoading ? (
          <img src={Loading} alt="isLoading" className="h-40 sm:h-60 mx-auto " />
        ) : !blogs || blogs == '' ? (
          <div className="flex justify-center font-mono font-semibold text-[#295454]">
            <img src={Empty} alt="isLoading" className="h-60 sm:h-80 mx-auto" />
          </div>
        ) : (
          blogs.map((item, index) => (
            <div key={index} onClick={() => clickBlog(item)}>
              <div key={index} onClick={() => clickBlog(item)}>
                <Link to={`/blog/${item._id}`}>
                  <div className="w-full m-5 flex justify-center items-center">
                    <div className="w-80 bg-white rounded-lg transform transition-all hover:translate-y-1 duration-300 shadow-lg hover:shadow-xl">
                      <img
                        className="h-50 object-fit: cover; rounded-t-xl "
                        src={item.image}
                        alt=""
                      />
                      <div className="p-2 mx-2">
                        <p className="text-[10px] md:text-[12px] font-semibold text-gray-500">
                          {splitdate(item.dateCreated)}
                        </p>
                        <div className="flex justify-between items-center">
                          <h2 className="font-bold text-lg py-1 text-textPrimary">
                            {item.title}
                          </h2>
                        </div>
                        <p className="text-sm text-gray-600">{item.subTitle}</p>
                      </div>

                      <div className="flex justify-between m-3 ">
                        <div className="author flex justify-center items-center">
                          <img
                            className="w-[24px] rounded-full"
                            src="https://static.vecteezy.com/system/resources/thumbnails/006/487/917/small_2x/man-avatar-icon-free-vector.jpg"
                            alt="author"
                          />
                          <p className="text-gray-500 mx-1 font-semibold md:font-bold text-[8px] md:text-[12px]">
                            {item.createdBy.name}
                          </p>
                        </div>
                        <div className="relative flex items-center justify-center px-8 md:px-10 overflow-hidden font-semibold md:font-bold text-bgPrimary transition duration-300 ease-out border-2 border-bgPrimary rounded-full group">
                          <Link
                            to={`/blog/${item._id}`}
                            className="bg-bgPrimary absolute flex items-center justify-center w-full h-full duration-300 -translate-x-full text-white group-hover:translate-x-0 ease"
                          >
                            <BsFillArrowRightCircleFill />
                          </Link>

                          <Link
                            to={`/blog/${item._id}`}
                            className="text-[8px] md:text-[12px] absolute flex items-center justify-center w-full h-full text-bgPrimary transition-all duration-300 transform group-hover:translate-x-full ease"
                          >
                            ReadMore
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default CardBlog;

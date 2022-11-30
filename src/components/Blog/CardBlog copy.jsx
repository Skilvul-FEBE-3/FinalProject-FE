import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '/images/loading2.gif';
import Empty from '/images/empty.gif';
import { useDispatch, useSelector } from 'react-redux';

function CardBlog() {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const [searching, setSearching] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);

  const searchBlog = (e) => {
    e.preventDefault();
    axios(
      `https://636ccb0d91576e19e315574a.mockapi.io/blog?tittle=${searching}`
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
    setIsLoading(false)
  };
  console.log(blogs);

  const clickBlog = (item) => {
    console.log('berhasil klik');
    console.log(item);
  };

  const handleDetail = (id) => {
    navigation(`/blog/${id}`);
  };
  return (
    <div>
      <section className="p-12 sm:p-auto  bg-white">
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

      <div className="flex flex-wrap justify-center">
        {isLoading ? (
          <img src={Loading} alt="isLoading" className="h-40 sm:h-60 mx-auto" />
        ) : !blogs || blogs == '' ? (
          <div className="flex justify-center font-mono font-semibold text-[#295454]">
            <img src={Empty} alt="isLoading" className="h-60 sm:h-80 mx-auto" />
          </div>
        ) : (
          blogs.map((item, index) => (
            <div key={index} onClick={() => clickBlog(item)}>
              <div key={index} onClick={() => clickBlog(item)}>
                {/* <div>
                  <div className="m-5 w-[200px] sm:w-[300px] bg-white hover:bg-textSecondary border border-gray-100 rounded-xl shadow-md text-textSecondary hover:text-white">
                    <img
                      src={item.img}
                      alt="sample img"
                      className="rounded-xl"
                    />
                    <div className="px-5 py-3">
                      <h5 className="mb-2 sm:text-xl font-bold tracking-tight">
                        {item.title}
                      </h5>
                      <p className="mb-3 text-sm font-normal text-gray-500 dark:text-gray-400 truncate">
                        {item.descContent}
                      </p>
                    </div>
                    <div className="flex flex-wrap items-center justify-between mx-4 mb-4 ">
                      <div className="blogItem-author flex flex-wrap items-center">
                        <div className="blogItem-authorPhoto">
                          <img
                            src={item.img}
                            alt="avatar"
                            className="mx-2 w-[40px] h-[40px] rounded-[50%] object-cover ml-2"
                          />
                        </div>
                        <div className="blogItem-authorDesc">
                          <h6 className="text-xs font-semibold text-black">
                            {item.author}
                          </h6>
                          <p className="text-xs font-semibold text-[#a9a9a9]">
                            {item.releaseDate}
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => handleDetail(item.id)}
                        className="mx-2 w-5 h-4"
                      >
                        ➝
                      </button>
                    </div>
                  </div>
                </div> */}

                <div className="bg-green-100 w-full min-h-screen flex justify-center items-center">
                  <div className="w-80 p-2 bg-white rounded-xl transform transition-all hover:translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
                    <img
                      className="h-50 object-cover rounded-xl"
                      src="https://img.freepik.com/free-vector/gradient-mountain-landscape_52683-77407.jpg?w=1060&t=st=1669274509~exp=1669275109~hmac=4e1e55eceecef08020fa1b36e9633f11cf472b752dc1f95076debc8fc0773a84"
                      alt=""
                    />
                    <div className="p-2">
                      <h2 className="font-bold text-lg py-1">Title</h2>
                      <h4 className="font-medium text-sm pb-3">
                        Author - dd/mm/yy
                      </h4>

                      <p className="text-sm text-gray-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Officia natus provident fugit consectetur perspiciatis
                        culpa laboriosam debitis delectus. Consequatur ratione
                        nemo veritatis corrupti necessitatibus maxime
                        exercitationem eum eos doloremque ad!
                      </p>
                    </div>

                    <div className="m-2">
                      <a
                        role="button"
                        href="#"
                        className="text-white bg-green-400 px-3 py-1 rounded-md hover:bg-green-600"
                      >
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default CardBlog;

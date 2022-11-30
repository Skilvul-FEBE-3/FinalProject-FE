<div>
  <div className="bg-green-100 w-full min-h-screen flex justify-center items-center">
    <div className="w-80 p-2 bg-white rounded-xl transform transition-all hover:translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
      <img
        className="h-50 object-cover rounded-xl"
        src="https://img.freepik.com/free-vector/gradient-mountain-landscape_52683-77407.jpg?w=1060&t=st=1669274509~exp=1669275109~hmac=4e1e55eceecef08020fa1b36e9633f11cf472b752dc1f95076debc8fc0773a84"
        alt=""
      />
      <div className="p-2">
        <h2 className="font-bold text-lg py-1">Title</h2>
        <h4 className="font-medium text-sm pb-3">Author - dd/mm/yy</h4>

        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia natus
          provident fugit consectetur perspiciatis culpa laboriosam debitis
          delectus. Consequatur ratione nemo veritatis corrupti necessitatibus
          maxime exercitationem eum eos doloremque ad!
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

  <div>
    <div>
      <div className="m-5 w-[200px] sm:w-[300px] bg-white hover:bg-textSecondary border border-gray-100 rounded-xl shadow-md text-textSecondary hover:text-white">
        <img src={item.img} alt="sample img" className="rounded-xl" />
        <div className="px-5 py-3">
          <h5 className="mb-2 sm:text-xl font-bold tracking-tight">
            {item.tittle}
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
    </div>
  </div>
</div>;
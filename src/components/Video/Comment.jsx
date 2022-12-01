import React from "react";

function Comment() {
  const data = [
    {
      user: "Raihan",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dolor commodi aspernatur explicabo hic quis minima magni eligendi, voluptate, earum natus rem optio quisquam? Earum ad nulla eveniet! Natus, rem.",
      date: "20 Nov 2022",
    },
    {
      user: "Thobie",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dolor commodi aspernatur explicabo hic quis minima magni eligendi, voluptate, earum natus rem optio quisquam? Earum ad nulla eveniet! Natus, rem.",
      date: "11 Mar 2022",
    },
    {
      user: "Nabil",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dolor commodi aspernatur explicabo hic quis minima magni eligendi, voluptate, earum natus rem optio quisquam? Earum ad nulla eveniet! Natus, rem.",
      date: "28 Feb 2022",
    },
    {
      user: "Luluk cantik",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dolor commodi aspernatur explicabo hic quis minima magni eligendi, voluptate, earum natus rem optio quisquam? Earum ad nulla eveniet! Natus, rem.",
      date: "2 Des 2022",
    },
    {
      user: "Chandra",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dolor commodi aspernatur explicabo hic quis minima magni eligendi, voluptate, earum natus rem optio quisquam? Earum ad nulla eveniet! Natus, rem.",
      date: "6 Jul 2022",
    },
  ];

  return (
    <div className="container ">
      <h2 className="font-bold text-textPrimary text-md px-10">
        Komentar Para Penonton
      </h2>
      <input
        className="text-sm flex border-b-2 my-6 mx-[2.5rem] justify-center items-center w-[90%] focus:outline-none"
        type="text"
        name="comment"
        value=""
        placeholder="Tuliskan komentar..."
      />
      {data.map((item, index) => (
        <div className="comment-card" key={index}>
          <div className="w-[97%] my-6 px-2">
            <div className="flex gap-2 items-center my-3 w-[100%] px-6 py-2 text-sm lg:text-md text-emerald-500 font-normal">
              <div className="bg-bgPrimary lg:py-1 px-3 lg:px-3 rounded-full text-white">
                {item.user}
              </div>
              <div className="text-gray-500 text-xs">{item.date}</div>
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
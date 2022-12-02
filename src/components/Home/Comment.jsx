import React from "react";
import User from "/images/user.png";

function Comment() {
  return (
    <div className="my-20">
      <section className="h-[300px]">
        <p className="text-2xl text-textSecondary sm:text-4xl font-bold text-center">
          Apa kata mereka?
        </p>
        <p className="text-center text-gray-400 text-[12px] sm:text-lg">
          Setelah menggunakan layanan website ini
        </p>
        <section className="m-10 flex flex-wrap justify-center gap-2">
          <div className="w-[200px] sm:w-[300px] h-[110px] sm:h-[210px] border-black rounded-md shadow-md">
            <div className="mx-2 sm:m-5  border-gray-500 rounded-lg shadow-gray-300 gap-1 flex flex-wrap items-center">
              <img
                src={User}
                alt=""
                className="sm:w-7 lg:w-10 sm:h-7 lg:h-10 rounded-xl sm:rounded-full h-5 border-black bg-yellow"
              />
              <p className="text-[12px] sm:text-[16px] lg:text-lg">
                @febrilasucia
              </p>
            </div>
            <div className="mx-3 sm:mx-5 sm:my-5 ">
              <h1 className="text-xs sm:text-sm text-gray-500">
                Blognya bagus-bagus, penyampaiannya sangat sesuai untuk remaja.
              </h1>
            </div>
          </div>
          <div className="w-[200px] sm:w-[300px] h-[110px] sm:h-[210px] border-black rounded-md shadow-md">
            <div className="mx-2 sm:m-5  border-gray-500 rounded-lg shadow-gray-300 gap-1 flex flex-wrap items-center">
              <img
                src={User}
                alt=""
                className="sm:w-7 lg:w-10 sm:h-7 lg:h-10 rounded-xl sm:rounded-full h-5 border-black bg-yellow"
              />
              <p className="text-[12px] sm:text-[16px] lg:text-lg">
                @rehanbegitu_syulit
              </p>
            </div>
            <div className="mx-3 sm:mx-5 sm:my-5 ">
              <h1 className="text-xs sm:text-sm text-gray-500">
                Mungkin websitenya ditambahkan beberapa fitur kayak kuis sih.
              </h1>
            </div>
          </div>
          <div className="w-[200px] sm:w-[300px] h-[110px] sm:h-[210px] border-black rounded-md shadow-md">
            <div className="mx-2 sm:m-5  border-gray-500 rounded-lg shadow-gray-300 gap-1 flex flex-wrap items-center">
              <img
                src={User}
                alt=""
                className="sm:w-7 lg:w-10 sm:h-7 lg:h-10 rounded-xl sm:rounded-full h-5 border-black bg-yellow"
              />
              <p className="text-[12px] sm:text-[16px] lg:text-lg">
                @dwi_ptcintasejati
              </p>
            </div>
            <div className="mx-3 sm:mx-5 sm:my-5 ">
              <h1 className="text-xs sm:text-sm text-gray-500">
                Dengan website ini saya mengerti kebutuhan mental saya.
              </h1>
            </div>
          </div>
          <div className="w-[200px] sm:w-[300px] h-[110px] sm:h-[210px] border-black rounded-md shadow-md">
            <div className="mx-2 sm:m-5  border-gray-500 rounded-lg shadow-gray-300 gap-1 flex flex-wrap items-center">
              <img
                src={User}
                alt=""
                className="sm:w-7 lg:w-10 sm:h-7 lg:h-10 rounded-xl sm:rounded-full h-5 border-black bg-yellow"
              />
              <p className="text-[12px] sm:text-[16px] lg:text-lg">
                @luluk_canthik_celalu
              </p>
            </div>
            <div className="mx-3 sm:mx-5 sm:my-5 ">
              <h1 className="text-xs sm:text-sm text-gray-500">
                Videonya bagus bangett, nambah pengetahuan dan tips nya berguna banget buat aku yg introvert
              </h1>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Comment;

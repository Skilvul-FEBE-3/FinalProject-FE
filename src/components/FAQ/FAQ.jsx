import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { BsFillArrowDownCircleFill } from 'react-icons/bs';
import Layout from '../../pages/Layout';
import heroFaq from '/images/14.png';

function FAQ() {
  const [faqs, setFaqs] = useState([]);
  useEffect(() => {
    getFaqs();
  }, []);

  const getFaqs = async () => {
    const response = await axios.get(
      'https://finalproject-be-production.up.railway.app/faq',
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }
    );
    setFaqs(response.data.faqs);
    setIsLoading(false);
  };
  
  return (
    <Layout>
      <div className=" container-faq  w-[40%] m-auto my-[60px]">
        <div className="flex flex-wrap justify-center">
          <img src={heroFaq} alt="" className="sm:h-[300px] mb-10" />
          <h2 className="text-center text-[16px] sm:text-xl font-bold text-bgPrimary  mb-[52px] sm:mb-[40px]">
            <span className="text-5xl text-textSecondary">
              {' '}
              FA<span className="text-yellow">Q</span>
            </span>
            <br />
            Frequently Asked <span className="text-yellow">Question</span>
          </h2>
        </div>

        {faqs.map((item, i) => (
          <div className="Question-Section" key={i}>
            <div className="accordion flex my-6 w-[100%] px-5 py-2 border-2 border-bgPrimary cursor-pointer rounded-full">
              <span className="icon text-[20px] text-textSecondary mr-3 transform transition-all ease-in duration-500">
                <BsFillArrowDownCircleFill />
              </span>
              <h5 className="text-textPrimary flex justify-center items-center text-[12px] lg:text-[16px] font-semibold">
                {item.question}
              </h5>
            </div>
            <div className="content px-10 ml-9 border-bgPrimary border-l-2 text-justify overflow-hidden transform transition-all duration-500 ease-in max-h-0 peer-checked:max-h-[300px]">
              <p className="text-xs md:text-md lg:text-[14px] ">
                {item.answer}
              </p>
            </div>
          </div>
        ))}

        {/* <div className="Question-Section">
              <div className="accordion flex my-8 w-[100%] px-5 py-4 border-2 border-blue-600 cursor-pointer rounded-full">
                  <span className="icon text-[30px] text-blue-400 mr-3 transform transition-all ease-in duration-500"><BsFillArrowDownCircleFill /> </span>
                  <h5 className='flex justify-center items-center text-[20px] font-semibold'>What is Lorem Ipsum?</h5>
              </div>
              <div className="panel px-10 ml-9 border-l-blue-600 border-l-2 max-h-[300px] text-justify overflow-hidden transform transition-all duration-500 ease-in">
                  <p className='text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A voluptate adipisci totam repudiandae qui maiores accusamus maxime quae, incidunt saepe autem nobis. Id numquam animi quis velit incidunt officia quibusdam.</p>
              </div>
            </div> */}
      </div>
    </Layout>
  );
}

export default FAQ;

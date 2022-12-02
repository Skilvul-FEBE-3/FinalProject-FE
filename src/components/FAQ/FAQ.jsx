import React from 'react';
import { BsFillArrowDownCircleFill } from 'react-icons/bs';
import Layout from '../../pages/Layout';
import heroFaq from '/images/14.png';

function FAQ() {
  const data = [
    {
      question: 'What Is Lorem Ipsum 1?',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dolor commodi aspernatur explicabo hic quis minima magni eligendi, voluptate, earum natus rem optio quisquam? Earum ad nulla eveniet! Natus, rem.',
    },
    {
      question: 'What Is Lorem Ipsum 2?',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dolor commodi aspernatur explicabo hic quis minima magni eligendi, voluptate, earum natus rem optio quisquam? Earum ad nulla eveniet! Natus, rem.',
    },
    {
      question: 'What Is Lorem Ipsum 3?',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dolor commodi aspernatur explicabo hic quis minima magni eligendi, voluptate, earum natus rem optio quisquam? Earum ad nulla eveniet! Natus, rem.',
    },
    {
      question: 'What Is Lorem Ipsum 4?',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dolor commodi aspernatur explicabo hic quis minima magni eligendi, voluptate, earum natus rem optio quisquam? Earum ad nulla eveniet! Natus, rem.',
    },
    {
      question: 'What Is Lorem Ipsum 5?',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dolor commodi aspernatur explicabo hic quis minima magni eligendi, voluptate, earum natus rem optio quisquam? Earum ad nulla eveniet! Natus, rem.',
    },
  ];

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

        {data.map((item, i) => (
          <div className="Question-Section relative" key={i}>
            <input
              type="checkbox"
              className="peer absolute top-0 inset-x-0 w-full z-10 h-[4rem] opacity-0 cursor-pointer"
            />
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

      
      </div>
    </Layout>
  );
}

export default FAQ;

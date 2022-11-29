import  React from 'react'
import { BsFillArrowDownCircleFill } from "react-icons/bs";

const data = [
  {
    question: 'What Is Lorem Ipsum 1?',
    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dolor commodi aspernatur explicabo hic quis minima magni eligendi, voluptate, earum natus rem optio quisquam? Earum ad nulla eveniet! Natus, rem.'
  },
  {
    question: 'What Is Lorem Ipsum 2?',
    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dolor commodi aspernatur explicabo hic quis minima magni eligendi, voluptate, earum natus rem optio quisquam? Earum ad nulla eveniet! Natus, rem.'
  },
  {
    question: 'What Is Lorem Ipsum 3?',
    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dolor commodi aspernatur explicabo hic quis minima magni eligendi, voluptate, earum natus rem optio quisquam? Earum ad nulla eveniet! Natus, rem.'
  },
  {
    question: 'What Is Lorem Ipsum 4?',
    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dolor commodi aspernatur explicabo hic quis minima magni eligendi, voluptate, earum natus rem optio quisquam? Earum ad nulla eveniet! Natus, rem.'
  },
  {
    question: 'What Is Lorem Ipsum 5?',
    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dolor commodi aspernatur explicabo hic quis minima magni eligendi, voluptate, earum natus rem optio quisquam? Earum ad nulla eveniet! Natus, rem.'
  },
]

function FAQ() {

  return (
    <>
        <div className="container-faq  w-[40%] m-auto mt-[100px]">

          <h2 className='text-center text-2xl font-bold text-blue-400 mb-20'>Frequently Asked Quoestion <span className='underline underline-offset-8'>(FAQs)</span></h2>

            {data.map((item, index) => (
            <div className="Question-Section relative" key={index}>
              <input type="checkbox" 
              className='peer absolute top-0 inset-x-0 w-full z-10 h-[4rem] opacity-0 cursor-pointer'/>
              <div className="accordion flex my-6 w-[100%] px-5 py-4 border-2 border-blue-600 cursor-pointer rounded-full">
                  <span className="icon text-[30px] text-blue-400 mr-3 transform transition-all ease-in duration-500"><BsFillArrowDownCircleFill /></span>
                  <h5 className='flex justify-center items-center text-[14px] lg:text-[20px] font-semibold'>{item.question}</h5>
              </div>
              <div className="content px-10 ml-9 border-l-blue-600 border-l-2 text-justify overflow-hidden transform transition-all duration-500 ease-in max-h-0 peer-checked:max-h-[300px]">
                  <p className='text-xs md:text-md lg:text-lg '>{item.answer}</p>
              </div>
            </div>
            ))}

        </div>
    </>
  )
}

export default FAQ
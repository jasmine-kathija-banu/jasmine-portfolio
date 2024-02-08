import React from 'react'

const projects = () => {
  return (
    <div className=' w-[full] h-[full] pl-10'>
    <ul className=' list-disc marker:text-sky-500 marker:text-4xl text-sky-500 font-bold text-[18px] lg:text-lg'>
    <li className='cursor-pointer hover:underline hover:text-indigo-700'><a href='https://jasmine-portfolio-two.vercel.app/' target='_blank' rel="noreferrer">Personal Portfolio Website</a></li>
      <p className='pb-[5px] lg:pb-[5px] mt-0 text-[16px] lg:text-[16px] font-normal text-gray-700'><span className='text-black font-black'>Technologies Used: React JS,Tailwind CSS<br />
      </span>Created with useState hook,useContext hook,Framer motion,react smooth scroll,Email js,Swiper js etc.,</p>
    <li className='cursor-pointer hover:underline hover:text-indigo-700'><a href='https://github.com/jasmine-kathija-banu/todo-list' target='_blank' rel="noreferrer">TO-DO List</a></li>
      <p className='pb-[5px] lg:pb-[5px] font-normal text-[16px] lg:text-[16px] text-gray-700'><span className='text-black font-black'>Technologies Used: Ejs, NodeJS, ExpressJS, PostgreSQL</span><br />
      Created with Backend technologies and DataBase.</p>
    <li className='cursor-pointer hover:underline hover:text-indigo-700'><a href='http://food-delivery-app-reactjs-one.vercel.app' target='_blank' rel="noreferrer">Food Delivery App</a></li>
      <p className=' font-normal text-[16px] lg:text-[16px] text-gray-700'><span className='text-black font-black'>Technologies Used: React JS, Tailwind CSS</span><br />
      Beautiful Front end design along with mobile Responsive</p>
    </ul>
  </div>
  )
}

export default projects
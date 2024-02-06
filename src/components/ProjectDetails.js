import React from 'react';
import {miniprojects} from '../data.js';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const ProjectDetails = () => {
  return (
    <div id='ProjectDetails' className='py-5'>
      <h1 className='text-3xl py-4 text-sky-500 text-center font-bold'>Mini Projects</h1>
    <div className='flex w-full m-auto py-2 px-2'>
         <Splide options={{perPage:4,gap:"0.5rem",drag:"free", breakpoints: {
    640: {
      perPage: 2,
    },
    480: {
      perPage: 1,
    },}}}>
        {
            miniprojects.map((item)=>{
                return(
                    <SplideSlide key={item.id}>
                        <div className='rounded-3xl flex items-center justify-center hover:scale-105 ease-out duration-300 shadow-slate-600 shadow-md'>
                        <div className='absolute w-[85%] h-[85%] bg-black/10 rounded-3xl'>
                        <p className='px-4 pt-4 font-bold text-2xl text-black '>{item.title}</p>
                        <p className='px-4 text-gray-800'>{item.tech}</p>
                        <a href={item.link} target="_blank" rel='noreferrer'><button className='rounded-3xl w-[120px] bg-black/70 text-white p-2 mx-2 absolute bottom-4'>View</button></a>
                      </div>
                          <img className='h-[200px] w-full object-cover rounded-3xl cursor-pointer ' src="images/probackpink.jpg" alt="" />

                        </div>

</SplideSlide> )
            })
        }</Splide>
    </div>
    </div>
  )
}

export default ProjectDetails
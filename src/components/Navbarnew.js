import React, { useEffect, useState } from 'react';
import { TbHexagonLetterJ } from "react-icons/tb";
import { Link } from 'react-scroll';

const Navbarnew = () => {
  let [darkMode, SetDarkMode] =useState(false);
  useEffect(()=>{
    if (darkMode){
      document.documentElement.classList.add('dark');
    }else {
      document.documentElement.classList.remove('dark');
    }
  },[darkMode]
  );

  return (
    <div className='  mx-auto py-2 dark:bg-black dark:text-white'>
        <div className='flex gap-2 flex-wrap lg:gap-0'>
        
            <div className='w-full md:w-1/3 flex items-center justify-around lg:justify-around'>
            <div className='flex'><TbHexagonLetterJ className='lg:scale-110' size={20}/><h1 className='text-sky-500 text-[25px] dark:text-white  lg:text-gray-800 font-extrabold md:text-[35px]'>Jasmine</h1></div>
            <button className='rounded-full w-[60px] items-center cursor-pointer' onClick={()=>{
              SetDarkMode(!darkMode)
            }}>{darkMode ? <img src='images/light w.png ' className='w-7 h-7 lg:w-10 lg:h-10 ' /> : <img src='images/night.png' className='w-7 h-7 lg:w-10 lg:h-10 '  /> }</button>
            </div>
            <div className='w-full lg:w-2/3 flex font-semibold items-center justify-around lg:justify-end  text-[16px] lg:text-[20px] px-6 gap-2 '>
            <ul className=' flex  gap-8 lg:gap-20 dark:text-white   text-gray-700  hover:*:cursor-pointer hover:*:text-sky-500'>
            <Link 
      activeClass="active" 
      to="LandingPage" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500} 
      
    >
            <li>Home</li> </Link>

            <Link 
      activeClass="active" 
      to="Aboutme" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500} 
      
    >
            <li>Aboutme</li> </Link>

            <Link 
      activeClass="active" 
      to="Resume" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500} 
     
    >
            <li>Resume</li> </Link>

            <Link 
      to="ProjectDetails" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500} 
      
    >
            <li>Projects</li> </Link>
          </ul>
          <Link 
      to="contactme" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500} 
      
    >
          <button className='text-[16px] lg:text-[20px] w-[100px] hidden md:block md:ml-6 mx-2  hover:scale-x-105 border-none  shadow-2xl shadow-blue-500 bg-gradient-to-r p-1 rounded-full text-white from-sky-400 to-sky-600'>Contact</button>
          </Link>
            </div>
        </div>
    </div>

   
  )
}

export default Navbarnew
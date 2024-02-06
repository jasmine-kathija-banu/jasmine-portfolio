import React from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import { BsInstagram } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='w-full relative md:mt-[-6rem] mt-[-7rem] flex justify-center items-center  overflow-x-hidden'>
      <div className=' w-full  '>
        <svg className='h-[250px] object-cover md:h-auto' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="0.8" d="M0,192L48,186.7C96,181,192,171,288,154.7C384,139,480,117,576,101.3C672,85,768,75,864,85.3C960,96,1056,128,1152,133.3C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      </div>
      <div className='absolute bottom-2 md:bottom-5 flex flex-col items-center '>
          <p className='md:text-xl text-[14px] text-gray-800 dark:text-slate-300 '>jasmine13cse@gmail.com</p>
          <div className='flex md:gap-6 p-5 gap-3 md:p-10 scale-75 md:scale-100 hover:*:scale-y-110'>
            <a href='https://www.facebook.com/jasmine0kathija0banu?mibextid=ZbWKwL' target="_blank" rel="noreferrer"> <FaFacebookSquare size={30} className='hover:text-white'/></a>
            
            <a href='https://www.instagram.com/homemade_recipes_jasmine?igsh=NzVpbTd3YXhmMWht' target="_blank" rel="noreferrer"><BsInstagram size={30} className='hover:text-white' /></a>
            
            <a href='https://github.com/jasmine-kathija-banu' target="_blank" rel="noreferrer"><FaGithub size={30} className='hover:text-white' /></a>
          
            <a href='https://www.youtube.com/c/Homemaderecipesjasmine' target="_blank" rel="noreferrer"><FaYoutube size={30}  className='hover:text-white' /></a>
            
            <a href='https://www.linkedin.com/in/jasmine-kathija-banu/' target="_blank" rel="noreferrer"><FaLinkedin size={30}  className='hover:text-white' /></a>  

          </div>
          </div>

        </div>
  )
}

export default Footer
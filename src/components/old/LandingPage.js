import React from 'react';
import Typical from 'react-typical';
import { FaFacebookSquare } from 'react-icons/fa';
import { BsInstagram } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import FlotingDiv from '../divs/FlotingDiv';


const LandingPage = () => {
  return (
    <div className=' w-full h-full flex flex-col sm:flex-row lg:mt-[6rem] mt-10  pt-6 px-9' >
        <div className='w-full md:flex-1 pl-7 mx-auto'>
            <h1 className='text-[30px] md:text-[3rem] font-extrabold' >Hello, I Am </h1>
            <h1 className=' text-[30px] md:text-[3rem] font-extrabold text-sky-500'>Jasmine Kathija Banu
            <span className='px-2 text-[1rem]'>B.E(cse)</span></h1>
            <div className='text-[20px] sm:text-[2rem] font-italic'>
                <Typical
                steps={['Ethusiastic Dev 👩‍🎓', 1000, 
                'Full Stack Developer 💻', 1000,
                'PERN Stack Developer 🌐', 1000,
                'React Developer 📲', 1000]}
                loop={Infinity}
                />
            </div>
            <p className='text-xl text-gray-600 pt-4'>I Love❤️️ to learn New Things..</p>
            <div className='pt-[3rem] flex justify-around'>
                <button className='text-[18px] p-2  hover:scale-x-105  shadow-lg bg-gradient-to-r rounded-xl text-white from-sky-400 to-sky-600'>Hire me</button>
                <button className='text-[18px] p-2  hover:scale-x-105  shadow-lg bg-gradient-to-r  rounded-xl text-white from-sky-400 to-sky-600'>Get Resume</button>
            </div>
            <div className='flex pt-6 gap-4 *:text-sky-500 hover:*:scale-110 hover:*:text-pink-600 '>
                <a href=''> <FaFacebookSquare size={30}/></a>
            
                <a href=''><BsInstagram size={30} /></a>
                
                <a href=''><FaGithub size={30} /></a>
              
                <a href='https://www.youtube.com/c/Homemaderecipesjasmine'><FaYoutube size={30} /></a>
                
                <a href=''><FaLinkedin size={30} /></a>              
            </div>
        </div>
        
        <div className='flex-1'>
            <div className=' relative px-6'>
                <img src="images/blob 1.png" alt="blob blue color"  className='z-10 h-[500px] w-[850px] scale-110 absolute left-[-2.5rem] top-[-3rem] '/>
                <img src="images/blob.png" alt="blob pink color"  className='z-20 h-[450px] w-[550px] scale-125 absolute  left-[2rem] top-0 hover:scale-110 duration-300 '/>
                <img src="images/jas pass.png" alt="jasmins's pic" className=' z-30 h-[350px] object-cover rounded-3xl   scale-110 w-[250px] absolute top-0  left-[9rem] ' />
                <div className='z-40 absolute top-[-4%] left-[60%]'>
                    <FlotingDiv image="images/settings.png" text1="React" text2= "Developer" className=''/>    
                </div>
                <div className='z-50 absolute top-[18rem] left-[-15%]'>
                    <FlotingDiv image="images/laptop.png" text1="Web" text2= "Developer" className=''/> 
                </div>
                <div className='absolute top-[16rem] left-[-25%]  w-[18rem] h-[10rem] bg-pink-300 rounded-full blur-2xl'></div>
                <div className='absolute top-[-40%] left-[60%]  w-[18rem] h-[10rem] bg-pink-300 rounded-full blur-2xl'></div>
                <div className='absolute top-[18rem] left-[80%]  w-[18rem] h-[10rem] bg-sky-200 rounded-full blur-2xl'></div>
            </div>
            
            
        </div>
        
    </div>
  )
}

export default LandingPage
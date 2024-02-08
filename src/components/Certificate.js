import React from 'react';
import { motion } from "framer-motion";
// import { IoIosArrowRoundForward } from "react-icons/io";

const Certificate = () => {
  return (
    <div  className='w- full lg:w-[85%] flex mx-auto py-[85px] flex-wrap pl-2 overflow-hidden'>
        <div className='w-full md:w-1/2  mx-auto '>
            <h1 className='text-[30px] md:text-[42px] font-bold text-gray-800 dark:text-white'> Full-Stack Web Development<br />
            <span className='text-sky-500 '> PERN Stack</span></h1>
            <p className='text-gray-500 text-[16px]'>Completed "The Complete 2024 Web Development Bootcamp".<br />
            HTML, CSS,Bootstrap, Javascript, Node JS,Express.JS, React, PostgreSQL, Web3 and DApp.<br />
            Master frontend development with React.<br />
            Master backend development with Node.<br />
            did 15+ projects.<br />
            </p>
            <button className='mx-10 my-5 cursor-pointer shadow-blue-500 text-[18px] lg:text-[20px] lg:w-[200px] w-[180px] p-2  hover:scale-x-105  shadow-2xl bg-gradient-to-r rounded-full text-white from-sky-400 to-sky-600'> <a href="https://drive.google.com/file/d/1zwKjkO9_vJ6x6I_XgjBJOubLLlDn4AS1/view?usp=drive_link" target='__blank'>View Certificate</a> </button>
           

        </div>



        <div className='w-full md:w-1/2 relative flex justify-center items-center  '>
            <img src="images/blob 1.png" alt="" className='absolute z-0 lg:top-[-10%] lg:left-[45%] lg:w-[350px] left-[40%] w-[250px] top-[-20%]' />
            <img src="images/blob.png" alt="" className='absolute z-10 lg:top-[30%] lg:left-[48%] lg:w-[350px] left-[30%] w-[300px] top-[40%] rotate-45 ' />

            <motion.div
                initial={{rotate:45}}
                whileInView={{rotate:0}}
                viewport={{margin:'-40px'}}
                transition={{duration:3.5 ,type :'spring'}}
            className='*:shadow-md *:shadow-slate-600  *:bg-white  bg-slate-100 top-[2rem] lg:left-[3rem] *:absolute *:w-[6rem] *:h-[6rem] *:rounded-full w-[18rem] h-[18rem] rounded-full shadow-lg shadow-slate-600  relative  z-20'>
                <div className='top-[-3rem] left-[6rem] flex items-center justify-center'>
                    <img src="images/pern/express png.png" alt="express png" className='w-full  scale-90' />
                </div>
                <div className='top-[5.8rem] left-[-2.5rem] flex items-center justify-center'>
                    <img src="images/pern/react png.png" alt="react png"  className='w-[]  scale-75 rounded-xl'/>
                </div>
                <div className='top-[5.8rem] left-[14.5rem] flex items-center justify-center'>
                    <img src="images/pern/psql png.png" alt="psql png" className='w-[]  scale-90 rounded-full' />
                </div>
                <div className='top-[15rem] left-[6rem] flex items-center justify-center'>
                    <img src="images/pern/node png.png" alt="node png"  className='w-[]  scale-90'/>
                </div>
                <div className='top-[5.8rem] left-[6rem] flex items-center justify-center'>
                    <h1 className='font-bold '>PERN</h1>
                </div>

            </motion.div>

        </div>


    </div>
  )
}

export default Certificate
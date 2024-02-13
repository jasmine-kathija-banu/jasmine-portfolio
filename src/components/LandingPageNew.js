import React from 'react';
import Typical from 'react-typical';
import { FaFacebookSquare } from 'react-icons/fa';
import { BsInstagram } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import FlotingDiv from './divs/FlotingDiv';
import { motion, spring } from "framer-motion";

const LandingPageNew = () => {
    const transition ={duration: 2, type: spring}
  return (
    <section id='LandingPage' className='dark:bg-black'>
    <div className='container mx-auto p-2 pt-[50px] lg:pt-[4rem] min-h-[850px] lg:min-h-[80vh]'>
        <div className=' w-full  flex flex-wrap lg:p-10 dark:text-white'>
            <div className=' w-full md:w-1/2 mx-auto lg:pt-10'>
            <h1 className='text-[38px] md:text-[42px] font-extrabold' >Hello, I Am </h1>
            <h1 className=' text-[38px] md:text-[42px] font-extrabold text-sky-500'>JASMINE KATHIJA BANU
            <span className='px-2 text-[1rem]'>B.E(cse)</span></h1>
            
            <div className='text-[24px] lg:text-[32px] font-italic'>
                <Typical
                steps={['Enthusiastic Dev 👩‍🎓', 1000, 
                'Full Stack Developer 💻', 1000,
                'PERN Stack Developer 🌐', 1000,
                'React Developer 📲', 1000]}
                loop={Infinity}
                />
            </div>
            <p className='text-sm lg:text-xl text-gray-600 pt-4'>I Love❤️️ to learn New Things..</p>
            <div className='flex gap-5 lg:gap-10 py-6'>
                <button className='shadow-blue-500 text-[18px] lg:text-[22px] lg:w-[160px] w-[150px] p-2  hover:scale-x-105  shadow-2xl bg-gradient-to-r rounded-full text-white from-sky-400 to-sky-600'><a href="mailto:jasmine13cse@gmail.com">Hire me</a></button>
                <button className=' shadow-blue-500 text-[18px] lg:text-[22px] lg:w-[160px] w-[150px] p-2  hover:scale-x-105  shadow-2xl bg-gradient-to-r  rounded-full text-white from-sky-400 to-sky-600'><a href="https://drive.google.com/uc?export=download&id=1hfgpQjaMMx2m15MERAykCQvPJHzxJLbZ" target=''> Get Resume</a></button>
            </div>
            <div className='h-auto flex pt-4 lg:pt-6 gap-4 *:text-sky-500 hover:*:scale-110 hover:*:text-pink-600  '>
                <a href='https://www.facebook.com/jasmine0kathija0banu?mibextid=ZbWKwL' target="_blank" rel="noreferrer"> <FaFacebookSquare size={30}/></a>
            
                <a href='https://www.instagram.com/homemade_recipes_jasmine?igsh=NzVpbTd3YXhmMWht' target="_blank" rel="noreferrer"><BsInstagram size={30} /></a>
                
                <a href='https://github.com/jasmine-kathija-banu' target="_blank" rel="noreferrer"><FaGithub size={30} /></a>
              
                <a href='https://www.youtube.com/c/Homemaderecipesjasmine' target="_blank" rel="noreferrer"><FaYoutube size={30} /></a>
                
                <a href='https://www.linkedin.com/in/jasmine-kathija-banu/' target="_blank" rel="noreferrer"><FaLinkedin size={30} /></a>              
            </div>
            </div>




            <div className='w-full h-full md:w-1/2 lg:pl-[30px]'>
                <div className='relative'>
                    <img src="images/bg image.png" alt="blue smoke" className='z-20 absolute inset-0 w-full lg:w-[520px] h-[450px] lg:h-[450px] object-cover'/>
                    
                    <img src="images/jas pass.png" alt="jasmine img" className='z-10 absolute top-[150px] left-[27%] lg:left-[32%] w-[175px] h-[250px] object-cover rounded-b-3xl hover:sepia-0' />

                    <motion.div
                    initial={{top:'4%' , left:'40%'}} 
                    whileInView={{left:'58%'}}
                    transition={transition}
                    
                    className='z-40 absolute top-[30px] left-[45%] lg:top-[45px] lg:left-[68%] '>
                    <FlotingDiv image="images/settings.png" text1="React" text2= "Developer" className=''/>    
                    </motion.div>

                    <motion.div
                    initial={{left:'9rem' , top:'18rem'}} 
                    whileInView={{left:'0'}}
                    transition={transition}
                    
                     className='z-50 absolute top-[22rem] left-[0] lg:top-[20rem] lg:left-[-85px] overflow-hidden'>
                    <FlotingDiv image="images/laptop.png" text1="Web" text2= "Developer" className=''/> 
                    </motion.div>

                    <div className='hidden lg:block absolute top-[16rem] left-[-25%] z-0  w-[18rem] h-[10rem] bg-pink-300/85 rounded-full blur-2xl'></div>
                    <div className='hidden lg:block absolute top-[-40%] left-[60%]  z-0  w-[18rem] h-[10rem] bg-pink-300/85 rounded-full blur-2xl'></div>
                    <div className='hidden lg:block absolute top-[18rem] right-[-10%]  z-0  w-[18rem] h-[10rem] bg-sky-200 dark:bg-black rounded-full blur-2xl'></div>
                    
                </div>



            </div>

        </div>
        
    </div>
    </section>
  )
}

export default LandingPageNew
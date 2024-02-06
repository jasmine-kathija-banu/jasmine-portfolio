import React, { useState } from 'react';
import Education from './resume/Education';
import Interest from './resume/Interest' ;
import ProgrammingSkills from './resume/ProgrammingSkills';
import Projects from './resume/Projects';
import WorkHistory from './resume/WorkHistory';


import { FaGraduationCap } from "react-icons/fa"; // education 
import { HiMiniBuildingLibrary } from "react-icons/hi2"; //exp
import { FaLaptopCode,FaCode,FaHourglassStart  } from "react-icons/fa6"; //projects


const Resume = () => {
  const [viewDiv,setViewDiv] = useState("education")

  return (
    <div className=' mx-auto lg:h-full relative lg:mt-10 pt-12' id='Resume'>
       <h1 className='text-3xl py-4 text-sky-500 text-center font-bold'>Resume</h1>
    <div className='w-[90%] lg:max-w-[900px] mt-4 flex flex-wrap mx-auto rouned-xl shadow-[8px_8px_5px_-2px_rgba(30,41,59,0.6)]'>
     
        <div className='w-full md:w-1/3 flex shadow-[10px_0px_5px_-2px_rgba(30,41,59,0.6)]' >
          <div className='flex flex-col px-2 bg-sky-500 space-y-11 p-2 lg:py-[60px] pt-2 ' >
            <FaGraduationCap  size={25} />
            <HiMiniBuildingLibrary  size={25} />
            <FaCode  size={25} />
            <FaLaptopCode  size={25}/>
            <FaHourglassStart  size={25} />
          </div>
          <div className='flex flex-col  lg:py-[50px] pr-10 dark:text-white ' >
            <ul className='hover:*:bg-sky-500 *:bg-gray-600/40 *:cursor-pointer active:*:scale-105 *:rounded-r-full w-[260px] lg:w-[220px] space-y-7 lg:space-y-8 *:p-2 *:px-2 *:shadow-lg *:shadow-sky-400'>
            <li onClick={()=>setViewDiv("education")}>Education</li>
            <li onClick={()=>setViewDiv("work history")}>Work History</li>
            <li onClick={()=>setViewDiv("programming skills")}>Programming Skills</li>
            <li onClick={()=>setViewDiv("projects")}>Projects</li>
            <li onClick={()=>setViewDiv("interest")}>Interest</li>
            </ul>
          </div> 
        </div>
        <div className='w-full md:w-2/3 mt-3  py-16 px-6 relative lg:dark:brightness-90 dark:brightness-75' style={{ 
      backgroundImage: `url("images/probackpink.jpg")`, backgroundSize: "cover"}}>
          {viewDiv === "education" && <Education /> }
          {viewDiv === "work history" &&<WorkHistory />}
          {viewDiv === "programming skills" &&<ProgrammingSkills />}
          {viewDiv === "projects" &&<Projects />}
          {viewDiv === "interest" &&<Interest />}
        </div>
        
        
          
    </div>
    <div className='hidden lg:block absolute top-[26rem] left-[%]  w-[18rem] h-[10rem] bg-pink-300/85 rounded-full  blur-2xl'></div>
  </div>
  )
}

export default Resume
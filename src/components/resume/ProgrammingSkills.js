import React from 'react'

const ProgrammingSkills = () => {
  return (
    <div className='p-4 w-[full] h-[full] pl-10 flex justify-around pr-[25px]'>
    <ul className=' list-disc marker:text-sky-500  marker:text-2xl text-lg '>
    <p className='font-bold text-2lg pb-4  text-sky-500 '>Front End</p>
    <li className=''>HTML</li>
    <li className=''>CSS</li>     
    <li className=''>Java Script</li>
    <li className=''>Bootstrap</li>
    <li className=''>Tailwind CSS</li>
    <li className=''>React JS</li> </ul>
    <ul className=' list-disc marker:text-sky-500 marker:text-2xl  text-lg '>
    <p className='font-bold text-2lg  text-sky-500 pb-4  '>Back End</p>
    <li className=''>Node JS</li>
    <li className=''>Express JS</li>
    <li className=''>EJS</li>   
    <li className=''>PostgreSQL</li>     
    <li className=''>API</li> 
    <li className=''>Python</li>  
    <li className=''>Git & Github</li>  
    </ul>
  </div>
  )
}

export default ProgrammingSkills
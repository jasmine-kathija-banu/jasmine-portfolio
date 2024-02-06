import React from 'react'

const AboutMe = () => {
  return (
    <div className='py-10 relative  ' >
         <h1 className='text-3xl pt-8 text-sky-500 text-center font-bold'>About Me</h1>
        <div className='flex  lg:w-[1000px] justify-center mx-auto ' >
       
        <div className='lg:flex  sm:hidden '>
                <img src="images/jasabout.jpg" alt="jasmine's pic"  className='object-cover lg:w-[300px] lg:h-[450px]'/>
        
        </div>
        <div className='flex-1 sm:w-full  '>
            <div className='px-10 text-[16px]   lg:text-lg  pt-10 first-letter:text-sky-500 first-letter:pl-10'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius illum, exercitationem, repellendus earum iste vero consequatur eos blanditiis sit delectus dolor
                 quam vel. Earum repudiandae ipsam sint facere voluptatum eaque! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam laborum dicta ipsa
                  totam cum, fugiat molestias odio corrupti enim exercitationem quas dolorum necessitatibus. Temporibus, cupiditate perspiciatis molestias rerum illo iste?
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente quibusdam id doloremque ducimus quasi quam fugit minima magni repellat fugiat.
                 Molestiae modi placeat odit.
            </div>
            <button className='ml-[300px] mt-[20px] text-[18px] w-[150px] p-2  hover:scale-x-105  shadow-lg bg-gradient-to-r rounded-xl text-white from-sky-400 to-sky-600'>Know more</button>
            <div className='absolute top-[26rem] left-[65%]  w-[18rem] h-[10rem] bg-sky-200 rounded-full  blur-2xl'></div>
        </div>
        </div>
    </div>
  )
}

export default AboutMe
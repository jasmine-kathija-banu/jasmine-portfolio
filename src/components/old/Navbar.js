import React from 'react'

const Navbar = () => {
  return (
    <div className='container w-full font-jsans h-[10vh] flex justify-between py-4 lg:px-6 '>
      <div className='flex md:pl-[35px]'>
        <h1 className='text-black font-extrabold text-[35px]'>Jasmine</h1>
        <span></span>
      </div>
      <div className='flex-1 flex px-4 py-6 font-semibold items-center justify-center text-[20px]'>
        <div className=' px-4 pr-8'>
          <ul className='hidden lg:flex gap-8  text-gray-700   hover:*:underline hover:*:cursor-pointer'>
            <li>Home</li>
            <li>Aboutme</li>
            <li>Resume</li>
            <li>Projects</li>
          </ul>
        </div>
        <button className='hidden md:block px-2 right-6 hover:scale-x-105  shadow-lg bg-gradient-to-r p-1 rounded-xl text-white from-sky-400 to-sky-600'>Contact me</button>
      </div>
    </div>
  )
}

export default Navbar
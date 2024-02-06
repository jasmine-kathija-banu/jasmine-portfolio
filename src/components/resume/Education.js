import React from 'react'

const Education = () => {
  return (
    <div className='p-6 w-full h-[full] pl-6'>
      <ul className=' list-disc marker:text-sky-500 marker:text-2xl text-sky-500 font-bold text-[18px] lg:text-xl'>
      <li className='relative '>Bachelor of <br className='block lg:hidden' /> Engineering(CSE) <span className='absolute top-2.5 right-0 text-[14px] bg-sky-500 text-white p-1 font-normal rounded-full'>2012-2016</span></li>
        <p className='pb-[10px] lg:pb-[30px] mt-0 lg:text-[18px] text-[16px] font-normal text-gray-700'>Francis Xavier Engineering College,Tamilnadu,India</p>
      <li className='relative'>Higher Secondary <br className='block lg:hidden' /> Certificate(HSC) <span className='absolute top-2.5 right-0 text-[14px] bg-sky-500 text-white p-1 font-normal rounded-full'>2010-2012</span></li>
        <p className='pb-[10px] lg:pb-[30px] font-normal lg:text-[18px] text-[16px] text-gray-700'>Sankar Higher Secondary School,Tamilnadu,India.</p>
      <li className='relative'>Secondary School Leaving Certificate(SSLC)<span className='absolute top-2.5 right-0 text-[14px] bg-sky-500 text-white p-1 font-normal rounded-full'>2010</span></li>
        <p className='pb-[10px]  font-normal lg:text-[18px] text-[16px] text-gray-700'>Sankar Higher Secondary School,Tamilnadu,India.</p>
      </ul>
    </div>
  )
}

export default Education
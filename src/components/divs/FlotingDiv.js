import React from 'react'

const FlotingDiv = ({image,text1,text2}) => {
  return (
  
        <div className="flex lg:w-[200px] lg:h-[70px] w-[160px] h-[65px] align-middle text-white  bg-gradient-to-r from-sky-200 to-pink-300 lg:from-slate-200 lg:to-slate-200  p-2 rounded-xl">
            <img src={image} alt="icons"  className='rounded-full bg-sky-400 scale-75  m-0'/>
            <div className='text-[14px] md:[18px] text-gray-600 px-2 lg:pl-5 p-2'>
                <p>{text1}</p>
                <p>{text2}</p>
            </div>

            
        </div>
          )
}

export default FlotingDiv


// bg-gradient-to-r from-sky-200 to-pink-300 lg:from-slate-200 lg:to-slate-200
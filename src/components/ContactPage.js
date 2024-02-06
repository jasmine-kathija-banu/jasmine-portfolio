import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const ContactPage = () => {
    const [done, setdone] = useState(false)

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_ph6xhqi', 'template_l3b36zt', form.current, 'tY7uk_maa8TgPYJFm')
        .then((result) => {
            console.log(result.text);
            setdone(true)
        }, (error) => {
            console.log(error.text);
        });}


  return (
    <div id='contactme' className='w-[95%]'>
        
        <div className='flex flex-wrap py-10 ' >
            <div className='w-full md:w-1/2 justify-center items-center m-auto lg:px-[120px] relative pb-4'>

            <h1 className='lg:text-5xl text-3xl pt-4 text-gray-800  font-bold dark:text-white'>
                Get in touch 🤝 </h1><br />
                <h1 className='lg:text-5xl text-3xl pl-2 text-sky-400 text-center font-bold '>
                Contact Me...</h1>
            </div>
            <div className='w-full md:w-1/2 '>
                <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-4 w-[85%] justify-center mx-auto rounded-lg  *:rounded-lg p-10 bg-sky-500/60 shadow-lg shadow-slate-500'>
                    <input type='text' name='user_name' placeholder='Name' className='h-[40px] focus:outline-none focus:ring focus:border bg-slate-100 focus:ring-gray-400 focus:bg-slate-100 p-2 ring-2 ring-gray-200 '/>
                    <input type='email' name='user_email' placeholder='Email' className='h-[40px] focus:outline-none focus:ring bg-slate-100 focus:ring-gray-400 p-2 ring-2 ring-gray-200 ' />
                    <textarea name='message' placeholder='Message' className='h-[200px] focus:outline-none focus:ring focus:ring-gray-400 bg-slate-100 focus:bg-slate-100  p-2 ring-2 ring-gray-200  '/>
                    <input type='submit' value="Send" className='h-[40px] w-[150px] mx-auto hover:scale-x-105 cursor-pointer shadow-2xl shadow-sky-600 bg-gradient-to-r rounded-full text-white from-sky-400 to-sky-600 ring-2 ring-gray-200 '/>
                    {done && <p className='text-gray-800 outline-none ring-none mx-auto'>Thanks for contacting me!😊</p>}
                </form>


            </div>
        </div>
    </div>
  )
}

export default ContactPage
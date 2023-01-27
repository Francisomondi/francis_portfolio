import Image from 'next/image'
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import c from '../public/assets/c.jpg'

const Contacts = () => {
  return (
    <div className='w-full lg:h-screen'>
    <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
    <p className='text-xl tracking-widest uppercase text-[#5b201d9e]'>Contacts</p>
    <h2 className='py-4'>Get In Touch</h2>
        
         <div className='grid lg:grid-cols-5 gap-8'>
        {/*right*/}
        <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-800 rounded-xl p-4'>
            <div className='lg:p-4 h-full'>
                <div>
                <Image className='rounded-xl hover:scale-105 ease-in duration-300' src={c} alt='//'/>
                </div>
                <div>
                    <h2 className='py-2'>Francis Omondi</h2>
                    <p>Full Stack Developer</p>
                    <p className='py-4' >I am available for freelance or full-time positions.</p>
                </div>
                <div>
                    <p className='uppercase pt-8'>Connect With Me</p>
                    <div className='flex items-center justify-between py-4'>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
                                 <FaLinkedinIn/> 
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
                                  <FaGithub/> 
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
                                 <AiOutlineMail/> 
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
                                  <BsFillPersonLinesFill/> 
                                </div>
                    </div>
                </div>
            </div>
            
        </div>

        {/*left*/}

        </div>
    </div>

    </div>
  )
}

export default Contacts
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const Main = () => {
  return (
    <div id='main' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm -tracking-widest text-gray-600'>LETS BUILD SOMETHING TOGETHER</p>
          <h1 className='py-4 text-gray-700'>Hi, I am <span className='text-[#5b201d9e]'>Francis</span></h1>
          <h1 className='py-2 text-gray-700'>I am a Full Stack Developer</h1>
          <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
              I am a solution-driven professional excelling in highly collaborative work 
              environment, finding solutions to challenges and focused on customer 
              satisfaction. Proven experience developing consumer-focused back and 
              front-end solutions in JavaScript node Js mongoDB, express and react
              (MERN Stack)
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
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
  )
}

export default Main
import Image from 'next/image'
import React from 'react'
import Html from '../public/assets/html.png'
import css from '../public/assets/css.png'
import javascript from '../public/assets/javascript.png'
import react from '../public/assets/react.png'
import node from '../public/assets/node.png'
import tailwind from '../public/assets/tailwind.png'
import nextjs from '../public/assets/nextjs.png'
import github from '../public/assets/github.png'

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] max-auto flex flex-col justify-center h-full'>
        <h2 className='py-4'>What i can do</h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8' >
          
            <div className='py-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                    <Image src={Html} alt='/' width={64} height={64}/>
                  </div>

                  <div className='flex flex-col items-center justify-center'>
                  <h2>Html</h2>
                  </div>
                </div>
            </div>

            <div className='py-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                    <Image src={css} alt='/' width={64} height={64}/>
                  </div>

                  <div className='flex flex-col items-center justify-center'>
                  <h2>Css</h2>
                  </div>
                </div>
            </div>
            <div className='py-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                    <Image src={javascript} alt='/' width={64} height={64}/>
                  </div>

                  <div className='flex flex-col items-center justify-center'>
                  <h2>Javascript</h2>
                  </div>
                </div>
            </div>
            <div className='py-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                    <Image src={react} alt='/' width={64} height={64}/>
                  </div>

                  <div className='flex flex-col items-center justify-center'>
                  <h2>React js</h2>
                  </div>
                </div>
            </div>
            <div className='py-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                    <Image src={node} alt='/' width={64} height={64}/>
                  </div>

                  <div className='flex flex-col items-center justify-center'>
                  <h2>Node js</h2>
                  </div>
                </div>
            </div>
            <div className='py-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                    <Image src={tailwind} alt='/' width={64} height={64}/>
                  </div>

                  <div className='flex flex-col items-center justify-center'>
                  <h2>Tailwind</h2>
                  </div>
                </div>
            </div>
            <div className='py-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                    <Image src={nextjs} alt='/' width={64} height={64}/>
                  </div>

                  <div className='flex flex-col items-center justify-center'>
                  <h2>Next js</h2>
                  </div>
                </div>
            </div>
            <div className='py-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                    <Image src={github} alt='/' width={64} height={64}/>
                  </div>

                  <div className='flex flex-col items-center justify-center'>
                  <h2>Github</h2>
                  </div>
                </div>
            </div>

          </div>
        </div>
    </div>
  )
}

export default Skills
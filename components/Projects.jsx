import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import arrayDestruct from '../public/assets/portfolio/arrayDestruct.jpg'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <h2 className='py-4'>My Projects </h2>
            <div className='grid md:grid-cols-2 gap-8'>

                <div className='relative flex items-center h-auto w-full shadow-xl
                 shadow-gray-500 rounded-xl p-4 group hover:bg-gradient-to-r
                  from-[#201f1f9e] to-[#8c8787]'>

                  <Image className='rounded-xl group-hover:opacity-10' src={arrayDestruct} alt='this is the alt'/>
                  <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                        <h3 className='text-2xl text-white -tracking-wider text-center' >Property finder</h3>
                        <p className='pb-4 pt-2 text-white text-center'>React Js</p>
                        <Link href='/'>
                            <p className='text-center py-3 rounded-lg bg-white text-gray-800 font-bold text-lg cursor-pointer'>More Info</p>
                        </Link>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import arrayDestruct from '../public/assets/portfolio/arrayDestruct.jpg'
import installNode from '../public/assets/portfolio/installNode.jpg'
import reactParallax from '../public/assets/portfolio/reactParallax.jpg'
import reactSmooth from '../public/assets/portfolio/reactSmooth.jpg'
import reactWeather from '../public/assets/portfolio/reactWeather.jpg'
import navbar from '../public/assets/portfolio/navbar.jpg'

const Projects = () => {

const projects =[
  {id:1,
    src:arrayDestruct
  },
  {id:1,
    src:installNode
  },
  {id:1,
    src:reactParallax
  },
  {id:1,
    src:reactSmooth
  },
  {id:1,
    src:reactWeather
  },
  {id:1,
    src:navbar
  },
]

  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <h2 className='py-4'>My Projects </h2>
        <p className='py-4'>Below are some of the projects i have worked on</p>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8'>

            {
              projects.map(({id,src})=>(
                 <div key={id} className='relative flex items-center h-auto w-full shadow-xl
                shadow-gray-500 rounded-xl p-4 group hover:bg-gradient-to-r
                  from-[#201f1f9e] to-[#8c8787]'>

                  <Image className='rounded-xl group-hover:opacity-10' src={src} alt='this is the alt'/>
                  <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                        <h3 className='text-2xl text-white -tracking-wider text-center' >Property finder</h3>
                        <p className='pb-4 pt-2 text-white text-center'>React Js</p>
                        <Link href='/'>
                            <p className='text-center py-3 rounded-lg bg-white text-gray-800 font-bold text-lg cursor-pointer'>More Info</p>
                        </Link>
                  </div>
                </div>

              ))
            }

               
            </div>
        </div>
    </div>
  )
}

export default Projects
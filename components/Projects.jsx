import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import arrayDestruct from '../public/assets/portfolio/arrayDestruct.jpg'
import installNode from '../public/assets/portfolio/installNode.jpg'
import reactParallax from '../public/assets/portfolio/reactParallax.jpg'
import reactSmooth from '../public/assets/portfolio/reactSmooth.jpg'
import reactWeather from '../public/assets/portfolio/reactWeather.jpg'
import navbar from '../public/assets/portfolio/navbar.jpg'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

const Projects = () => {

const projects =[
  {id:1,
    src:arrayDestruct,
    title: "Property Finder",
    language: "React js"
  },
  {id:2,
    src:installNode,
    title: "Mawimbi",
    language: "Node js"
  },
  {id:3,
    src:reactParallax,
    title: "Andela Geo App",
    language: "Vanilla js"
  },
  {id:4,
    src:reactSmooth,
    title: "StoryBook Api",
    language: "Node js"
  },
  {id:5,
    src:reactWeather,
    title: "vidly Movies",
    language: "Node js"
  },
  {id:6,
    src:navbar,
    title: "sakakeja",
    language: "Laravel"
  },
]

  return (
    <div name='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <h2 className='py-4'>My Projects </h2>
        <p className='py-4'>Below are some of the projects i have worked on</p>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8'>

            {
              projects.map(({id,src,title,language})=>(
                 <div key={id} className='relative flex items-center h-auto w-full shadow-xl
                shadow-gray-500 rounded-xl p-4 group hover:bg-gradient-to-r
                  from-[#201f1f9e] to-[#8c8787]'>

                  <Image className='rounded-xl group-hover:opacity-10' src={src} alt='this is the alt'/>
                  <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                        <h3 className='text-2xl text-white -tracking-wider text-center' >{title}</h3>
                        <p className='pb-4 pt-2 text-white text-center'>{language}</p>
                       <div>
            <button className=' group w-fit px-6 py-3 my-2 flex items-center rounded-md cursor-pointer'>
            More info
              <span className='group-hover:rotate-90 duration-500 '>
              <MdOutlineKeyboardArrowRight size={25} className='ml-3'/>
              </span>
            </button>
          </div>
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
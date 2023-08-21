import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import msafiri from '../public/assets/portfolio/logo.svg'
import mawimbi from '../public/assets/portfolio/mawimbi-logo.jpg'
import vidly from '../public/assets/portfolio/vidly.jpg'
import prompto from '../public/assets/portfolio/prompt.jpg'
import geoapi from '../public/assets/portfolio/geoapp.png'
import sakakeja from '../public/assets/portfolio/sakakeja.jpeg'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

const Projects = () => {

  const projects = [
    {
      id: 1,
      src: msafiri,
      title: "Msafiri carHub",
      language: "Next Js",
      href: "https://car-showcase-rimp.vercel.app/"
    },
    {
      id: 2,
      src: mawimbi,
      title: "Mawimbi",
      language: "Node js",
      href: "https://github.com/Francisomondi/mawimbi_reservation_code"
    },
    {
      id: 3,

      src: geoapi,
      title: "Andela Geo App",
      language: "Vanilla js",
      href: "https://github.com/Francisomondi/AndelaGeo-search"
    },
    {
      id: 4,
      src: prompto,
      title: "ChatGPT prompt Generator",
      language: "Node js",
      href: "https://github.com/Francisomondi/Promtopia"
    },
    {
      id: 5,
      src: vidly,
      title: "vidly Movies",
      language: "Node js",
      href: "https://github.com/Francisomondi/VidlyMovieApi"
    },
    {
      id: 6,
      src: sakakeja,
      title: "sakakeja",
      language: "Laravel",
      href: "https://github.com/Francisomondi/Sakakeja"
    },
  ]

  return (
    <div name='Projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <h2 className='py-4'>My Projects </h2>
        <p className='py-4'>Below are some of the projects i have worked on</p>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8'>

          {
            projects.map(({ id, src, title, language, href }) => (
              <div key={id} className='relative flex items-center h-auto w-full shadow-xl
                shadow-gray-500 rounded-xl p-4 group hover:bg-gradient-to-r
                  from-[#201f1f9e] to-[#8c8787]'>

                <Image className='rounded-xl group-hover:opacity-4.5' src={src} alt='this is the alt' />
                <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                  <h3 className='text-2xl text-white -tracking-wider text-center' >{title}</h3>
                  <p className='pb-4 pt-2 text-white text-center'>{language}</p>
                  <div>

                    <Link key={id} href={href} target="_blank">
                      <button className=' group w-fit px-6 py-3 my-2 flex items-center rounded-md cursor-pointer'>
                        More info
                        <span className='group-hover:rotate-90 duration-500 '>
                          <MdOutlineKeyboardArrowRight size={25} className='ml-3' />
                        </span>
                      </button>
                    </Link>

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
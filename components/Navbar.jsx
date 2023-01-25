import Link from 'next/link'
import React from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
const Navbar = () => {
    return (
        <div className='fixed w-full h-20 shadow-xl z-[100]'>
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                <h1 className='text-4xl font-bold font-signature'>Francis Omondi</h1>
                <div>
                    <ul className='hidden md:flex'>
                    <Link href='www.facebook.com'>
                    <li className='ml-10 text-sm uppercase hover: border-b'>Home</li>
                    </Link>
                    <Link href='www.facebook.com'>
                    <li className='ml-10 text-sm uppercase hover: border-b'>About</li>
                    </Link>
                    <Link href='www.facebook.com'>
                    <li className='ml-10 text-sm uppercase hover: border-b'>Skills</li>
                    </Link>
                    <Link href='www.facebook.com'>
                    <li className='ml-10 text-sm uppercase hover: border-b'>Projects</li>
                    </Link>
                    <Link href='www.facebook.com'>
                    <li className='ml-10 text-sm uppercase hover: border-b'>Contacts</li>
                    </Link>
                    </ul>
                    <div className='md:hidden'>
                       <AiOutlineMenu size={30}/>
                    </div>
                </div>
            </div>

            <div className='fixed left-0 top-0 w-full h-screen bg-black/70'>
                <div className='fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen 
                bg-[#ecf0f3] p-10 ease-in duration-500'>
                    <div>
                        <div className='flex w-full items-center justify-between'>
                            <h1 className='text-4xl font-bold font-signature'>Francis Omondi</h1>
                            <div>
                                <AiOutlineClose/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
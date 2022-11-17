import React from 'react'
import Link from "next/link";
import Image from "next/image"
import {AiOutlineMenu} from "react-icons/ai";


const Navbar = () => {
    return (
        <div className='fixed w-full h-20 shadow-xl z-[100]'>
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                <Image src='/../public/Kitty.png' alt='/' width='50' height='50'/>
                <div>
                    <ul className='hidden md:flex'>
                        <Link href='/'>
                            <li className='ml-10 text-sm uppercase px-3 hover:border-b'>Home</li>
                        </Link>
                        <Link href='/'>
                            <li className='ml-10 text-sm uppercase px-3 hover:border-b'>About</li>
                        </Link>
                        <Link href='/'>
                            <li className='ml-10 text-sm uppercase px-3 hover:border-b'>Projects</li>
                        </Link>
                        <Link href='/'>
                            <li className='ml-10 text-sm uppercase px-3 hover:border-b'>Contact</li>
                        </Link>
                    </ul>
                    <div className='md:hidden'>
                        <AiOutlineMenu size={25}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
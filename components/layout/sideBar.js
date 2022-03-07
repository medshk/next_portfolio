import React from 'react';
import Image from 'next/image';
import logo from '../../public/logo.jpg'
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn , FaFacebookF} from "react-icons/fa"

const SideBar = ({ toggleMenuBar }) => {
    return (
        <div className={`${toggleMenuBar ? "scale-100" : "scale-0"} bg-[#181818] w-full fixed top-0 left-0 lg:w-36 min-h-full lg:scale-100 z-[5] transition ease-out duration-200 `}>   
           <Link href="/#home">
                <a className="logo inline-block bg-black text-center w-full">
                        <Image src={logo} className="w-full cursor-pointer"/>
                </a>
           </Link>
            <nav className='flex flex-col items-center  text-lg text-gray-400 group'>
                <Link href="/#about" ><a className="border-b border-gray-700 text-center w-full leading-20 py-3 hover:text-primary transition">About</a></Link>
                <Link href="/#skills" ><a className="border-b border-gray-700  text-center w-full leading-20 py-3 hover:text-primary transition">My Skills</a></Link>
                <Link href="/#work" ><a className="border-b border-gray-700  text-center w-full leading-20 py-3 hover:text-primary transition">Work</a></Link>
                <Link href="/#contact" ><a className="border-b border-gray-700  text-center w-full leading-20 py-3 hover:text-primary transition">Contact</a></Link>
            </nav>
            {/* social media */}
            <ul className='flex p-4 justify-center gap-3 text-gray-400 m-auto'>
                <Link href="https://github.com/medshk" ><a><AiFillGithub className='w-5 h-5 hover:text-primary transition'/></a></Link>
                <Link href="" ><a><FaLinkedinIn className='w-5 h-5 hover:text-primary transition'/></a></Link>
                <Link href="" ><a><FaFacebookF className='w-5 h-5 hover:text-primary transition'/></a></Link>
            </ul>
        </div>
    );  
}

export default SideBar ;

import React from 'react';
import Image from 'next/image';
import logo from '../../public/logo.jpg'
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn , FaFacebookF} from "react-icons/fa"

const SideBar = ({ toggleMenuBar }) => {
    return (
        <div className={`${toggleMenuBar ? "scale-100" : "scale-0"} bg-[#181818] w-full fixed top-0 left-0 lg:w-36 min-h-full lg:scale-100 z-[5] transition ease-out duration-200 `}>   
            <a href="/"className="logo h-fit bg-black text-center">
                <Image src={logo} className="w-full cursor-pointer"/>
            </a>
            <nav className='flex flex-col items-center  text-lg text-gray-400 group'>
                <a className="border-b border-gray-700 text-center w-full leading-20 py-3 hover:text-primary transition">About</a>
                <a className="border-b border-gray-700  text-center w-full leading-20 py-3 hover:text-primary transition">My Skills</a>
                <a className="border-b border-gray-700  text-center w-full leading-20 py-3 hover:text-primary transition">Work</a>
                <a className="border-b border-gray-700  text-center w-full leading-20 py-3 hover:text-primary transition">Contact</a>
            </nav>
            {/* social media */}
            <ul className='flex p-4 justify-center gap-3 text-gray-400 m-auto'>
                <a href="" ><AiFillGithub className='w-5 h-5 hover:text-primary transition'/></a>
                <a href=""><FaLinkedinIn className='w-5 h-5 hover:text-primary transition'/></a>
                <a href=""><FaFacebookF className='w-5 h-5 hover:text-primary transition'/></a>
            </ul>
        </div>
    );  
}

export default SideBar ;

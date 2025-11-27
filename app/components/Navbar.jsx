import React, {useRef} from 'react'
import { Bars3Icon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { EnvelopeIcon } from "@heroicons/react/24/outline";


const Navbar = () =>{

    const sideMenu = useRef();

    const openMenu = ()=>{
        sideMenu.current.style.transform = 'translateX(-16rem)'
    }
    const closeMenu =()=>{
        sideMenu.current.style.transform='translateX(16rem)'
    }

    return(
        <>
        {/*<nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50">*/}
            <nav
                className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50
                bg-white/20 backdrop-blur-lg shadow-lg border-b border-white/30 dark:bg-black/20 dark:border-white/10">


            <a href="#top" className='text-5xl'>Saditha</a>

            <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm  bg-opacity-50">
                <li><a href="#top">Home</a></li>
                <li><a href="#about">About Me</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div>

                <a href="#contact"  className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500
                rounded-full ml-4">
                    Contact Me
                    <EnvelopeIcon className="w-6 h-6 text-black-800" />
                </a>

                <button className='block md:hidden lg:hidden ml-3' onClick={openMenu}>
                    <Bars3Icon className="w-6 h-6" />
                </button>

            </div>

        {/*    Mobile menu*/}

            <ul ref={sideMenu} className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64
            top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500">

                <div onClick={closeMenu}>
                    <XMarkIcon className="absolute right-6 top-6 w-6 h-6" />
                </div>

                <li><a href="top" onClick={closeMenu}>Home</a></li>
                <li><a href="top" onClick={closeMenu}>About Me</a></li>
                <li><a href="top" onClick={closeMenu}>Certificates</a></li>
            </ul>

        </nav>
        </>
    )
}


export default Navbar
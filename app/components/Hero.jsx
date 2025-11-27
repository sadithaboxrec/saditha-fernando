import React from "react";
import mypic from "../../assets/saditha.jpg";
import Image from "next/image";
import {EnvelopeIcon,ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import {FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa";

const Hero = ()=>{

    return(
        <>
            <div className="w-11/12 max-w-3xl mt-7 text-center mx-auto h-[80vh] flex flex-col items-center justify-center gap-4">

                <div>
                    <Image src={mypic} className='rounded-full w-32'/>
                </div>

                <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3'>
                    Hello! I am Saditha Fernando
                </h3>

                <h1 className='text-3xl sm:text-6xl lg:text-[66px]'>
                    I am MIS Undergraduate
                </h1>

                <p className='max-w-2xl mx-auto'>
                    I’m a second-year undergraduate at NSBM Green University,
                    passionate about project management and actively learning Python development.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                    <a href='contact' className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2' >
                        Contact Me
                        <EnvelopeIcon className="w-6 h-6 text-black-800" />
                    </a>
                    <a href='/mycv.pdf' download className='px-10 py-3 border rounded-full bg-black text-white border-gray-500 flex items-center gap-2'>
                        My CV
                        <ArrowDownTrayIcon className="w-6 h-6 text-white" />
                    </a>
                </div>

                <div>
                    <ul className='flex items-center gap-10 justify-center  sm:mt-0'>
                        <li><a target='_blank' href='https://github.com/sadithaboxrec'>
                            <FaGithub className="text-5xl" />
                            </a>
                        </li>

                        <li><a target='_blank' href='https://www.instagram.com/alexandertg2002/'>
                            <FaLinkedin className="text-5xl" />
                             </a>
                        </li>

                        <li><a target='_blank' href='https://www.instagram.com/alexandertg2002/'>
                            <FaInstagram className="text-5xl" />
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
        </>
    )

}

export default Hero
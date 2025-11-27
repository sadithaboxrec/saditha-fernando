import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";


const Footer = () =>{
    return(
        <>
            <div className='border-t border-gray-400 mx-[10%] mt-6 py-6'>

                <div>
                    <h2 className='text-center text-5xl'>Saditha Fernado</h2>
                </div>

            </div>

            <div className='text-center sm:flex items-center justify-between  mx-[10%]  py-6'>
                <p>@ 2025 Saditha Fernando. All Right Reserved</p>

                <ul className='flex items-center gap-10 justify-center  sm:mt-0'>

                    <li><a target='_blank' href='https://github.com/sadithaboxrec'>
                        <FaGithub className="text-5xl" />
                        Github</a></li>

                    <li><a target='_blank' href='www.linkedin.com/in/sadithafernando'>
                        <FaLinkedin className="text-5xl" />
                        Linked In</a></li>

                    <li><a target='_blank' href='https://www.instagram.com/alexandertg2002/'>
                        <FaInstagram className="text-5xl" />
                        Instagram</a></li>
                </ul>
            </div>
        </>
    )
}

export default Footer
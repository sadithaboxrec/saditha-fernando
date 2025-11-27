import React from "react";
import mypic from "../../assets/sadithastand.jpg";
import {skillinfo} from "@/assets/data/data.js";
import Image from "next/image";

const About =() =>{

    return(
        <div id='about' className='w-full px-[12%]  scroll-mt-20'>

            <h4 className='text-center mb-2 text-lg'>want to know</h4>
            <h2 className='text-center text-5xl '>About Me?</h2>


            <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20 px-32">

            <div>
                    <Image src={mypic} alt={"mypic"} className='w-64 sm:w-80 rounded-3xl max-w-none'></Image>
                </div>

                <div className='flex-1'>
                    <p className='mb-10 max-w-2xl text-xl'>
                        I’m a second-year undergraduate at NSBM Green University who loves building things and managing projects.
                        I’ve always enjoyed organizing ideas, planning tasks, and keeping teams on track, which naturally led me into project management.

                        Now I’m pushing myself into the technical side too — learning Python, writing small programs,
                        and figuring out how things work under the hood. I'm excited to grow in both areas and eventually blend project management with development in my future career.
                    </p>

                    <h2 className="text-center font-bold text-3xl md:text-2xl lg:text-3xl mb-6">My Current Technical Focus</h2>

                    <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                        {skillinfo.map(({icon:Icon,title,description},index)=>(

                            <li className='border-[0.5px] border-gray-400 rounded-xl p-6 hover:-translate-y-1 duration-500' key={index}>
                                <Icon className="w-7 h-7 text-gray-700 mt-3 " />
                                <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                                <p className='text-gray-600 text-sm'>{description}</p>
                            </li>
                        ))}
                    </ul>

                </div>

            </div>

        </div>
    )

}

export default About
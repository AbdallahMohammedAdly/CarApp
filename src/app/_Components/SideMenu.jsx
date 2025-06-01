"use client"
import React from 'react'
import { IoClose } from "react-icons/io5";
import { MdLanguage } from "react-icons/md";

const SideMenu = ({isOpen , onClose}) => {
  
  return (
    <>
    <div className={`${isOpen ? 'block' : 'hidden'} fixed top-0 left-0 w-full h-screen z-20 duration-300 transition-all`}>
          <div className='bg-gray-800 text-white w-75 h-screen fixed left-0 top-0 z-10'>

    <div className='flex justify-between items-center mb-5 p-3 mt-2'>
        <button className='border border-white p-1'>
            sell now
        </button>
        <button onClick={onClose} className='text-white hover:text-red-500 duration-300'>
            <IoClose className='text-2xl'  />
        </button>
    </div>
   <div className='flex justify-between items-center mb-5 py-3 px-3 bg-sky-300 w-full'>
        <button className='flex justify-center items-center gap-2 '>
         <MdLanguage className='text-black' />  language
        </button>
        <button className='outline-1 outline-teal-700 p-2 hover:bg-teal-500 hover:outline-none rounded-xl hover:text-black duration-300'>
           Login / Register
        </button>
    </div>


   </div>
   <div className='bg-gray-800 text-white w-full h-screen fixed right-0 top-0 z-0 opacity-50' >
   </div>
    </div>
    </>
  )
}

export default SideMenu
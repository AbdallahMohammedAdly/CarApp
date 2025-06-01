"use client"
import React from 'react'
import { IoMdMenu } from "react-icons/io";
import { useState } from 'react';
import SideMenu from './SideMenu';

const Navbar = () => {
     const [isSidebarOpen, setIsSidebarOpen] = useState(false);


     const handleOpenSidebar = () => {
        setIsSidebarOpen(prev => !prev);
     }

  return (
  <>
    <nav className='bg-gray-800 text-white p-5 '>

        <div className="px-20 flex justify-between m-auto">
            <div>
                <button onClick={()=> handleOpenSidebar()} className='text-white '>
                    <IoMdMenu className='text-3xl' />
                </button>
            </div>
         
            <div className="logo">
                <a href="/">My Website</a>
            </div>
        </div>
    </nav>
    <SideMenu isOpen={isSidebarOpen} onClose={handleOpenSidebar} />
  </>

  )
}

export default Navbar
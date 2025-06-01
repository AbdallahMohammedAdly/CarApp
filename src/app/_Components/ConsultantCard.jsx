import React from 'react'
import { IoIosStarHalf } from "react-icons/io";
import { IoIosStar } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";

const ConsultantCard = () => {
  return (
    <div className='container mx-auto bg-black text-white'>
        <div className='flex justify-around items-center p-5 text-center'>
            <div className='card m-2 p-3'>
                <h3 className='p-2 my-1'>Consultant : Abdullah </h3>
                <p className='p-2 my-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>

            
    
                <div className='flex items-center gap-2 justify-center'>
                    <IoIosStarHalf className='text-yellow-500' />
                    <span>4.5</span>
                </div>
                <span className='text-gray-300'> Contact with me  at </span>
                <div className='consultant-info
                p-2 my-1'>
                    <p className='text-gray-300 flex gap-1.5 items-center'><FaPhone  className='text-green-500'/> 01145676722</p>
                    <p className='text-gray-300 flex gap-1.5 items-center'><FaWhatsapp  className='text-green-500'/> 01145676722</p>

                    <p className='text-gray-300 flex gap-1.5 items-center'><CiLocationOn  className='text-green-500'/> 123 Main St, City</p>
                </div>  
                
            </div>
              <div className='card m-2 p-3'>
                <h3 className='p-2 my-1'>Consultant : Abdullah </h3>
                <p className='p-2 my-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>

            
    
                <div className='flex items-center gap-2 justify-center'>
                    <IoIosStarHalf className='text-yellow-500' />
                    <span>4.5</span>
                    
                </div>
<span className='text-gray-300'> Contact with me  at </span>
                <div className='consultant-info
                p-2 my-1'>
                    <p className='text-gray-300 flex gap-1.5 items-center'><FaPhone  className='text-green-500'/> 01145676722</p>
                    <p className='text-gray-300 flex gap-1.5 items-center'><FaWhatsapp  className='text-green-500'/> 01145676722</p>

                    <p className='text-gray-300 flex gap-1.5 items-center'><CiLocationOn  className='text-green-500'/> 123 Main St, City</p>
                </div>  
                
            </div>
              <div className='card m-2 p-3'>
                <h3 className='p-2 my-1'>Consultant : Abdullah </h3>
                <p className='p-2 my-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>

            
    
                <div className='flex items-center gap-2 justify-center'>
                    <IoIosStarHalf className='text-yellow-500' />
                    <span>4.5</span>
                </div>
<span className='text-gray-300'> Contact with me  at </span>
                <div className='consultant-info
                p-2 my-1'>
                    <p className='text-gray-300 flex gap-1.5 items-center'><FaPhone  className='text-green-500'/> 01145676722</p>
                    <p className='text-gray-300 flex gap-1.5 items-center'><FaWhatsapp  className='text-green-500'/> 01145676722</p>
                    <p className='text-gray-300 flex gap-1.5 items-center'><CiLocationOn  className='text-green-500'/> 123 Main St, City</p>
                </div>  
                
            </div>
        </div>

    </div>
  )
}

export default ConsultantCard
import React from 'react'
import { CiSearch } from "react-icons/ci";
import { FcDocument } from "react-icons/fc";
import { FaCar } from "react-icons/fa";
<FaCar />
const Fiilter = () => {
  return (
    <div>
        <div className="m-auto w-[60%] p-3 shadow-2xl rounded-lg bg-white mt-5">
            <div className='relative shadow-2xl rounded-lg'>
                <input type="search" name="" placeholder='Search...' id=""  className='border p-2 border-cyan-500 w-full' />
                <CiSearch className='absolute top-[10px] right-[10px] text-xl text-cyan-500' />
            </div>
    
            <div className='flex gap-2 justify-around items-center text-center  mt-5  '>
                <div className="card border border-gray-50 py-2 shadow-2xl w-full ">
                 <FcDocument className='self-center w-full' /> 
                    <h5 className='my-2'>تمويل السيارات</h5>
                    <p>خيارات تمويل متعددة</p>
                </div>
                    <div className="card border border-gray-50 py-2 shadow-2xl w-full ">
                 <FcDocument className='self-center w-full' /> 
                    <h5 className='my-2'>تمويل السيارات</h5>
                    <p>خيارات تمويل متعددة</p>
                </div>   <div className="card border border-gray-50 py-2 shadow-2xl w-full ">
                 <FcDocument className='self-center w-full' /> 
                    <h5 className='my-2'>تمويل السيارات</h5>
                    <p>خيارات تمويل متعددة</p>
                </div>   <div className="card border border-gray-50 py-2 shadow-2xl w-full ">
                 <FcDocument className='self-center w-full' /> 
                    <h5 className='my-2'>تمويل السيارات</h5>
                    <p>خيارات تمويل متعددة</p>
                </div>
            </div>
            <div className='m-5'>
                <h4 className='text-blue-600'> browse Brands </h4>
            </div>
            <div className='brands flex justify-around'>
                <div className='brand flex flex-col justify-center items-center gap-2'>
                    <div className='bg-gray-50 p-2.5'>
                        <FaCar className='text-2xl text-blue-600' />
                    </div>
                    <p>BMW</p>
                </div>
                 <div className='brand flex flex-col justify-center items-center gap-2'>
                    <div className='bg-gray-50 p-2.5'>
                        <FaCar className='text-2xl text-blue-600' />
                    </div>
                    <p>BMW</p>
                </div>

                 <div className='brand flex flex-col justify-center items-center gap-2'>
                    <div className='bg-gray-50 p-2.5'>
                        <FaCar className='text-2xl text-blue-600' />
                    </div>
                    <p>BMW</p>
                </div>
                 <div className='brand flex flex-col justify-center items-center gap-2'>
                    <div className='bg-gray-50 p-2.5'>
                        <FaCar className='text-2xl text-blue-600' />
                    </div>
                    <p>BMW</p>
                </div>  
                   <div className='brand flex flex-col justify-center items-center gap-2'>
                    <div className='bg-gray-50 p-2.5'>
                        <FaCar className='text-2xl text-blue-600' />
                    </div>
                    <p>BMW</p>
                </div>
                 <div className='brand flex flex-col justify-center items-center gap-2'>
                    <div className='bg-gray-50 p-2.5'>
                        <FaCar className='text-2xl text-blue-600' />
                    </div>
                    <p>BMW</p>
                </div>  
            </div>
        </div>
    </div>
  )
}

export default Fiilter
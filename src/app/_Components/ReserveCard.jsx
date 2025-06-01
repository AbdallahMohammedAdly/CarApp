import React from 'react'
import { FaGripfire } from "react-icons/fa6";
import { MdOutlineVerified } from "react-icons/md"; 
import { CiHeart } from "react-icons/ci";
import { IoShareSocial } from "react-icons/io5";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
const ReserveCard = () => {
  return (
    <div className='container mx-auto mt-5 p-5 rounded-sm'>
        <div className='flex justify-between items-center '>
            <div className='w-1/2'> 
                <h3 className='p-2 '> Toyota  </h3>
                <p className='p-2 '> car description </p>
                <div className='p-2 '>
                    <span> أقل من  50,000 كم في السنة </span>
                </div>
                <div>
                    <div className='p-2 flex gap-2 '>
                        <span className=' flex gap-2  justify-center items-center rounded-sm px-3 bg-gray-400 text-white '>used</span>
                        <span className=' flex gap-2  justify-center items-center rounded-sm px-3 bg-gray-400 text-white '> 28.487 km</span>
                        <span className=' flex gap-2  justify-center items-center rounded-sm px-3 bg-green-400 text-white'>
                            4,000
                            <FaGripfire /> 

                        </span>
                    </div>
                    <div className='p-2 flex flex-col gap-2'> 
                        <span>سعر الكاش</span>
                        <span className='p-2 text-green-500'>64,000</span>
                        <span className='p-2 text-gray-50 line-through'>68,000</span>
                    </div>
                    <span className='p-2 text-gray-50 flex gap-2 items-center'>
                        <p>The price includes added tax</p>
                        <i><MdOutlineVerified /></i>
                    </span>
                </div>
                <div className='p-2 flex gap-2 flex-col '>
                    <button className='p-2 bg-green-500 text-white py-3 px-5 rounded-sm'>Reserve now</button>
                    <button className='p-2 border border-green-500  text-green-500 py-3 px-5 rounded-sm'>Contact us for Reserve</button>
                </div>
                <div>
                    <div className='p-2 flex gap-3 items-center '>
                        <CiHeart />
                        <span>add to favorite  </span>
                    </div>
                    <div className='p-2 flex gap-3 items-center '>
                      <IoShareSocial />
                        <span> share with </span>
                    </div>
                </div>
                <div>
                    <p>
                        call us at <span>1234</span>
                    </p>
                    <p className='text-gray-50'> remmember ad </p>
                </div>
                  </div>
            <div>
                
                <div className='relative overflow-hidden '> 
                    <img src="/1747655287-945.webp" alt="" className=' w-fit rounded-sm' />
                    <div className='absolute top-0  right-0 bg-black/50 flex justify-center items-center text-white text-2xl m-2'>
                        <CiHeart />
                    </div>
                    <div className='navgations absolute left-0 right-0 top-0 bottom-0 flex justify-between items-center '>
                        <span><FaChevronLeft /></span>
                        <span><FaChevronRight /></span>
                    </div>
                        <span className='absolute left-0 bottom-0 right-0 flex justify-center gap-2 -translate-y-full m-2'> 22 / 1 </span>
                    <div>
                        <span></span>
                        <span>see more</span>
                    </div>
                </div>

                    <div>
                        verification
                    </div>
                    <div>
                        <div>card</div>

                        <p> see more</p>
                    </div>
                    <div>
                        <span></span>
                        <span></span>
                    </div>

                    <h3>has nav </h3>

                    <div> car information
                        <div></div>
                        <div></div>
                    </div>
                    
                 </div>
        </div>
    </div>
  )
}

export default ReserveCard
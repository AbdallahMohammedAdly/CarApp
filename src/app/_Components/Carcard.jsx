import React from "react";
import { MdOutlineVerified } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";
import { LuKeySquare } from "react-icons/lu";
const Carcard = () => {
  return (
    <div>
      <div className="container mx-auto mt-5 ">
        <div className="flex gap-5 ">
          <div className="card shadow-lg rounded-xl overflow-hidden">
            <div className="card-header">
              <div className="relative">
                <a href="" className="">
                  <img
                    src="/1745849978-264.webp"
                    alt="Car Image"
                    className="w-full h-full object-cover"
                  />
                </a>
                <div className="absolute top-0 right-0 left-0 flex justify-between items-center p-2">
                  <span className="bg-amber-600 px-[10px] text-sm rounded-2xl">
                    <p> 20 % offer</p>
                  </span>

                  <span className="bg-gray-500 text-white p-1 text-xl rounded-full">
                    <IoMdHeartEmpty />
                  </span>
                </div>

                <div className="absolute bottom-0  right-0">
                  <span className="bg-red-600 px-[10px] text-sm rounded-2xl flex text-white">
                    <p> Offer - 4,000</p>
                  </span>
                </div>
              </div>
            </div>

            <div className="card-body">
              <div>
                <h4 className="my-2">toyota corolla </h4>
              </div>
              <p className="">Tax included</p>

              <div className="price my-2">
                <span className="text-green-400"> 64,0000</span>
                <p className="text-gray-400 line-through text-sm"> 64,0000</p>
              </div>
              <div className="flex my-2">
                <span className="flex gap-2 items-center text-gray-500 rounded-2xl px-2">
                  <p className="text-gray-500 text-sm"> used </p>
                  <LuKeySquare />
                </span>
                <span className="flex gap-2 items-center text-gray-500 rounded-2xl px-2">
                  <p className="text-gray-500 text-sm"> used </p>
                  <LuKeySquare />
                </span>
                <span className="flex gap-2 items-center text-gray-500 rounded-2xl px-2">
                  <p className="text-gray-500 text-sm"> used </p>
                  <LuKeySquare />
                </span>
              </div>
            </div>

            <div className="card-footer border-t">
              <span className="bg-cyan-200 flex gap-2 justify-center items-center ">
                {" "}
                <MdOutlineVerified className="text-emerald-600" /> quality
                verified{" "}
              </span>
            </div>
          </div>
           <div className="card shadow-lg rounded-xl overflow-hidden">
            <div className="card-header">
              <div className=" relative">
                <a href="" className="">
                  <img
                    src="/1745849978-264.webp"
                    alt="Car Image"
                    className="w-full h-full object-cover"
                  />
                </a>
                <div className="absolute top-0 right-0 left-0 flex justify-between items-center p-2">
                  <span className="bg-amber-600 px-[10px] text-sm rounded-2xl">
                    <p> 20 % offer</p>
                  </span>

                  <span className="bg-gray-500 text-white p-1 text-xl rounded-full">
                    <IoMdHeartEmpty />
                  </span>
                </div>

                <div className="absolute bottom-0  right-0">
                  <span className="bg-red-600 px-[10px] text-sm rounded-2xl flex text-white">
                    <p> Offer - 4,000</p>
                  </span>
                </div>
              </div>
            </div>

            <div className="card-body">
              <div>
                <h4 className="my-2">toyota corolla </h4>
              </div>
              <p className="">Tax included</p>

              <div className="price my-2">
                <span className="text-green-400"> 64,0000</span>
                <p className="text-gray-400 line-through text-sm"> 64,0000</p>
              </div>
              <div className="flex my-2">
                <span className="flex gap-2 items-center text-gray-500 rounded-2xl px-2">
                  <p className="text-gray-500 text-sm"> used </p>
                  <LuKeySquare />
                </span>
                <span className="flex gap-2 items-center text-gray-500 rounded-2xl px-2">
                  <p className="text-gray-500 text-sm"> used </p>
                  <LuKeySquare />
                </span>
                <span className="flex gap-2 items-center text-gray-500 rounded-2xl px-2">
                  <p className="text-gray-500 text-sm"> used </p>
                  <LuKeySquare />
                </span>
              </div>
            </div>

            <div className="card-footer border-t">
              <span className="bg-cyan-200 flex gap-2 justify-center items-center ">
                {" "}
                <MdOutlineVerified className="text-emerald-600" /> quality
                verified{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carcard;

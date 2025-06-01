'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";
import img from 'next/image'
const Hero = () => {
     const images = [
    "/public/1745849978-264.webp",
    "/public/1747554914-69.webp",
    "/public/1747573408-800.webp",
    "/public/1747655287-945.webp",
  ];
   const [currentSlide, setCurrentSlide] = useState(0);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === images.length - 1 ? 0 : prevSlide + 1
    );
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="overflow-hidden">
      <div className="relative">
        <div className="relative w-full  mx-auto">
          <div className="overflow-hidden rounded-lg shadow-lg">
            <div      className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}            >

              {images.map((image, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-auto object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={goToPrevSlide}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 z-10"
          >
            &#8249;
          </button>
          <button
            onClick={goToNextSlide}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 z-10"
          >
            &#8250;
          </button>

          <div className="absolute bottom-[50px] left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentSlide ? "bg-white" : "bg-gray-500"
                } focus:outline-none focus:ring-2 focus:ring-white`}
              ></button>
            ))}
          </div>
        </div>

      
      </div>
    </div>
  );
}

export default Hero

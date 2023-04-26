import React from "react";
import "./index.css";

const CarouselElement = () => {
    return (
        <div className="carouselElement w-full h-full no-repeat bg-cover bg-center flex flex-col justify-center items-center">
            <div className="icon rounded-full p-4 bg-white mb-8">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-caret-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="#000" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M18 15l-6 -6l-6 6h12" transform="rotate(90 12 12)" />
                </svg>
            </div>
            <h1 className="text-xl sm:text-2xl md:text-6xl font-bolder carousel-1-header text-white"> INTERIOR DESIGNER </h1>
            <p className="text-lg italic text-white text-center"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat numquam molestiae asperiores libero magnam! Omnis aliquid dolorum </p>
        </div>
    )
}

export default CarouselElement;
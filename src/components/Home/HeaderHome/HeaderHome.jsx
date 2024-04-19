// src/App.js
import React from "react";
import HeaderHomeSvg from "../../../assets/HeaderHomeSvg.svg"


const HeaderHome = () => {
    return (
        <div className="grid xl:grid-cols-2 h-screen">
            <div className="bg-four flex flex-col justify-center items-start xl:ml-16 xl:p-8 p-5 order-2 xl:order-1">
                <h2 className="text-second text-4xl md:text-7xl font-bold ">
                    Get help anytime, anywhere!
                </h2>
                <p className="text-five pt-5 xl:pt-20 pb-16 lg:pr-10 md:w-full text-md md:text-2xl">
                    Lorem ipsum mi proin aliquam ut diam ad elit, adipiscing amet sem interdum vehicula imperdiet.
                </p>
                <button className="bg-primary border-1 border-primary xl:text-xl text-four px-10 xl:px-16 py-3 rounded-2xl font-bold duration-200 hover:scale-105">
                    <a href="/" target="_blank" rel="noopener noreferrer">
                        Get Help Now
                    </a>
                </button>
            </div>
            <div className="bg-secondvariant xl:p-20 xl:pt-0 pt-20 p-5 flex justify-center items-center order-1 xl:order-2">
                <img
                    src={HeaderHomeSvg}
                    alt="MyProfile"
                    className="rounded-lg object-cover"
                />
            </div>
        </div>
    );
  };
  
  export default HeaderHome;
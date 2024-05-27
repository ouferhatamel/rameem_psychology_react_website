// src/App.js
import React from "react";
import Table from "../../Table/Table";
import { CostData } from "../../Data/Data"; 


const AboutUs = () => {
    return (
      <div className=" mx-auto  flex flex-col  w-full h-full  px-20 py-20 ">
        
      <p className=" py-5 font-bold text-xl">
            Cost
        </p>

      <div className="py-8 w-full shadow-gray rounded-[2rem] shadow-lg ">
        <div className="flex xl:flex-row flex-cols  items-center justify-center ">
      <Table dataItem={CostData}/>
        </div> 
      </div>

</div>

    );
  };
  
  export default AboutUs;
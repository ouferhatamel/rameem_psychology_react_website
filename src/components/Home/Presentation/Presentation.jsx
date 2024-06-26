// src/App.js
import React from "react";
import { presentationData } from "../../Data/Data";
import rameemLogo from "../../../assets/rameem-logo.svg";

const Presentation = () => {
  return (
    <div className="h-full flex flex-col items-center justify-start">
      <h2 className=" text-2xl md:text-4xl font-bold md:py-14 pt-14 ">Who are we ?</h2>
      <div className="flex flex-col xl:flex-row ">
        <div className="xl:p-20 xl:pt-0 pt-20 p-5 flex justify-center items-center ">
          <img src={rameemLogo} alt="Logo" style={{width: "15rem"}}/>
        </div>
        <fieldset className="border-l border-slate-200"></fieldset>
        <div className="flex flex-col justify-start items-start xl:ml-16 xl:p-8 p-5 md:p-14">
          <p className="text-five md:text-1xl pb-10">
          Rameem is a digital psychological clinic for remote psychological consultations.<br />
          Through it, we strive to improve the mental health of the community by providing specialized<br />
          and diverse services to people suffering from psychological problems.<br />
          Or who want to develop themselves and live a better life. We aim to:<br />
          </p>
          {presentationData.map(({ id, description }) => (
            <li key={id} className="md:text-xl">
              {description}
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Presentation;

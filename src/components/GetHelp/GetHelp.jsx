// src/App.js
import React from "react";
import ProgressForm from "./ProgressForm/ProgressForm";
import NavBarHelp from "./NavBarHelp/NavBarHelp";

const GetHelp = () => {
  return (
    <div className="h-full w-full p-10 mb-52">
      <NavBarHelp />
      <ProgressForm />
    </div>
  );
};

export default GetHelp;

import React, { useEffect, useState, useContext } from "react";
import iconBack from "../../../assets/iconBack.svg";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";

const NavBarHelp = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="flex flex-row justify-between pb-10">
      {currentUser ? (
        <NavLink to="/dashboard">
          <img src={iconBack} alt="iconBack" />
        </NavLink>
      ) : (
        <NavLink to="/">
          <img src={iconBack} alt="iconBack" />
        </NavLink>
      )}

      <h1 className="knewave-regular font-extrabold text-3xl ml-2 md:text-4xl text-second">
        Rameem
      </h1>

      {currentUser ? (
        <NavLink
          className="text-primary md:px-8 cursor-pointer text-lg  hover:scale-105 duration-200 capitalize"
          to="/"
        >
          Log Out
        </NavLink>
      ) : (
        <NavLink
          className="text-primary md:px-8 cursor-pointer text-lg  hover:scale-105 duration-200 capitalize"
          to="/logIn"
        >
          Log In
        </NavLink>
      )}
    </div>
  );
};

export default NavBarHelp;

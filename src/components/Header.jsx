import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="flex items-center justify-between p-2">
      <div className="text-4xl border-l border-r font-bold bg-black bg-opacity-20 p-3 m-2 text-white rounded-full">FlixSonic</div>
      <div className="flex gap-5 items-center rounded-full text-white bg-black bg-opacity-20 border-l border-r text-2xl font-bold px-5 py-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `block py-2 pr-4 pl-3 duration-200 ${
              isActive ? "text-black" : "text-white"
            } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-black lg:p-0`
          }
        >
          Home
        </NavLink>
        
        <NavLink
          to="Anime"
          className={({ isActive }) =>
            `block py-2 pr-4 pl-3 duration-200 ${
              isActive ? "text-black" : "text-white"
            } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-black lg:p-0`
          }
        >
          Anime
        </NavLink>
      </div>
      <div className="flex gap-5 items-center rounded-full text-2xl border-l border-r bg-black bg-opacity-20 font-bold text-white p-2">
        <NavLink className="hover:text-black">Loing</NavLink>
        <NavLink className="hover:text-black">Register</NavLink>
      </div>
    </nav>
  );
}

export default Header;

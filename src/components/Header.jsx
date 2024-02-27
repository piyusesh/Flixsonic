import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="flex items-center justify-between p-2">
      <div className="text-3xl p-2 text-white rounded-full">FlixSonic</div>
      <div className="flex gap-5 items-center border-2 rounded-full text-white font-bold p-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `block py-2 pr-4 pl-3 duration-200 ${
              isActive ? "text-blue-500" : "text-white"
            } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-500 lg:p-0`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="Movies"
          className={({ isActive }) =>
            `block py-2 pr-4 pl-3 duration-200 ${
              isActive ? "text-blue-500" : "text-white"
            } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-500 lg:p-0`
          }
        >
          Movies
        </NavLink>
        <NavLink
          to="Anime"
          className={({ isActive }) =>
            `block py-2 pr-4 pl-3 duration-200 ${
              isActive ? "text-blue-500" : "text-white"
            } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-500 lg:p-0`
          }
        >
          Anime
        </NavLink>
        <NavLink
          to="Games"
          className={({ isActive }) =>
            `block py-2 pr-4 pl-3 duration-200 ${
              isActive ? "text-blue-500" : "text-white"
            } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-500 lg:p-0`
          }
        >
          Games
        </NavLink>
      </div>
      <div className="flex gap-5 items-center border-2 rounded-full font-bold text-white p-2">
        <NavLink className="hover:text-blue-400">Loing</NavLink>
        <NavLink className="hover:text-blue-400">Register</NavLink>
      </div>
    </nav>
  );
}

export default Header;

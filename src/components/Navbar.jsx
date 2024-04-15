import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="navBar flex flex-wrap justify-between items-center p-6 md:p-12 sticky top-0">
      <div className="logoDiv w-full md:w-auto">
        <h1 className="logo text-4xl text-black cursor-pointer font-bold">
          <strong className="text-blue-600 cursor-pointer">Nepal</strong>Mart
        </h1>
      </div>
      <button
        id="menuBtn"
        className="md:hidden block text-gray-600 hover:text-blue-600 text-2xl transition duration-200 lg:hidden "
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>
      <div
        className={`nav-items ${
          isOpen ? "block" : "hidden"
        } md:block w-full md:w-auto `}
      >
        <ul
          id="menu"
          className="menu flex flex-col md:flex-row flex-1 items-center md:justify-center gap-5"
        >
          <li
            className="menuList text-gray-600 hover:text-blue-600 text-2xl transition duration-200"
            onClick={() => navigate("/")}
          >
            Home
          </li>
          <li
            className="menuList text-gray-600 hover:text-blue-600 text-2xl transition duration-200"
            onClick={() => navigate("/about")}
          >
            About
          </li>
          <li
            className="menuList text-gray-600 hover:text-blue-600 text-2xl transition duration-200"
            onClick={() => navigate("/contact")}
          >
            Contact
          </li>
          <li
            className="menuList text-gray-600 hover:text-blue-600 text-2xl transition duration-200"
            onClick={() => navigate("/cart")}
          >
            Cart
          </li>
        </ul>
      </div>
      <div className="search w-full md:w-auto mt-4 md:mt-0">
        <input
          type="text"
          placeholder="Search"
          className="bg-indigo-300 p-2 rounded text-black ml-4 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <button className="menuList text-white bg-indigo-600 hover:text-white hover:bg-indigo-400 rounded-2xl ml-3 p-2 transition duration-200">
          Search
        </button>
        <button
          className="menuList text-white bg-indigo-600 hover:text-white hover:bg-indigo-400 rounded-2xl ml-3 p-2 transition duration-200"
          onClick={() => navigate("/login")}
        >
          Log In
        </button>
        <button
          className="menuList text-white bg-indigo-600 hover:text-white hover:bg-indigo-400 rounded-2xl ml-3 p-2 transition duration-200"
          onClick={() => navigate("/signUp")}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;

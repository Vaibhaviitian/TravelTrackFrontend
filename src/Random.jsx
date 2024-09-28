import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

export default function Header({ check }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const doo = () => {
    if (!check) {
      alert("Please login first to take access of each section");
    }
  };

  return (
    <header className="shadow w-full z-50 top-0 my-4 ">
      <nav className="bg-slate-400 rounded h-16 border-gray-200">
        <div className="flex justify-between items-center p-2">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/path-to-logo.png" // replace with your logo path
              alt="Logo"
              className="h-8 w-8 mr-2"
            />
            <span className="text-lg font-semibold text-gray-800">
              ToDesktop
            </span>
          </div>

          {/* Button to open/close menu */}
          <button
            className="text-gray-800 hover:bg-gray-800 hover:text-orange-500 px-4 py-2 rounded-lg md:hidden"
            onClick={toggleMenu}
          >
            Click Me
          </button>

          {/* Menu items visible on medium and larger screens */}
          <div className="hidden md:flex space-x-4">
            <NavLink
              onClick={doo}
              to="/pricing"
              className="text-gray-800 hover:bg-gray-800 hover:text-orange-500 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5"
            >
              Pricing
            </NavLink>
            <NavLink
              onClick={doo}
              to="/myposts"
              className="text-gray-800 hover:bg-gray-800 hover:text-orange-500 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5"
            >
              Community
            </NavLink>
            <NavLink
              onClick={doo}
              to="/about"
              className="text-gray-800 hover:bg-gray-800 hover:text-orange-500 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-person-circle"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                <path
                  fill-rule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                />
              </svg>
            </NavLink>
            <NavLink
              onClick={doo}
              to="/blogs"
              className="text-gray-800 hover:bg-gray-800 hover:text-orange-500 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5"
            >
              Blogs
            </NavLink>
            <NavLink
              onClick={doo}
              to="/login"
              className="text-gray-800 hover:bg-gray-800 hover:text-orange-500 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5"
            >
              Login
            </NavLink>
          </div>

          {/* Conditionally render the menu when the button is clicked */}
          {menuOpen && (
            <div className="absolute top-16 right-0 bg-white shadow-lg rounded-lg p-6 w-64 z-50 md:hidden">
              <ul>
                <li>
                  <NavLink
                    onClick={doo}
                    to="/pricing"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Pricing
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={doo}
                    to="/docs"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Docs
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={doo}
                    to="/changelog"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Changelog
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={doo}
                    to="/blogs"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Blogs
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={doo}
                    to="/login"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Login
                  </NavLink>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
      <ToastContainer />
    </header>
  );
}

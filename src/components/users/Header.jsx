import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

export default function Fvd({ check }) {
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
          <NavLink className="flex items-center p-2" to="/home">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="h-5 ml-6"><path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>
          </NavLink>
          <button
            className="text-gray-800 hover:bg-gray-800 hover:text-orange-500 px-4 py-2 rounded-lg md:hidden"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="w-6 h-6"
            >
              <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
            </svg>
          </button>
          <div className="hidden md:flex space-x-4">
            {check ? (
              <>
                <div>
                  <div class="flex items-center justify-center px-4 py-2 text-gray-800 font-bold hover:bg-gray-100 dropdown">
                    <button
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Trips
                    </button>
                    <ul class="dropdown-menu text-center">
                      <li>
                        <NavLink
                          class="dropdown-item text-center"
                          to="/createtrip"
                        >
                          Make my Trip
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          class="dropdown-item text-center"
                          to="/verified-trips"
                        >
                          Verified Trips
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          class="dropdown-item text-center"
                          to="/exploretrips"
                        >
                          Explore trips
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          class="dropdown-item text-center"
                          to="/mytrips"
                        >
                          My trips
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div class="flex items-center justify-center px-4 py-2 font-bold text-gray-800 hover:bg-gray-100 dropdown">
                    <NavLink to="/aiassitant">AI Assistant</NavLink>
                  </div>
                </div>
                <div>
                  <div class="flex font-bold items-center justify-center px-4 py-2 text-gray-800  hover:bg-gray-100 dropdown">
                    <button
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Community
                    </button>
                    <ul class="dropdown-menu text-center">
                      <li>
                        <NavLink
                          class="text-center dropdown-item"
                          to="/myposts"
                        >
                          My Posts
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          class="text-center dropdown-item"
                          to="/community"
                        >
                          All Posts
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          class="text-center dropdown-item"
                          to="/lostandfound"
                        >
                          Lost and Found
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          class="text-center dropdown-item"
                          to="/create-posts"
                        >
                          Create Posts
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div class="flex font-bold items-center justify-center px-4 py-2 text-gray-800  hover:bg-gray-100 dropdown">
                    <button
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Dashboard
                    </button>
                    <ul class="dropdown-menu text-center">
                      <li>
                        <NavLink class="dropdown-item text-center" to="/about">
                          About Us
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          class="dropdown-item text-center"
                          to="/contact "
                        >
                          Contact Us
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          class=" text-center dropdown-item"
                          to="/notification"
                        >
                          Notifications
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          class="text-center dropdown-item"
                          to="/dashboard"
                        >
                          My info
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </>
            ) : (
              <>
                <NavLink
                  to="/login"
                  className="text-gray-800 hover:bg-gray-800 hover:text-orange-500 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                >
                  Log in
                </NavLink>
                <NavLink
                  to="/contact"
                  className="text-gray-800 hover:bg-gray-800 hover:text-orange-500 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                >
                  Contact
                </NavLink>
                <NavLink
                  to="/about"
                  className="text-gray-800 hover:bg-gray-800 hover:text-orange-500 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                >
                  About us
                </NavLink>
                <NavLink
                  to="/register"
                  className="text-gray-800 hover:bg-gray-800 hover:text-orange-500 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                >
                  Sign Up
                </NavLink>
              </>
            )}
          </div>

          {/* Conditionally render the menu when the button is clicked */}
          {menuOpen && (
            <div className="absolute top-16 right-0 bg-slate-400 shadow-lg rounded-lg p-6 w-64 z-50 md:hidden ">
              {check ? (
                <>
                  <ul>
                    <li>
                      <div class="flex justify-center items-center px-4 py-2 text-gray-800 hover:bg-gray-100 dropdown">
                        <button
                          class="btn dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Trips
                        </button>
                        <ul class="dropdown-menu text-center">
                          <li>
                            <NavLink
                              class="dropdown-item text-center"
                              to="/createtrip"
                            >
                              Make my Trip
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              class="dropdown-item text-center"
                              to="/verified-trips"
                            >
                              Verified Trips
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              class="dropdown-item text-center"
                              to="/exploretrips"
                            >
                              Explore trips
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              class="dropdown-item text-center"
                              to="/mytrips"
                            >
                              My trips
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <NavLink
                        onClick={doo}
                        to="/aiassitant"
                        className="flex justify-center px-4 py-2 text-gray-800 hover:bg-gray-100 "
                      >
                        AI Assistant
                      </NavLink>
                    </li>
                    <li>
                      <div class="flex justify-center items-center px-4 py-2 text-gray-800 hover:bg-gray-100 dropdown">
                        <button
                          class="btn dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Community
                        </button>
                        <ul class="dropdown-menu text-center">
                          <li>
                            <NavLink
                              class="text-center dropdown-item"
                              to="/myposts"
                            >
                              My Posts
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              class="text-center dropdown-item"
                              to="/community"
                            >
                              All Posts
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              class="text-center dropdown-item"
                              to="/lostandfound"
                            >
                              Lost and Found
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              class="text-center dropdown-item"
                              to="/create-posts"
                            >
                              Create Posts
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <div class="flex items-center justify-center px-4 py-2 text-gray-800  hover:bg-gray-100 dropdown">
                        <button
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Dashboard
                        </button>
                        <ul class="dropdown-menu text-center">
                          <li>
                            <NavLink
                              class="dropdown-item text-center"
                              to="/about"
                            >
                              About Us
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              class="dropdown-item text-center"
                              to="/contact "
                            >
                              Contact Us
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              class=" text-center dropdown-item"
                              to="/notification"
                            >
                              Notifications
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              class="text-center dropdown-item"
                              to="/dashboard"
                            >
                              My info
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>{" "}
                </>
              ) : (
                <>
                  <ul>
                    <li>
                      <NavLink
                        onClick={doo}
                        to="/login"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      >
                        Login
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        onClick={doo}
                        to="/register"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      >
                        Sign Up
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        onClick={doo}
                        to="/about"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      >
                        About us
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        onClick={doo}
                        to="/contact"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      >
                        Contact us
                      </NavLink>
                    </li>
                  </ul>
                </>
              )}
            </div>
          )}
        </div>
      </nav>
      <ToastContainer />
    </header>
  );
}

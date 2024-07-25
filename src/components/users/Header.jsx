import React from "react";
import { Link, NavLink } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
export default function Header({ check }) {
  const doo = () => {
    if (!check) {
      alert("Please login first to take access of each section");
    }
  };

  return (
    <header className="shadow sticky z-50 top-0 mb-4">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src="https://media.istockphoto.com/id/867047736/photo/travel-and-tourism.webp?b=1&s=170667a&w=0&k=20&c=0-39-ABFPqxnMscFpRKo18-87zhbmMQ0RUjsglrvHm4="
              className="mr-3 h-12 rounded-2xl "
              alt="Logo"
            />
          </Link>
          <div className="flex items-center lg:order-2">
            <NavLink
              onClick={doo}
              to="/home"
              className="text-gray-800 hover:bg-gray-800 hover:text-orange-500 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Home
            </NavLink>
            {check ? (
              <>
                <div className="relative group">
                  <button className="text-gray-800 hover:bg-gray-800 hover:text-orange-500 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
                    Trips
                    <svg
                      className="w-2.5 h-2.5 ml-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>
                  <div className="absolute hidden group-hover:block bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                    <ul className="py-2 text-sm text-gray-700">
                      <li>
                        <Link
                          to="/createtrip"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Make my Trip
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/exploretrips"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Explore trips
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/mytrips"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          My trips
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="relative group">
                  <button className="text-gray-800 hover:bg-gray-800 hover:text-orange-500 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
                    <NavLink to="/aiassitant"> AI Assistant</NavLink>

                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </button>
                </div>
                <div className="relative group">
                  <button className="text-gray-800 hover:bg-gray-800 hover:text-orange-500 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
                    Community
                    <svg
                      className="w-2.5 h-2.5 ml-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>
                  <div className="absolute hidden group-hover:block bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                    <ul className="py-2 text-sm text-gray-700">
                      <li>
                        <Link
                          to="/myposts"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          My Posts
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/community"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          All Posts
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/lostandfound"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Lost and Found
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/create-posts"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Create Posts
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="relative group">
                  <button className="text-gray-800 hover:bg-gray-800 hover:text-orange-500 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
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
                  </button>
                  <div className="absolute hidden group-hover:block bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                    <ul className="py-2 text-sm text-gray-700">
                      <li>
                        <Link
                          to="/about"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/contact"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Contact Us
                        </Link>
                      </li>

                      <li>
                        <Link
                          to="/notification"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Notifications
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/dashboard"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          <i className="w-4 h-2 rounded-full bg-orange-500">
                            {" "}
                            My Info
                          </i>
                        </Link>
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
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0"></ul>
          </div>
        </div>
        <ToastContainer />
      </nav>
    </header>
  );
}

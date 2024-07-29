import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import NumberTicker from "./Usercounter";

const Welcome = ({ setIsAuthenticate }) => {
  const navigate = useNavigate();
  const navigatto = () => {
    navigate('/register')
  } 

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="bg-white p-8 rounded-lg shadow-lg mt-4 mb-4 w-full max-w-3xl">
          <h2 className="text-5xl font-bold text-orange-700 text-center mb-2">
            Welcome to TravelTrack
          </h2>
          <h2 className="text-3xl font-bold text-center mb-5">
            A complete solution for your travel planning and management needs.
          </h2>
          <img
            src="https://images.unsplash.com/photo-1442570468985-f63ed5de9086?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D"
            style={{ objectFit: "cover" }}
            alt="Travel"
            className="w-full h-64 object-cover rounded-md mb-5"
          />
          <p className="text-gray-700 text-xl mb-5">
            <strong>
              TravelTrack is your ultimate travel companion app. Whether you are
              planning a vacation, a business trip, or a weekend getaway,
              TravelTrack helps you organize your trips, keep track of your
              travel experiences, and stay connected with the TravelTrack
              community.
            </strong>
          </p>
        </div>
      </div>
      <div className="min-h-screen bg-gray-900 flex flex-col items-center">
        <div className="text-[#9A879D] text-4xl mb-5 text-center">
          <strong>Features:</strong>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-5">
          <div className="relative overflow-hidden w-60 h-80 rounded-3xl cursor-pointer text-2xl font-bold bg-purple-400">
            <div className="z-10 absolute w-full h-full peer"></div>
            <div className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-purple-300 transition-all duration-500"></div>
            <div className="absolute flex text-xl text-center p-4 items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-16 w-36 h-44 rounded-full bg-purple-300 transition-all duration-500">
              Plan, organize, and track trips.
            </div>
            <div className="w-full h-full items-center justify-center flex uppercase">
              Trip Tracking
            </div>
          </div>

          <div className="relative overflow-hidden w-60 h-80 rounded-3xl cursor-pointer text-2xl font-bold bg-purple-400">
            <div className="z-10 absolute w-full h-full peer"></div>
            <div className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-purple-300 transition-all duration-500"></div>
            <div className="absolute flex text-xl text-center p-4 items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-16 w-36 h-44 rounded-full bg-purple-300 transition-all duration-500">
              Collaborate on trips and receive notifications.
            </div>
            <div className="w-full h-full items-center justify-center flex uppercase">
              Collaboration
            </div>
          </div>

          <div className="relative overflow-hidden w-60 h-80 rounded-3xl cursor-pointer text-2xl font-bold bg-purple-400">
            <div className="z-10 absolute w-full h-full peer"></div>
            <div className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-purple-300 transition-all duration-500"></div>
            <div className="absolute flex text-xl text-center p-4 items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-16 w-36 h-44 rounded-full bg-purple-300 transition-all duration-500">
              Create travel blogs
            </div>
            <div className="w-full h-full items-center justify-center flex uppercase">
              Travel Blogs
            </div>
          </div>

          <div className="relative overflow-hidden w-60 h-80 rounded-3xl cursor-pointer text-2xl font-bold bg-purple-400">
            <div className="z-10 absolute w-full h-full peer"></div>
            <div className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-purple-300 transition-all duration-500"></div>
            <div className="absolute flex text-xl text-center p-4 items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-16 w-36 h-44 rounded-full bg-purple-300 transition-all duration-500">
              Rate trips, view average ratings
            </div>
            <div className="w-full h-full items-center justify-center flex uppercase">
              Rating System
            </div>
          </div>

          <div className="relative overflow-hidden w-60 h-80 rounded-3xl cursor-pointer text-2xl font-bold bg-purple-400">
            <div className="z-10 absolute w-full h-full peer"></div>
            <div className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-purple-300 transition-all duration-500"></div>
            <div className="absolute flex text-xl text-center p-4 items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-16 w-36 h-44 rounded-full bg-purple-300 transition-all duration-500">
              Manage profile, track followers, collaborators.
            </div>
            <div className="w-full h-full items-center justify-center flex uppercase">
              Profile Tracking
            </div>
          </div>

          <div className="relative overflow-hidden w-60 h-80 rounded-3xl cursor-pointer text-2xl font-bold bg-purple-400">
            <div className="z-10 absolute w-full h-full peer"></div>
            <div className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-purple-300 transition-all duration-500"></div>
            <div className="absolute flex text-xl text-center p-4 items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-16 w-36 h-44 rounded-full bg-purple-300 transition-all duration-500">
              Always Ready to Assist
            </div>
            <div className="w-full h-full items-center justify-center flex uppercase">
              Chatbot
            </div>
          </div>
        </div>
      </div>
      <div className="h-auto bg-gray-900 flex items-center justify-center  ">
        <button class="px-8 z-30 py-4 bg-rose-400 rounded-md mb-5 text-white relative font-semibold font-sans after:-z-20 after:absolute after:h-1 after:w-1 after:bg-rose-800 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 [text-shadow:3px_5px_2px_#be123c;] hover:[text-shadow:2px_2px_2px_#fda4af] text-2xl" onClick={navigatto}>
          Get Started
        </button>
        
      </div>
      <div className="flex h-auto bg-gray-900 items-center  justify-center mb-3 p-4 ">
        <NumberTicker/>{"    "} <strong className=" ml-2 text-3xl text-orange-500">user Currently joined us and having a lot of fun with our application! </strong>
        </div>
      
    </>
  );
};

export default Welcome;

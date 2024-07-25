import React from "react";
import { Link } from "react-router-dom";
import NumberTicker from "./Usercounter";

export default function About() {
  return (
    <div className="py-16 bg-gray-900 text-gray-300">
      <div className="container m-auto px-6 md:px-12 lg:px-6">
        <div className="flex items-center justify-center mb-3 bg-black rounded-2xl p-2 ">
        <NumberTicker/>{"    "} <strong className=" ml-10 text-2xl">user Currently joined us and having a lot of fun with our application! </strong>
        </div>
 
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            About Us
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl">
            TravelTrack is a project created to simplify and enhance your travel
            experience. As a passionate developer and traveler, I wanted to
            build a tool that helps you manage and enjoy your trips with ease.
            <br />
            <br />
            <strong>What TravelTrack Offers:</strong>
            <ul className="list-disc list-inside mb-4">
              <li>Organize and manage your travel plans effortlessly.</li>
              <li>Share and collaborate on trips with friends and family.</li>
              <li>Track, edit, and update your trips dynamically.</li>
              <li>Create, explore, and share travel stories and posts.</li>
              <li>Report and recover lost items during your travels.</li>
            </ul>
            <strong>
              TravelTrack is a platform designed to simplify your travel
              experience by making trip planning, collaboration, and real-time
              updates easy. Created by a passionate developer, it aims to
              enhance every aspect of your journey.
            </strong>
            <br />
            <br />
          </p>
        </div>
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Tech Stack
          </h2>
          <ol>
            <strong>
              <li>MongoDB [DataBase]</li>
              <li>Express.js [Routing and APIs]</li>
              <li>Node.js [BackEnd]</li>
              <li>React [Frontend]</li>
            </strong>
          </ol>
        </div>
        <div className="flex items-center justify-center">
          <div class="bg-sky-700 rounded-2xl shadow-sm shadow-sky-500 outline outline-slate-400 -outline-offset-8 mr-96 mt-10">
            <div class="group overflow-hidden relative after:duration-500 before:duration-500  duration-500 hover:after:duration-500 hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:duration-500 after:absolute after:w-24 after:h-24 after:bg-sky-700 after:rounded-full  after:blur-xl after:bottom-32 after:right-16 after:w-12 after:h-12  before:absolute before:w-20 before:h-20 before:bg-sky-400 before:rounded-full  before:blur-xl before:top-20 before:right-16 before:w-12 before:h-12  hover:rotate-12 flex justify-center items-center h-56 w-80  bg-neutral-900 rounded-2xl outline outline-slate-400 -outline-offset-8">
              <div class="z-10 flex flex-col items-center gap-2">
                <span class="text-slate-400 text-6xl font-bold">
                  <Link to="https://github.com/Vaibhaviitian">GITHUB</Link>
                </span>
                <Link
                  class="text-gray-50 text-2xl "
                  to="https://github.com/Vaibhaviitian"
                >
                  <strong>Vaibhav Aryan</strong>
                </Link>
              </div>
            </div>
          </div>

          <div class="bg-sky-700 rounded-2xl shadow-sm shadow-sky-500 outline outline-slate-400 -outline-offset-8 mt-10">
            <div class="group overflow-hidden relative after:duration-500 before:duration-500  duration-500 hover:after:duration-500 hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:duration-500 after:absolute after:w-24 after:h-24 after:bg-sky-700 after:rounded-full  after:blur-xl after:bottom-32 after:right-16 after:w-12 after:h-12  before:absolute before:w-20 before:h-20 before:bg-sky-400 before:rounded-full  before:blur-xl before:top-20 before:right-16 before:w-12 before:h-12  hover:rotate-12 flex justify-center items-center h-56 w-80  bg-neutral-900 rounded-2xl outline outline-slate-400 -outline-offset-8">
              <div class="z-10 flex flex-col items-center gap-2">
                <span class="text-slate-400 text-6xl font-bold"><Link to="https://www.linkedin.com/in/vaibhav-aryan-00650b287/">Linkedin</Link></span>
                <Link
                  class="text-gray-50 text-2xl "
                  to="https://www.linkedin.com/in/vaibhav-aryan-00650b287/"
                >
                  <strong>Vaibhav Aryan</strong>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

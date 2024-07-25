import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");
  const id = localStorage.getItem('id')
  const handlesubmit = async (e) => {
    try {
        console.log("aage hai")
        e.preventDefault();
        let response = await axios.post('http://localhost:3000/user/sending-feedback',{
            id,feedback
        })
        if(!response){
            console.log("REs nahi aaya "+ response)
        }
        // console.log(response.data.data)
        toast.success('Feedback sent successfully')
        response = response.data.data;
    } catch (error) {
        console.log(error);
        toast.error(error.response.data.message)
        
    }
};

  return (
    <div className=" bg-white sm:items-center sm:pt-0">
      <div className="flex items-center justify-center text-5xl">
        <b>Give your valuable feedback</b>
      </div>
      <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
        <div className="mt-8 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-6 mr-2 bg-gray-100 sm:rounded-lg">
              <h1 className="text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight">
                Get in touch:
              </h1>
              <p className="text-normal text-lg sm:text-xl font-medium text-gray-600 mt-2">
                Fill in the form to start a conversation
              </p>

              <div className=" mt-2 text-gray-600">
                <strong className="text-2xl">
                  Contact us with Given Emails
                </strong>
                <div className="ml-4 text-2xl tracking-wide font-semibold w-40">
                  aryanvaibhav74@gmail.com
                </div>
                <div className="ml-4 text-2xl tracking-wide font-semibold w-40">
                  TravelTrack1527@gmail.com
                </div>
              </div>
            </div>

            <form
              className="p-6 flex flex-col justify-center"
              onSubmit={handlesubmit}
            >
              <div className="flex flex-col">
                <label for="name" className="hidden">
                  Full Name
                </label>
                <input
                  type="name"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col mt-2">
                <label for="tel" className="hidden">
                  Feedback
                </label>
                <input
                  type="text"
                  name="text"
                  id="text"
                  placeholder="Feedback"
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                  value={feedback}
                  onChange={(e) => {
                    setFeedback(e.target.value);
                  }}
                />
              </div>

              <button
                type="submit"
                className="md:w-32 bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
}

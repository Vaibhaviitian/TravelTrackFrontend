import React from "react";
import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
const OtpVerification = () => {
  const [phonenumber, setPhonenumber] = useState("");
  const navigate = useNavigate();
  const handleotp = async (event) => {
    event.preventDefault();
    try {
      localStorage.setItem("phonenumber", phonenumber);
      const response = await axios.post(
        "https://traveltrackbackend-av1l.onrender.com/user/generate-otp",
        {
          phonenumber,
        }
      );
      toast.success(response.data.data);
      if (response.data.success) {
        navigate("/checking-OTP");
      }
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
  };
  return (
    <div className="min-h-screen bg-gray-800 flex text-white items-center justify-center">
      <div className="w-max rounded-2xl bg-slate-900 shadow-lg">
        <div className="flex flex-col gap-2 p-5">
          <p className="text-center text-3xl text-white-300 mb-4">
            Get verified
          </p>
          <b className="text-center text-2xl mt-3 mb-3">Mobile Number</b>
          <input
            className="bg-slate-900 w-full rounded-lg border border-white-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800"
            type="teln"
            value={phonenumber}
            onChange={(e) => setPhonenumber(e.target.value)}
            placeholder="Mobile no"
          />

          <b className="text-center text-2xl mt-3 mb-3">
            Why you want to become an agent (**optional**)
          </b>

          <textarea
            name="about"
            id="about"
            className="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800"
            placeholder="Tell us reason"
          ></textarea>

          <div
            class="alert alert-warning alert-dismissible fade show"
            role="alert"
          >
            <strong>Note: </strong> Don't forget to add +91 in mobile number
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>

          <button
            className="inline-block mt-3 mb-3 cursor-pointer rounded-md bg-gray-700 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95"
            onClick={handleotp}
          >
            Register
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default OtpVerification;

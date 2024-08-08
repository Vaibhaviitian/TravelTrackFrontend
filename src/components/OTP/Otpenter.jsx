import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const OtpInputCard = ({ onSubmit }) => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleChange = (e, index) => {
    const { value } = e.target;
    if (/^[a-zA-Z0-9]*$/.test(value)) {
      let newOtp = otp.split("");
      newOtp[index] = value;
      setOtp(newOtp.join(""));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let phonenumber = localStorage.getItem("phonenumber");
      phonenumber = phonenumber.replace(/\s+/g, "");
      console.log(phonenumber); // Output: +918303131343

      const id = localStorage.getItem("id");
      console.log(id, phonenumber);
      const response = await axios.post(
        "http://localhost:3000/user/cheking-otp",
        {
          phonenumber,
          id,
          otp,
        }
      );
      if (response.data.ans) {
        console.log(response.data.ans);
        navigate("/confirmandverified-OTP");
      }
      console.log(response);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
      console.log(`we having error of ${error}`);
    }
    console.log(otp);
  };

  return (
    <div className="min-h-screen bg-gray-800 text-white flex items-center justify-center">
      <div className="w-96 p-8 bg-slate-900 rounded-2xl shadow-lg">
        <h2 className="text-center text-3xl text-white mb-6">Enter OTP</h2>
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center mb-4">
            {Array.from({ length: 6 }, (_, index) => (
              <input
                key={index}
                className="w-12 h-12 m-1 text-center text-2xl bg-slate-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800"
                type="text"
                maxLength="1"
                value={otp[index] || ""}
                onChange={(e) => handleChange(e, index)}
                onFocus={(e) => e.target.select()}
                id={`otp-input-${index}`}
              />
            ))}
          </div>
          <button
            type="submit"
            className="w-full py-3.5 bg-gray-700 rounded-md text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2"
          >
            Verify OTP
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default OtpInputCard;

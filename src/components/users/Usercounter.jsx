import React, { useEffect, useState } from "react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const NumberTicker = () => {
  const [value, setValue] = useState(0);
  const [currentValue, setCurrentValue] = useState(0);

  const getcounts = async () => {
    try {
      let response = await axios.get(
        "https://traveltrackbackend-av1l.onrender.com/user/getting-totaluser"
      );
      console.log(response);
      setValue(response.data.data);
      // toast.success("Data fetched successfully!");
    } catch (error) {
      console.log(error);
      toast.error(`Error: ${error.response.data.message}`);
    }
  };

  useEffect(() => {
    getcounts();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentValue((prev) => {
        if (prev < value) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 50); // Adjust the speed by changing the interval time

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [value]);

  return (
    <div className="flex items-center justify-center">
      <p className="text-4xl tracking-tighter text-orange-500">{currentValue}</p>
      <ToastContainer />
    </div>  
  );
};

export default NumberTicker;

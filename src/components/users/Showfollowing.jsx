import React, { useEffect, useState } from "react";
import USerlist from "./USerlist";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

const SHowfollowing = () => {
  const [data, setData] = useState([]);

  const getfollower = async () => {
    try {
      let id = localStorage.getItem("id");
      let response = await axios.post(
        "https://traveltrackbackend-av1l.onrender.com/Trips/dashboard-details/followings",
        { id }
      );
      console.log("Getting resp")
      response = response.data.data;
      console.log(response);
      setData(response);
      toast.success("Getting followers successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    getfollower();
  }, []);

  useEffect(() => {
    console.log("mera data");
    console.log(data);
  }, []);

  return (
    <>
      <ToastContainer />
      <div className="flex min-h-screen">
        <div className="flex-1 bg-gray-600"></div>

        <div className="flex-1 bg-black flex justify-center items-center p-4 overflow-auto">
          <div className="space-y-4">
            {data.length > 0 ? (
              data.map((eachval) => (
                <USerlist
                  username={eachval.follower_userid.username}
                  email={eachval.follower_userid.email}
                  avatar={eachval.follower_userid.avatar}
                />
              ))
            ) : (
              <div className="text-white">No followers found</div>
            )}
          </div>
        </div>
        <div className="flex-1 bg-gray-600"></div>
      </div>
    </>
  );
};

export default SHowfollowing;

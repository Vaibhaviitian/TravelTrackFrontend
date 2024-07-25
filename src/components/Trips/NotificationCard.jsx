import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NotificationCard = ({
  email,
  avatar,
  Name,
  isrender,
  createdat,
  following_userid,
  follower_userid,
  collabdocid
}) => {
  const [time, setTime] = useState("");
  // console.log(collabdocid)

  const formatTimeAgo = (dateString) => {
    const uploadedTime = new Date(dateString);
    const currentTime = new Date();
    const timeDifference = currentTime - uploadedTime;
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (seconds < 60) {
      return `${seconds} seconds ago`;
    } else if (minutes < 60) {
      return `${minutes} minutes ago`;
    } else if (hours < 24) {
      return `${hours} hours ago`;
    } else {
      return `${days} days ago`;
    }
  };

  const cnfrm = async () => {
    try {
      let response = await axios.post("https://traveltrackbackend-av1l.onrender.com/Trips/requesthandling", {
        following_userid,
        follower_userid,
      });
      response = await response.data;
      console.log(response);

      toast.success('Request Accepted successfully')
    } catch (error) {
      console.log(error.response.data.message);
      toast.error(error.response.data.message)
    }
  };

  const reject = async () => {
    try {
      console.log(collabdocid);
      let response = await axios.post('https://traveltrackbackend-av1l.onrender.com/Trips/deletecollabrequest',{
        collabdocid
      });
      console.log(response.data);
      alert("Request Rejected successfully")
      toast.success("Request Rejected Successfully")
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message)
    }

  };

  useEffect(() => {
    setTime(formatTimeAgo(createdat));
  }, []);
  if (!time) {
    setTime("---");
  }
  return (
    <>
      {isrender === "false" ? (
        <>
          <div className="bg-gray-800 mt-3 mr-4 ml-4 mb-4 text-white p-6 rounded-lg space-x-4">
            <div className="flex items-center">
              <img
                src={avatar}
                alt="Avatar"
                className="w-12 mr-5 h-12 rounded-2xl		"
              />
              <p className="font-bold">New Collaboration Request</p>
            </div>
            <div className="flex items-center">
              <strong className="text-white-400 text-sm ml-10"> {time} </strong>
            </div>
            <br />
            <div className="flex flex-col">
              <div>
                <p>
                  <strong className="text-white-400">{Name}</strong>{" "}
                  <span className="text-gray-400">
                    requested for collaboration.
                  </span>
                </p>
                <p>
                  <span className="text-gray-400">
                    Contact with their email{" "}
                  </span>{" "}
                  <strong className="text-white-400">{email}</strong>
                </p>
              </div>
              <div className="flex space-x-4 mt-4">
                <button
                  type="button"
                  className="btn btn-success flex-1 mr-10"
                  onClick={cnfrm}
                >
                  Confirm 😀
                </button>
                <button
                  type="button"
                  className="btn btn-danger flex-1 ml-10 "
                  onClick={reject}
                >
                  Reject😭
                </button>
              </div>
            </div>
          </div>{" "}
        </>
      ) : (
        <></>
      )}
      <ToastContainer/>
    </>
  );
};

export default NotificationCard;

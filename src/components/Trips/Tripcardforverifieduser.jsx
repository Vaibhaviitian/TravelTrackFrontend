import axios from "axios";
import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Tripcardforverifieduser = ({
  id,
  startDate,
  endDate,
  tripName,
  createdAt,
  destination,
  activities,
  accommodation,
  avatarimage,
  username,
  isusertrip,
  follower_userid,
  isverified,
}) => {
  const [timeAgo, setTimeAgo] = useState("");
  const [formatcreated, setFormatcreated] = useState("");

  const [review, setReview] = useState([]);
  const [finalrate, setfinalrate] = useState(0);
  const [showRatingForm, setShowRatingForm] = useState(false);
  const [rate, setrate] = useState(0);
  const [total, setTotal] = useState("");
  const [messsage, setMesssage] = useState("");
  const [collaborateButtonClickable, setCollaborateButtonClickable] =
    useState("");

  let following_userid = localStorage.getItem("id");

  const gettingMessageOfCollab = async () => {
    try {
      let response = await axios.post(
        "https://traveltrackbackend-av1l.onrender.com/Trips/iscollab",
        {
          trip_id: id,
          following_userid,
        }
      );

      let responseData = response?.data?.message;

      if (responseData === "Already collaborated") {
        setMesssage("Collaborated");
        setCollaborateButtonClickable(false);
      }
      if (responseData === "Collaborate") {
        setMesssage("Collaborate");
        setCollaborateButtonClickable(true);
      }
    } catch (error) {
      console.log("Error occurred:", error);
      if (error.response) {
        console.log("Error response data:", error.response.data.message);
      }
    }
  };

  const kkkkk = () => {
    toast.error("Already Collaborated");
  };
  let avataroptional;
  useEffect(() => {
    avataroptional = localStorage.getItem("url");
    setTimeAgo(formatTimeAgo(createdAt));
    setFormatcreated(formatDate(createdAt));
    gettingMessageOfCollab();
  }, [createdAt]);

  const getttingreviewofcard = async () => {
    setShowRatingForm(false);
    try {
      let response = await axios.post(
        "https://traveltrackbackend-av1l.onrender.com/Trips/ratingsupdateandsubmission",
        {
          id,
          rate: parseFloat(rate), // Convert rate to a number
        }
      );
      let ratingarray = await response.data.data.rating;
      setReview(ratingarray);
      let sum = 0;
      for (let i = 0; i < ratingarray.length; i++) {
        sum += parseFloat(ratingarray[i]);
      }
      sum /= ratingarray.length;
      setTotal(ratingarray.length);
      setfinalrate(sum.toFixed(2)); // Set the final rate to 2 decimal places
    } catch (error) {
      console.log(error);
    }
  };

  const createcollaboration = async () => {
    console.log("aagaye hai");
    try {
      let following_userid = localStorage.getItem("id");
      if (!following_userid) {
        console.log("Not getting following user id from ls");
      }
      console.log("aagaye hai ");
      console.log(following_userid, follower_userid);
      let response = await axios.post(
        "https://traveltrackbackend-av1l.onrender.com/Trips/createcollaborationrequest",
        {
          following_userid,
          follower_userid,
          trip_id: id,
        }
      );
      response = response.data.data;
      alert(`Request successfully sent to ${username}`);
      console.log(response);
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.message);
    }
  };
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    if (isNaN(date)) return "Invalid Date";

    const year = date.getFullYear();
    const month = date.toLocaleString("default", { month: "long" });
    const day = date.getDate();
    const getOrdinalSuffix = (number) => {
      const suffixes = ["th", "st", "nd", "rd"];
      const v = number % 100;
      return number + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
    };

    return `${getOrdinalSuffix(day)} ${month} ${year}`;
  };

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

  const deletetrip = async () => {
    if (!id) {
      console.log("Having error in getting key");
    }
    try {
      let response = await axios.delete(
        `https://traveltrackbackend-av1l.onrender.com/Trips/deletingtripbyid/${id}`
      );
      response = response.data.message;
      alert("Removed from your trips");
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteClick = () => {
    if (
      window.confirm("Are you sure you want to mark this trip as completed?")
    ) {
      deletetrip();
    }
  };

  return (
    <>
      {isverified ? (
        <>
          <div className="p-4 bg-black mt-6 mb-6  text-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <div className="relative z-10 p-4">
              <div className="flex items-center mb-4">
                <img
                  src={avatarimage || avataroptional}
                  className="w-10 h-10 rounded-full mr-4"
                  alt={username}
                />
                <div>
                  <p className="text-sm font-bold">{username}</p>
                  <p className="text-xs text-gray-400">{formatcreated}</p>
                  <p className="text-xs text-gray-400">{timeAgo}</p>
                </div>
                {isverified ? (
                  <>
                    <span className="inline-flex items-center bg-green-500 text-black text-xl font-semibold py-1 px-3 rounded-full shadow-md transition-all duration-200 ease-in-out hover:bg-green-600 hover:shadow-lg ml-10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-orange inline-block mr-1"
                        fill="none"
                        style={{ fontWeight: "bolder" }}
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <strong>Verified Agent</strong>
                    </span>
                  </>
                ) : (
                  <></>
                )}
              </div>

              <h5 className="text-2xl text-center bg-orange-500 text-black p-1 rounded-xl font-bold mb-2">
                {tripName}
              </h5>
              <p className="text-gray-300 mb-2">
                <strong>Ready for enjoying the trip of - </strong>
                {destination}
              </p>
              <div className="flex justify-between">
                <p className="text-gray-300 mb-2">
                  <strong>From- </strong> {startDate}
                </p>
                <p className="text-gray-300 mb-2">
                  {" "}
                  <strong>To- </strong> {endDate}
                </p>
              </div>
              <p className="text-gray-300 mb-2">
                {" "}
                <strong>Todo's in trips- </strong>
                {activities}
              </p>
              <p className="text-gray-300 mb-2">
                <strong>Accommodation - </strong>
                {accommodation}
              </p>
              {isusertrip ? (
                <></>
              ) : (
                <>
                  <div
                    class="alert alert-warning alert-dismissible fade show"
                    role="alert"
                  >
                    <strong>
                      Please rate this trip to get rating and total rated user
                      till now
                    </strong>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="alert"
                      aria-label="Close"
                    ></button>
                  </div>
                  <p className="text-gray-300 mb-2">
                    {" "}
                    <strong>Average Rating - </strong> {finalrate} / 5
                  </p>
                </>
              )}
            </div>
            {isusertrip ? (
              <div className="flex justify-center">
                <button
                  type="button"
                  onClick={handleDeleteClick}
                  className="btn btn-primary"
                >
                  Trip completed
                </button>
              </div>
            ) : (
              <></>
            )}
            {isusertrip ? (
              <> </>
            ) : (
              <>
                <div className="flex justify-center">
                  <button
                    type="button"
                    onClick={() => setShowRatingForm(true)}
                    className="btn btn-danger ml-4 mr-4"
                  >
                    Rating + <br /> <strong> {total} user rated this</strong>
                  </button>
                  {collaborateButtonClickable ? (
                    <button
                      type="button"
                      className="btn btn-success ml-4 mr-4"
                      onClick={createcollaboration}
                    >
                      {messsage}
                    </button>
                  ) : (
                    <div
                      onClick={kkkkk}
                      className="btn btn-warning ml-4 flex justify-center items-center mr-4"
                    >
                      {" "}
                      {messsage}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-check-circle-fill"
                        viewBox="0 0 16 16"
                        className="ml-5"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                      </svg>
                    </div>
                  )}
                </div>
                {showRatingForm && (
                  <div className="flex flex-col items-center mt-4">
                    <input
                      type="number"
                      max="5"
                      min="1"
                      value={rate}
                      onChange={(e) => setrate(e.target.value)}
                      required
                      className="w-20 p-2 mb-2 border border-gray-300 rounded text-black"
                    />
                    <button
                      type="submit"
                      onClick={getttingreviewofcard}
                      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                      Submit Rating
                    </button>
                  </div>
                )}
              </>
            )}
            <ToastContainer />
          </div>{" "}
        </>
      ) : (
        <> </>
      )}
    </>
  );
};

export default Tripcardforverifieduser;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BlogCard({
  title,
  message,
  photo,
  creatingtime,
  user,
  isuser,
  id,
  islost,
}) {
  const [letter, setLetter] = useState("");
  const [date, setDate] = useState("");
  const [passedTime, setPassedTime] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      let first_letter = user[0];
      first_letter = first_letter.toUpperCase();
      setLetter(first_letter);
    }
  }, [user]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.toLocaleString("default", { month: "long" });
    const day = date.getDate();
    const getOrdinalSuffix = (number) => {
      const suffixes = ["th", "st", "nd", "rd"];
      const v = number % 100;
      return number + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
    };

    const formattedDate = `${getOrdinalSuffix(day)} ${month} ${year}`;
    return formattedDate;
  };

  const timeAgo = (dateString) => {
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

  const handleDelete = async () => {
    let response = await axios.delete(
      `https://traveltrackbackend-av1l.onrender.com/community/communityinside-done/delete-blog/${id}`
    );
    alert(`${response.data.message}`);
    setIsDeleteModalOpen(false);
  };

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  const redirectingtolostandfoundpage = () => {
    navigate("/lostandfound");
  };


  useEffect(() => {
    let newDate = formatDate(creatingtime);
    setDate(newDate);
    let newPassedTime = timeAgo(creatingtime);
    setPassedTime(newPassedTime);
  }, [creatingtime]);

  return (
    <div>
      <div className="max-w-md mx-auto mt-4 mb-4 bg-black rounded-xl shadow-md overflow-hidden transform transition-transform hover:scale-105">
        <div className="flex items-center justify-between p-4 bg-black">
          <div className="flex items-center">
            <div className="bg-orange-500 text-white rounded-full h-10 w-10 flex items-center justify-center">
              {letter ? letter : "JK"}
            </div>
            <div className="ml-4">
              <div className="text-lg font-medium text-white">
                {user ? user : "Anonymous"}
              </div>
              <div className="text-gray-400">
                {date ? date : "Date Unknown"}
              </div>
              <div className="text-gray-400">
                {passedTime ? passedTime : ""}
              </div>
            </div>
          </div>
          {islost ? (
            <button
              onClick={redirectingtolostandfoundpage}
              id="dynamicButton"
              className="relative inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-md shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
            >
              <span>Report</span>
            </button>
          ) : (
            <> </>
          )}
          {isuser && (
            <div className="flex space-x-4">
              <button className="text-orange-500 hover:text-orange-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-pen"
                  viewBox="0 0 16 16"
                >
                  <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708z" />
                </svg>
              </button>
              <button
                className="text-orange-500 hover:text-orange-600"
                onClick={handleOpenDeleteModal}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-trash3-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
                </svg>
              </button>
            </div>
          )}
        </div>
        {photo && (
          <img
            src={photo}
            alt="Blog"
            className="h-48 w-full object-cover cursor-pointer"
            onClick={handleImageClick}
          />
        )}
        <div className="p-4 bg-black">
          <h3 className="text-xl font-semibold text-white">
            <strong className="flex justify-center mb-3 bg-white text-black ">{title}</strong>
            </h3>
          <p className="text-white">{message}</p>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          onClick={handleCloseModal}
        >
          <div className="bg-black bg-opacity-75 p-4 rounded-lg shadow-lg">
            <img src={photo} alt="Modal Blog" className="max-h-screen" />
          </div>
        </div>
      )}

      {isDeleteModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-black bg-opacity-75 p-4 rounded-lg shadow-lg">
            <div className="text-white">
              <p>Are you sure you want to delete this blog?</p>
              <div className="mt-4 flex justify-end space-x-4">
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded"
                  onClick={handleDelete}
                >
                  Delete
                </button>
                <button
                  className="bg-gray-500 text-white px-4 py-2 rounded"
                  onClick={handleCloseDeleteModal}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

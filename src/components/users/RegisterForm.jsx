import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../Loading";

const RegisterForm = ({ onRegister }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();

    try {
      setLoader(true);
      const formData = new FormData();
      formData.append("username", username);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("fullName", fullName);
      if (avatar) {
        formData.append("avatar", avatar, avatar.name);
      }
      if (coverImage) {
        formData.append("coverImage", coverImage, coverImage.name);
      }

      const response = await axios.post(
        "https://traveltrackbackend-av1l.onrender.com/user/register",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Registration success:", response.data);
      localStorage.setItem(
        "userData",
        JSON.stringify(response.data.loggedInUser)
      );
      localStorage.setItem("id", response.data.loggedInUser._id);
      localStorage.setItem("user", response.data.loggedInUser.username);
      const accessToken = "use4tT0o0tTGigj$$##nvjfnoepevpewpwpw";

      if (accessToken) {
        localStorage.setItem("authToken", accessToken);
        onRegister(); // Update authentication state in App.jsx
        navigate("/home");
      } else {
        console.error("No authentication token received");
      }
      onRegister();
      setLoader(false);
      alert(response.data.message);
      navigate("/home");
    } catch (error) {
      console.error("Error registering user:", error);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Sorry, some issue occurred");
      }
    }
  };

  const handleAvatarChange = (event) => {
    setAvatar(event.target.files[0]);
  };

  const handleCoverImageChange = (event) => {
    setCoverImage(event.target.files[0]);
  };

  return (
    <>
      {loader ? (
        <>
        <Loading />
      </>
      ) : (
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full mt-5 mb-5 max-w-md">
            <h2 className="text-2xl font-bold mb-5 text-orange-700 text-center">
              Sign Up
            </h2>
            <form onSubmit={handleRegister}>
              <div className="mb-3">
                <label htmlFor="fullName" className="form-label text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="fullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="avatar" className="form-label text-gray-700">
                  Avatar
                </label>
                <input
                  type="file"
                  accept="image/*"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="avatar"
                  onChange={handleAvatarChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label text-gray-700">
                  Email
                </label>
                <input
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="username" className="form-label text-gray-700">
                  Username
                </label>
                <input
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="coverImage"
                  className="form-label text-gray-700"
                >
                  Cover Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="coverImage"
                  onChange={handleCoverImageChange}
                />
              </div>
              <button
                type="submit"
                className="bg-orange-700 hover:bg-orange-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              >
                Submit
              </button>
              <div className="mt-4 text-center">
                Already with us?
                <Link
                  to="/login"
                  className="text-orange-700 hover:underline ml-1"
                >
                  Login
                </Link>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default RegisterForm;

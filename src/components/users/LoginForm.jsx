import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = ({ isLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/user/login", {
        username,
        password,
      });

      // console.log("Login success:", response.data);
      toast.success(response.data.message);
      alert("Logged in successfully")
      console.log(response.data.loggedInUser);
      localStorage.setItem("userData", JSON.stringify(response.data.loggedInUser));
      localStorage.setItem("id",(response.data.loggedInUser._id));
      localStorage.setItem("user",(response.data.loggedInUser.username))
      const accessToken = response.data.accessToken;
      
      if (accessToken) {
        localStorage.setItem("authToken", accessToken);
        isLogin(); // Update authentication state in App.jsx
        navigate("/home");
      } else {
        console.log('No authentication token received');
      }
    } catch (error) {
      console.log(error);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message);
      } else {
        console.error("Unexpected error:", error);
        toast.error("Sorry, some issue occurred while login");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-5 text-orange-700 text-center">
          Log in
        </h2>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label
              htmlFor="exampleInputEmail1"
              className="form-label text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <br />
          <div className="mb-3">
            <label
              htmlFor="exampleInputPassword1"
              className="form-label text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="exampleInputPassword1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <input type="checkbox" required /> I am accepting the terms & conditions of TravelTrack
          </div>
          <br />
          <button
            type="submit"
            className="bg-orange-700 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            Submit
          </button>
        </form>
        <div className="mt-4 text-center">
          New? Please register{" "}
          <Link to="/register" className="text-orange-700 hover:underline ml-1">
            Register
          </Link>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default LoginForm;

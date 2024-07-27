import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
const Dashboard = ({ name }) => {
  const [names, setNames] = useState("");
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [avatar, setAvatar] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const navigate = useNavigate();
  const [followingCount, setFollowingCount] = useState(0);
  const [followerCount, setFollowerCount] = useState(0);
  const [tripLength, setTripLength] = useState(0);
  const [blogCounts, setBlogCounts] = useState(0);
  const [notification, setNotification] = useState("");

  const getdashboarddata = async () => {
    try {
      let loggedinuser_id = localStorage.getItem("id");
      console.log(loggedinuser_id);
      let response = await axios.post(
        "https://traveltrackbackend-av1l.onrender.com/Trips/gettingdashboardinfo",
        { loggedinuser_id }
      );
      response = response.data.data;
      setBlogCounts(response.blogcounts);
      setFollowerCount(response.followercount);
      setFollowingCount(response.followingcount);
      setTripLength(response.triplength);
      setNotification(response.notifications);
      console.log("Getting response in my dashboard");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
    location.reload();
    alert("Logged out successfully");
  };

  useEffect(() => {
    const retrivingdatafromlocalstorage = () => {
      const userDataString = localStorage.getItem("userData");
      if (userDataString) {
        const userData = JSON.parse(userDataString);
        // console.log("User Data:", userData.data.loggedInUser.username);
        setNames(userData.username);
        setEmail(userData.email);
        setFullname(userData.fullName);
        setAvatar(userData.avatar);
        setCoverImage(userData.coverImage);
      } else {
        console.log("No user data found in local storage");
      }
    };
    retrivingdatafromlocalstorage();
    getdashboarddata();
  }, []);

  const editName = () => {
    localStorage.setItem("Editto", "Username");
    navigate("/update");
  };
  const editEmail = () => {
    localStorage.setItem("Editto", "Email");
    navigate("/update");
  };
  const editFullname = () => {
    localStorage.setItem("Editto", "Fullname");
    navigate("/update");
  };

  return (
    <>
      <div className="min-h-screen flex flex-col items-center bg-gray-900 py-6">
        {coverImage && (
          <div
            className="w-full h-48 bg-cover bg-center"
            style={{ backgroundImage: `url(${coverImage})` }}
          />
        )}
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl mt-6">
          {avatar && (
            <img
              src={avatar}
              alt="User Avatar"
              className="w-24 h-24 rounded-full mx-auto -mt-16 border-4 border-white shadow-md"
            />
          )}
          <h1 className="text-2xl font-bold mb-4 text-orange-700 text-center mt-4">
            Dashboard
          </h1>
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Name: {names}
            </h2>
            <button
              className="bg-blue-500 text-white px-2 py-1 rounded"
              onClick={editName}
            >
              Edit
            </button>
          </div>
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Email: {email}
            </h2>
            <button
              className="bg-blue-500 text-white px-2 py-1 rounded"
              onClick={editEmail}
            >
              Edit
            </button>
          </div>
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Fullname: {fullname}
            </h2>
            <button
              className="bg-blue-500 text-white px-2 py-1 rounded"
              onClick={editFullname}
            >
              Edit
            </button>
          </div>

          <div className="bg-white shadow-md rounded-lg px-4 py-6">
            <p className="text-lg text-gray-700">
              Welcome to your dashboard! Here you can manage your account, view
              statistics, and more.
            </p>

            <div className="flex items-center justify-center">
              <div class="div h-[8em] w-[15em] mt-3 mb-3 mr-3 ml-3 bg-white m-auto rounded-[1em] overflow-hidden relative group p-2 z-0">
                <div class="circle absolute h-[5em] w-[5em] -top-[2.5em] -right-[2.5em] rounded-full bg-[#000000] group-hover:scale-[800%] duration-500 z-[-1] op"></div>

                <h1 class="z-20 font-bold font-Poppin group-hover:text-white duration-500 text-[1.4em]">
                  <div className="flex items-center justify-center">
                    <h2 className="text-2xl font-bold mb-2">My Trips</h2>{" "}
                  </div>
                  <div className="flex items-center justify-center">
                    <p className="text-xl">{tripLength}</p>
                  </div>
                </h1>
              </div>
              <div class="div h-[8em] w-[15em] mt-3 mb-3 mr-3 ml-3 bg-white m-auto rounded-[1em] overflow-hidden relative group p-2 z-0">
                <div class="circle absolute h-[5em] w-[5em] -top-[2.5em] -right-[2.5em] rounded-full bg-[#000000] group-hover:scale-[800%] duration-500 z-[-1] op"></div>

                <h1 class="z-20 font-bold font-Poppin group-hover:text-white duration-500 text-[1.4em]">
                  <div className="flex items-center justify-center">
                    <h2 className="text-2xl font-bold mb-2">My Posts</h2>{" "}
                  </div>
                  <div className="flex items-center justify-center">
                    <p className="text-xl">{blogCounts}</p>
                  </div>
                </h1>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div class="div h-[8em] w-[15em] mt-3 mb-3 mr-3 ml-3 bg-white m-auto rounded-[1em] overflow-hidden relative group p-2 z-0">
                <div class="circle absolute h-[5em] w-[5em] -top-[2.5em] -right-[2.5em] rounded-full bg-[#000000] group-hover:scale-[800%] duration-500 z-[-1] op"></div>

                <h1 class="z-20 font-bold font-Poppin group-hover:text-white duration-500 text-[1.4em]">
                  <div className="flex items-center justify-center">
                    <h2 className="text-2xl font-bold mb-2">Following</h2>{" "}
                  </div>
                  <div className="flex items-center justify-center">
                    <p className="text-xl">{followingCount}</p>
                  </div>
                </h1>
              </div>
              <div class="div h-[8em] w-[15em] mt-3 mb-3 mr-3 ml-3 bg-white m-auto rounded-[1em] overflow-hidden relative group p-2 z-0">
                <div class="circle absolute h-[5em] w-[5em] -top-[2.5em] -right-[2.5em] rounded-full bg-[#000000] group-hover:scale-[800%] duration-500 z-[-1] op"></div>

                <h1 class="z-20 font-bold font-Poppin group-hover:text-white duration-500 text-[1.4em]">
                  <div className="flex items-center justify-center">
                    <h2 className="text-2xl font-bold mb-2">
                      {" "}
                      <div class="div h-[8em] w-[15em] bg-white m-auto rounded-[1em] overflow-hidden relative group p-2 z-0">
                        <div class="circle absolute h-[5em] w-[5em] -top-[2.5em] -right-[2.5em] rounded-full bg-[#000000] group-hover:scale-[800%] duration-500 z-[-1] op"></div>

                        <h1 class="z-20 font-bold font-Poppin group-hover:text-white duration-500 text-[1.4em]">
                          <div className="flex items-center justify-center">
                            <h2 className="text-2xl font-bold mb-2">
                              Collaboraters
                            </h2>{" "}
                          </div>
                          <div className="flex items-center justify-center">
                            <p className="text-xl">{followerCount}</p>
                          </div>
                        </h1>
                      </div>
                    </h2>{" "}
                  </div>
                  <div className="flex items-center justify-center">
                    <p className="text-xl">{blogCounts}</p>
                  </div>
                </h1>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div class="div h-[8em] w-[15em] mt-3 mb-3 mr-3 ml-3 bg-white m-auto rounded-[1em] overflow-hidden relative group p-2 z-0">
                <div class="circle absolute h-[5em] w-[5em] -top-[2.5em] -right-[2.5em] rounded-full bg-[#FF5800] group-hover:scale-[800%] duration-500 z-[-1] op"></div>

                <h1 class="z-20 font-bold font-Poppin group-hover:text-white duration-500 text-[1.4em]">
                  <div className="flex items-center justify-center">
                    <h2 className="text-2xl font-bold mb-2">
                      Active Notifications
                    </h2>{" "}
                  </div>
                  <div className="flex items-center justify-center">
                    <p className="text-xl">{notification}</p>
                  </div>
                </h1>
              </div>
            </div>
            <div className="flex items-center justify-center mt-4">
              
            <button class="group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-rose-300 relative bg-neutral-800 h-16 w-64 border text-left p-3 text-gray-50 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg mr-56">
                <Link to="/mycollablists">
                  My Collaborators
                </Link>
              </button>
              <button class="group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-rose-300 relative bg-neutral-800 h-16 w-64 border text-left p-3 text-gray-50 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg">
                <Link to="/myfollowinglist">
                  My Following
                </Link>
              </button>
            </div>
          </div>
          <div>
            <br />
            <button
              type="button"
              onClick={handleLogout}
              className="btn btn-danger"
            >
              Logout
            </button>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default Dashboard;

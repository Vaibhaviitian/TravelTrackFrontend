import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const [ischeck, setIscheck] = useState("");
  const check_verification = async () => {
    try {
      const id = localStorage.getItem("id");
      var response = await axios.post(
        "http://localhost:3000/user/cheking-agent",
        {
          id,
        }
      );
      console.log(response);
      response = response.data.data;
      setIscheck(response);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    console.log("aaye sajna ji");
    check_verification();
  }, []);
  return (
    <div className="mx-auto w-full max-w-7xl">
      {ischeck ? (
        <>
          <div class="bg-gradient-to-r from-purple-500 to-indigo-500 text-black p-8 rounded-lg shadow-lg flex items-center justify-between">
            <div>
              <h2 class="text-2xl font-bold mb-2">
                Thank You for Joining us as a Travel Agent!
              </h2>
              <p class="text-lg mb-4" style={{fontWeight:'bolder'}}>
                We are grateful to have you as a part of our platform. Your
                dedication and expertise help travelers have incredible
                experiences. Keep up the great work, and let's continue to
                create unforgettable journeys together!
              </p>
              <div className="flex items-center justify-between">
                <Link class="bg-white text-purple-500 font-bold py-2 px-4 rounded hover:bg-gray-100 transition duration-300 mr-3" to='/mytrips'>
                  Manage Your Trips
                </Link>
                <Link class="bg-white text-purple-500 font-bold py-2 mr-10 px-4 rounded hover:bg-gray-100 transition duration-300" to="/createtrip">
                  Create more trips to enhance user travel experiences. 
                </Link>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1553073520-80b5ad5ec870?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbW11bml0eSUyMHN1cHBvc3J0fGVufDB8fDB8fHww"
                alt="Grateful Agent"
                style={{ objectFit: "cover" }}
                className="w-max h-48 rounded-3xl"
              />
            </div>
          </div>
        </>
      ) : (
        <>
          <div class="bg-gradient-to-r from-blue-500 to-green-500 text-black p-8 rounded-lg shadow-lg flex items-center justify-between">
            <div>
              <h2 class="text-2xl font-bold mb-2">
                Become a Verified Travel Agent
              </h2>
              <p class="text-lg mb-4" style={{ fontWeight: "bolder" }}>
                Join our platform as a verified travel agent and gain exclusive
                access to create and manage trips. Enjoy the benefits of
                enhanced credibility and trust from travelers. Get verified
                today and start earning with our paid agent program!!
              </p>
              <div>
                {" "}
                <NavLink
                  class="bg-white text-blue-500 font-bold py-2 px-4 rounded hover:bg-gray-100 transition duration-300"
                  to="/agentverification-via-OTP"
                >
                  <button class="inline-block py-2 px-6 rounded-l-xl rounded-t-xl bg-[#46311f] hover:bg-white hover:text-[#7747FF] focus:text-[#7747FF] focus:bg-gray-200 text-gray-50 font-bold leading-loose transition duration-200">
                    Get Verified Now
                  </button>
                </NavLink>
              </div>
            </div>
            <div>
              <img
                src="https://media.istockphoto.com/id/1332358775/photo/young-couple-shaking-hands-deal-contract-real-estate-investment-business-agreement-agent.webp?b=1&s=170667a&w=0&k=20&c=VqF0JlBFzgCd8gn8lDW7yAEhlPO9RpI0g1Lx2k_Z-j8="
                alt="Travel Agent"
                class="max-w-96 h-48 rounded-3xl shadow-lg"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </>
      )}

      <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
        <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
            <h2 className="text-4xl font-bold sm:text-5xl">
              Explore Trips
              <span className="hidden sm:block text-4xl">
                Collaborate with friends{" "}
              </span>
              <span className="hidden sm:block text-4xl">
                Select Trips on the basis of Rating{" "}
              </span>
            </h2>

            <Link
              className="inline-flex text-white items-center px-6 py-3 font-medium bg-[#050C9C] rounded-lg hover:opacity-75"
              to="/exploretrips"
            >
              Let's Explore Trips
            </Link>
          </div>
        </div>
        <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
          <img
            className="w-96"
            src="https://i.ibb.co/5BCcDYB/Remote2.png"
            alt="image1"
          />
        </div>
      </aside>

      <div className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
        <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8 flex flex-col-reverse sm:flex-row items-center">
          <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-left sm:ml-auto">
            <h2 className="text-4xl font-bold sm:text-5xl">
              Explore Community
              <span className="hidden sm:block text-3xl">
                Interact with TravelTrack Community
              </span>
              <span className="hidden sm:block text-3xl">
                Assist users in retrieving lost items through Lost and Found
              </span>
            </h2>

            <Link
              className="inline-flex text-white items-center px-6 py-3 font-medium bg-[#201E43] rounded-lg hover:opacity-75"
              to="/community"
            >
              Let's Explore Community
            </Link>
          </div>
          <div className="relative sm:ml-12 w-full h-full">
            <img
              className="w-full h-max max-w-xs mx-auto rounded-2xl sm:ml-auto"
              src="https://plus.unsplash.com/premium_photo-1661719880750-4c0de579cd09?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8RnJpZW5kc3xlbnwwfHwwfHx8MA%3D%3D"
              alt="Community"
            />
          </div>
        </div>
      </div>

      <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
        <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
            <h2 className="text-4xl font-bold sm:text-5xl">
              Review Dashboard
              <span className="hidden sm:block text-4xl">
                See all activities
              </span>
              <span className="hidden sm:block text-4xl">
                Edit username or email
              </span>
            </h2>

            <Link
              className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
              to="/dashboard"
            >
              Dashboard
            </Link>
          </div>
        </div>
        <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
          <img
            className="w-96 rounded-2xl"
            src="https://media.istockphoto.com/id/1488294044/photo/businessman-works-on-laptop-showing-business-analytics-dashboard-with-charts-metrics-and-kpi.webp?b=1&s=170667a&w=0&k=20&c=BNF7gZ3XmCEf0_H8bUb6TLOvrDPVOmrEzbuu8FZrOao="
            alt="image1"
          />
        </div>
      </aside>

      <div className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
        <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8 flex flex-col-reverse sm:flex-row items-center">
          <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center mr-96 sm:text-left sm:ml-auto">
            <h2 className="text-3xl font-bold sm:text-5xl">
              Want Assistance.
              <span className="hidden sm:block text-3xl">
                Talk with Chatbot
              </span>
            </h2>

            <Link
              className="inline-flex text-white items-center px-6 py-3 font-medium bg-[#4B4A67] rounded-lg hover:opacity-75"
              to="/aiassitant"
            >
              Let's Explore Chatbot
            </Link>
          </div>
          <div className="relative sm:ml-12 w-full h-full">
            <img
              className="w-full h-max max-w-xs mx-auto rounded-2xl sm:ml-auto"
              src="https://plus.unsplash.com/premium_photo-1677094310956-7f88ae5f5c6b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2hhdCUyMHdpdGglMjBhaXxlbnwwfHwwfHx8MA%3D%3D"
              alt="Community"
            />
          </div>
        </div>
      </div>

      <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
        <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
            <h2 className="text-4xl font-bold sm:text-5xl">
              Notifications
              <span className="hidden sm:block text-3xl">
                See all Notifications
              </span>
              <span className="hidden sm:block text-3xl">Make friends</span>
            </h2>

            <Link
              className="inline-flex text-white items-center px-6 py-3 font-medium bg-[#7A3B69] rounded-lg hover:opacity-75"
              to="/notification"
            >
              My Notifications
            </Link>
          </div>
        </div>
        <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
          <img
            className="w-96 rounded-2xl"
            src="https://media.istockphoto.com/id/1351359510/photo/red-danger-alarm-bell-on-white-background.webp?b=1&s=170667a&w=0&k=20&c=SWTxebFLgvS1MX67N9rq0vrZ5uyzPH5XMq5CT4VlZL8="
            alt="image1"
          />
        </div>
      </aside>
      <ToastContainer />
    </div>
  );
}

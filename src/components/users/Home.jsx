import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl">
      <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
        <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
            <h2 className="text-4xl font-bold sm:text-5xl">
              Explore Trips
              <span className="hidden sm:block text-4xl">
                Collaborate with  friends{" "}
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
              <span className="hidden sm:block text-3xl">
                Make friends
              </span>
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

    </div>
  );
}

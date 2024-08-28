import React, { useEffect, useState } from "react";
import Tripcard from "./Tripcard";
import axios from "axios";
import Loading from "../Loading";
import { Link } from "react-router-dom";

const ExploreTrips = () => {
  const [data, setData] = useState([]);
  let id = localStorage.getItem("id");

  useEffect(() => {
    const getalltrips = async () => {
      try {
        console.log("Hello");
        let response = await axios.get(
          "https://traveltrackbackend-av1l.onrender.com/Trips/gettingalltrips"
        );
        response = response.data.data;
        setData(response);
      } catch (error) {
        console.log(error);
      }
    };

    getalltrips();
  }, []);

  return (
    <>
      <div className="bg-[#3C3D37] p-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-[#3C3D37]">
          {data.length > 0 ? (
            data.map((fieldobject) => (
              <Tripcard
                id={fieldobject._id}
                startDate={fieldobject.startDate}
                endDate={fieldobject.endDate}
                tripName={fieldobject.tripName}
                createdAt={fieldobject.createdAt}
                destination={fieldobject.destination}
                activities={fieldobject.activities}
                accommodation={fieldobject.accommodation}
                avatarimage={fieldobject.user.avatar}
                username={fieldobject.user.username}
                isusertrip={id === fieldobject.user._id}
                follower_userid={fieldobject.user._id}
                isverified={fieldobject.user.isverified}
              />
            ))
          ) : (
            <>
              <Loading />
            </>
          )}
        </div>
        <div className="p-4 border border-orange rounded-lg shadow-lg bg-black">
          <h2 className="text-lg font-semibold mb-2 text-center text-[#C0C78C]">
            Want to see more trips?
          </h2>
          <p className="mb-4 text-center text-[#C0C78C]">
            Based on your rating and preferences, we have some great
            recommendations for you!
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <Link class="relative inline-flex h-12 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none" to='/Ai-recommendations'>
              <span class="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]"></span>
              <span class="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 undefined">
                See some Recommendations
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 448 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"></path>
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExploreTrips;

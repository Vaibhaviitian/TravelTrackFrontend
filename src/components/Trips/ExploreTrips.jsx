import React, { useEffect, useState } from "react";
import Tripcard from "./Tripcard";
import axios from "axios";

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
        console.log("Data is coming as:", response);
      } catch (error) {
        console.log(error);
      }
    };

    getalltrips();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
          />
        ))
      ) : (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div
            className="spinner-border text-orange-500"
            role="status"
            style={{ width: "5rem", height: "5rem" }}
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExploreTrips;

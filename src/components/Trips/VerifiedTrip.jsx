import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../Loading";
import Tripcardforverifieduser from "./Tripcardforverifieduser";

function VerifiedTrip() {
  const [data, setData] = useState([]);
  const id = localStorage.getItem('id');

  const getusertrips = async () => {
    try {
      let response = await axios.get(
        `https://traveltrackbackend-av1l.onrender.com/Trips/gettingalltrips`
      );
      console.log(response)
      let trips = response.data.data;
      setData(trips);
    } catch (error) {
      console.log(error.response.data.message);
      console.log("Error is ", error);
    }
  };

  useEffect(() => {
    getusertrips();
    console.log("setting function done");
  }, []);

  useEffect(() => {
    console.log("Updated data", data);
  }, [data]);

  return (
  <>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {data.length > 0 ? (
        data.map((fieldobject) => (
          <Tripcardforverifieduser
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
  </>
  );
}

export default VerifiedTrip;

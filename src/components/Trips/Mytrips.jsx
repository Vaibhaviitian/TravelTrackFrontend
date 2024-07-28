import axios from "axios";
import React, { useEffect, useState } from "react";
import Tripcard from "./Tripcard";
import { useNavigate } from "react-router-dom";

function Mytrips() {
  let id = localStorage.getItem('id');
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const handleCreatePost = () => {
    navigate("/createtrip");
  };

  const getusertrips = async () => {
    const id = localStorage.getItem("id");
    if (!id) {
      console.log("Having error in taking id from local storage");
      return;
    }

    try {
      let response = await axios.get(`https://traveltrackbackend-av1l.onrender.com/Trips/usertripsbyid/${id}`);
      let trips = response.data.data.trips;
      setData(trips);
      let avatar = response.data.data.avatar;
      localStorage.setItem("url", avatar);
      console.log(response.data.data.avatar);
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
    <div>
      {data.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {data.map((fieldobject) => (
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
              isusertrip={id===fieldobject.user}
            />
          ))}
        </div>
      ) : (
        <div className="min-h-screen flex items-center justify-center bg-black">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">
               You did not have created any trips
            </h1>
            <p className="text-lg mb-8">
              Create your first Trips and Collaborate with your Friends!
            </p>
            <button
              className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-300"
              onClick={handleCreatePost}
            >
              Create Your Trips
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Mytrips;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TripPlanner = () => {
  const [tripName, setTripName] = useState("");
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [activities, setActivities] = useState("");
  const [accommodation, setAccommodation] = useState("");
  const [budget, setBudget] = useState("");
  const navigate = useNavigate();
  const userId = localStorage.getItem("id"); // Assuming your user ID is stored in localStorage

  const handleCreateTrip = async () => {
    try {
      const response = await axios.post(
        "https://traveltrackbackend-av1l.onrender.com/Trips/creatingnewtrips",
        {
          tripName,
          destination,
          startDate,
          endDate,
          activities,
          accommodation,
          budget,
          user_id: userId,
        }
      );

      // console.log(response.data); // Logging the response data
      alert("Trip created successfully");
      navigate("/mytrips");
    } catch (error) {
      console.error("Error creating trip:", error);
      alert(`Failed to create trip. Please try again ${error.response.data.message}`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800">
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-white text-center text-2xl font-bold mb-6">
          Create Trip & invite your friends
        </h2>
        <div className="mb-4">
          <label className="block text-white">Trip Name:</label>
          <input
            type="text"
            className="w-full py-2 px-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
            value={tripName}
            onChange={(e) => setTripName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-white">Destination:</label>
          <input
            type="text"
            className="w-full py-2 px-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-white">Start Date:</label>
          <input
            type="date"
            className="w-full py-2 px-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-white">End Date:</label>
          <input
            type="date"
            className="w-full py-2 px-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-white">Activities:</label>
          <textarea
            className="w-full py-2 px-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
            value={activities}
            onChange={(e) => setActivities(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-white">Accommodation:</label>
          <input
            type="text"
            className="w-full py-2 px-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
            value={accommodation}
            onChange={(e) => setAccommodation(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-white">Budget:</label>
          <input
            type="number"
            className="w-full py-2 px-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          />
        </div>
        <button
          className="w-full py-2 px-4 bg-white text-black rounded-md hover:bg-gray-300 focus:outline-none focus:bg-gray-300"
          onClick={handleCreateTrip} // Use onClick instead of onSubmit
        >
          Create Your Trip
        </button>
      </div>
    </div>
  );
};

export default TripPlanner;

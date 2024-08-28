import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "../Loading.jsx";

function Airecommendations() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getresponse = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://traveltrackbackend-av1l.onrender.com/Trips/recommendation-of-Trips"
      );
      setData(response.data.data); // Update state with fetched data
    } catch (error) {
      console.error("Error fetching trip recommendations:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getresponse();
  }, []);

  return (
    <>
      <div className="bg-[#3C3D37] p-10">
        <h1 className="text-3xl font-extrabold text-white text-center mb-8">
          Trip Recommendations
        </h1>
        <div className="p-4">
          {loading ? (
            <Loading />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.map((trip) => (
                <div
                  key={trip.trip_id}
                  className="bg-[#FFF8E8] shadow-md rounded-lg p-4"
                >
                  <h2 className="text-xl font-bold mb-2">{trip.tripName}</h2>
                  <p className="text-gray-700 mb-2">
                    <strong>Destination:</strong> {trip.destination}
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Accommodation:</strong> {trip.accommodation}
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Transportation:</strong> {trip.transportation}
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Budget:</strong> ${trip.budget}
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Dates:</strong> {trip.startDate} - {trip.endDate}
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Notes:</strong> {trip.notes}
                  </p>
                  <div className="mb-2">
                    <strong>Activities:</strong>
                    <ul className="list-disc ml-5">
                      {trip.activities.map((activity, index) => (
                        <li key={index} className="text-gray-700">
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Airecommendations;

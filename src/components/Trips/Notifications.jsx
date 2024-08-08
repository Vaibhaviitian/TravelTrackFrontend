import React, { useEffect, useState } from "react";
import NotificationCard from "./NotificationCard";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Notifications() {
  const [data, setData] = useState([]);

  // Running API here
  const getNotifications = async () => {
    try {
      let id = localStorage.getItem("id");
      if (!id) {
        console.log("Id is not available in notifications handling");
        return;
      }

      let response = await axios.get(
        `http://localhost:3000/Trips/gettingnotificationsbyid/${id}`
      );

      setData(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.log(error.response.data.message);
      toast.error(error.response.data.message);
    }
  };

  const [notification, setNotification] = useState("");
  const getdashboarddata = async () => {
    try {
      let loggedinuser_id = localStorage.getItem("id");
      console.log(loggedinuser_id);
      let response = await axios.post(
        "http://localhost:3000/Trips/gettingdashboardinfo",
        { loggedinuser_id }
      );
      response = response.data.data;
      setNotification(response.notifications);
      console.log("Getting response in my dashboard");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getNotifications();
    getdashboarddata();
  }, []);

  return (
    <div className="flex min-h-screen">
      <div className="flex-1 bg-gray-600"></div>
      <div className="flex-1 bg-black flex justify-center items-center">
        <div className="space-y-4">
          {notification > 0 ? (
            data.map((notification) => (
              <NotificationCard
                Name={notification.following_userid.username}
                avatar={notification.following_userid.avatar}
                email={notification.following_userid.email}
                createdat={notification.createdAt}
                following_userid={notification.following_userid._id}
                follower_userid={notification.follower_userid}
                isrender={notification.pendingrequest}
                collabdocid={notification._id}
              />
            ))
          ) : (
            <div class="relative drop-shadow-xl w-64   h-64 overflow-hidden rounded-xl bg-[#b51cb5]">
              <div class="absolute flex items-center justify-center text-white z-[1] opacity-90 rounded-xl inset-0.5 bg-[#323132]">
                <span className="text-2xl">No notifications..... </span>
              </div>
              <div class="absolute w-56 h-48 bg-white blur-[50px] -left-1/2 -top-1/2"></div>
            </div>
          )}
        </div>
      </div>
      <div className="flex-1 bg-gray-600"></div>
    </div>
  );
}

export default Notifications;

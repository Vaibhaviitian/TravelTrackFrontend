import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./Layout";
import {
  About,
  Contact,
  Update,
  Welcome,
  RegisterForm,
  LoginForm,
  ProtectedRoute,
  Header,
  Home,
  Dashboard,
  PrivacyPolicy,
  Footer,
} from "./components/users/usersexport.js";
import {
  Community,
  CreatePosts,
  LostandFound,
  Userposts,
} from "./components/community/postsexports.js";
import {
  ExploreTrips,
  Mytrips,
  Notifications,
  TripPlanner,
} from "./components/Trips/tripsexport.js";
import ChatBotCard from "./components/AIbotchat/AIbotchat.jsx";
import Showcollabandfollowindcard from "./components/users/Showcollabandfollowindcard.jsx";
import SHowfollowing from "./components/users/Showfollowing.jsx";
import Otpverification from "./components/OTP/Otpverification.jsx";
import OTP from "./components/UI/OTP.jsx";
import OtpInputCard from "./components/OTP/Otpenter.jsx";
import Success from "./components/UI/Success.jsx";
import VerifiedTrip from "./components/Trips/VerifiedTrip.jsx";
import Otpload from "./components/UI/Otpload.jsx";
import Airecommendations from "./components/AIbotchat/Airecommendations.jsx";

function App() {
  const [isAuthenticate, setIsAuthenticate] = useState(false);

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    if (authToken) {
      setIsAuthenticate(true);
    } else {
      setIsAuthenticate(false);
    }
  }, []);

  const handleLogin = () => {
    const authToken = localStorage.getItem("authToken");
    if (authToken) {
      setIsAuthenticate(true);
    } else {
      setIsAuthenticate(false);
    }
  };

  const handleRegister = () => {
    setIsAuthenticate(true);
  };

  return (
    <Router>
      <Layout>
        <Header check={isAuthenticate} />
        <Routes>
          <Route
            path="/"
            element={<Welcome setIsAuthenticate={setIsAuthenticate} />}
          />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/login" element={<LoginForm isLogin={handleLogin} />} />
          <Route path="/update" element={<Update />} />
          <Route
            path="/register"
            element={<RegisterForm onRegister={handleRegister} />}
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute Component={Dashboard} check={isAuthenticate} />
            }
          />
          <Route
            path="/home"
            element={<ProtectedRoute Component={Home} check={isAuthenticate} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/community"
            element={
              <ProtectedRoute Component={Community} check={isAuthenticate} />
            }
          />
          <Route
            path="/create-posts"
            element={
              <ProtectedRoute Component={CreatePosts} check={isAuthenticate} />
            }
          />
          <Route
            path="/myposts"
            element={
              <ProtectedRoute Component={Userposts} check={isAuthenticate} />
            }
          />
          <Route
            path="/lostandfound"
            element={
              <ProtectedRoute Component={LostandFound} check={isAuthenticate} />
            }
          />
          <Route
            path="/createtrip"
            element={
              <ProtectedRoute Component={TripPlanner} check={isAuthenticate} />
            }
          />
          <Route
            path="/exploretrips"
            element={
              <ProtectedRoute Component={ExploreTrips} check={isAuthenticate} />
            }
          />
          <Route
            path="/mytrips"
            element={
              <ProtectedRoute Component={Mytrips} check={isAuthenticate} />
            }
          />
          <Route
            path="/notification"
            element={
              <ProtectedRoute
                Component={Notifications}
                check={isAuthenticate}
              />
            }
          />
          <Route
            path="/verified-trips"
            element={
              <ProtectedRoute Component={VerifiedTrip} check={isAuthenticate} />
            }
          />
          <Route
            path="/aiassitant"
            element={
              <ProtectedRoute Component={ChatBotCard} check={isAuthenticate} />
            }
          />
          <Route
            path="/mycollablists"
            element={
              <ProtectedRoute
                Component={Showcollabandfollowindcard}
                check={isAuthenticate}
              />
            }
          />
          <Route
            path="/myfollowinglist"
            element={
              <ProtectedRoute
                Component={SHowfollowing}
                check={isAuthenticate}
              />
            }
          />
          <Route
            path="/agentverification-via-OTP"
            element={
              <ProtectedRoute
                Component={Otpverification}
                check={isAuthenticate}
              />
            }
          />
          <Route
            path="/checking-OTP"
            element={
              <ProtectedRoute Component={OtpInputCard} check={isAuthenticate} />
            }
          />
          <Route
            path="/confirmandverified-OTP"
            element={
              <ProtectedRoute Component={Success} check={isAuthenticate} />
            }
          />
          <Route
            path="/Ai-recommendations"
            element={
              <ProtectedRoute
                Component={Airecommendations}
                check={isAuthenticate}
              />
            }
          />
        </Routes>

        <Footer />
        <ToastContainer />
      </Layout>
    </Router>
  );
}

export default App;

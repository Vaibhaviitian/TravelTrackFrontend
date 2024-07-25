import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ Component, check ,setCheck}) => {
  console.log(check);
  return check ? <Component name={setCheck}/> : <Navigate to="/login" />;
};

export default ProtectedRoute;

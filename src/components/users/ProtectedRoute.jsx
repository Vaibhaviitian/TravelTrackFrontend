import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ Component, check }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>; // or a spinner/loading component
  }

  return check ? <Component /> : <Navigate to="/login" />;
};

export default ProtectedRoute;

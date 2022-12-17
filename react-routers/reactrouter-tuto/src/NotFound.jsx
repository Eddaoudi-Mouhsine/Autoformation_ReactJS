import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/", {state:"error no result"});
      {
        /* navigate("/") redirect u to /, -1 take u the previous page , */
      }
    }, 1000);
  }, []);

  return (
    <div>
      {/* <Navigate to="/" /> */}
      <h1>Not Found</h1>
    </div>
  );
};

export default NotFound;

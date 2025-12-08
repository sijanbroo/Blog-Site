import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function AuthLayout({ children, authentication = true }) {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    // If authentication is required and user is not authenticated
    if (authentication && authStatus !== authentication) {
      navigate("/login");
    }
    // If authentication is not required (login/signup pages) and user is authenticated
    else if (!authentication && authStatus !== authentication) {
      navigate("/");
    }

    // Set loader to false after checking auth status
    setLoader(false);
  }, [navigate, authStatus, authentication]);

  return loader ? <h1>Loading...</h1> : <>{children}</>;
}

export default AuthLayout;

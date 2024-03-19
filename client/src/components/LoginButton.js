import React from "react";
import login from "../login";
import LoginHeader from "./LoginHeader";
import "./Button.css";
import { useNavigate } from "react-router-dom";

const LoginButton = () => {
  const navigate = useNavigate(); // Declare history using the useHistory hook

  const handleLogin = () => {
    login();
    // navigate("/home");
  };

  return (
    <>
      <LoginHeader />
      <button className="Login-button" onClick={handleLogin}>
        Login
      </button>
    </>
  );
};

export default LoginButton;

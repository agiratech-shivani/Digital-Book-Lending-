import React from "react";
import login from "../login";

const LoginButton = () => {
  const handleLogin = () => {
    login();
  };

  return <button onClick={handleLogin}>Login with Microsoft</button>;
};

export default LoginButton;
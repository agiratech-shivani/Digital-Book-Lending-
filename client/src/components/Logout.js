import React from "react";
import logout from "../logout";

const LogoutButton = () => {
  const handleLogin = () => {
    logout();
  };

  return <button onClick={handleLogin}>Logout</button>;
};

export default LogoutButton;

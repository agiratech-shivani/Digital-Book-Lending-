//import ReactDOM from "react-dom/client";
//import React from "react";
//import login from "./login";
//import logout from "./logout";

//const Button = () => {
  //return <button onClick={login}>login with microsoft</button>;
//};
// const LogoutButton = () => {
//     return <button onClick={logout}>log Out</button>;
//   };

//const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<Button />);
//root.render(<LogoutButton />);
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom"
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
   
  </React.StrictMode>
);
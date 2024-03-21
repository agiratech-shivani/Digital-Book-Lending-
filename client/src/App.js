import React from "react";

//import LoginButton from "./components/LoginButton";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Books from "./components/Books";
import BookDetail from "./components/BookDetail";
import AddBook from "./components/AddBook";
import LoginButton from "./components/LoginButton";
import RequestManagement from "./components/RequestManagement";
import 'bootstrap/dist/css/bootstrap.min.css';

//import LoginPage from "./components/LoginPage";
const App = () => {


  let isLoggedIn=false;

      if(localStorage.getItem("employee-id")){
          isLoggedIn = true;
         }
  return (
    <React.Fragment>
      <main>
        <Routes>
          <Route exact path='/' Component={LoginButton}/>
          <Route path="/home" element={<Home data={isLoggedIn}/>} exact />
          <Route path="/add" element={<AddBook data/>} exact />
          <Route path="/books" element={<Books />} exact />
          <Route path="/books/:id" element={<BookDetail />} exact />
          <Route path="/requests" element={<RequestManagement/>} exact />
          {/* <Route path="/login" element={<LoginPage/>} /> */}
        </Routes>
      </main>
    </React.Fragment>
  );
};



export default App;

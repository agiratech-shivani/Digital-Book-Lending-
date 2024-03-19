import React from "react";
import Header from "./Header";
import login from "../login";
import "./Button.css";
import LoginHeader from "./LoginHeader";
import image1 from "./book1.png";
import image2 from "./book2.png";
import { Link,Outlet } from "react-router-dom";
import "./Home.css";

const Home = ({ data }) => {
  return !data ? (
    <>
      <LoginHeader />
      <button className="Login-button" onClick={login}>
        proceed after login
      </button>
    </>
  ) : (
    <>
      <Header />
      <h1>Lend Books With Ease</h1>

      <div className="image-container">
        <div className="text1">
          <p class=" font-bold text-5xl ph:text-3xl ">
            Agira's Online
            <br /> Book lending
          </p>
        </div>
        <div className="img1">
          <img className="firstimage" src={image1} />
        </div>
      </div>

      <div className="button-container">
        <div className="text2">
          <p class=" font-bold text-5xl ph:text-3xl ">
            Trending Books
            <br />
            Best of Technology
          </p>
        </div>
        <Link to="/books">
          {" "}
          <button className="img2 button" onclick>
            Books
          </button>
        </Link>
      </div>

      <div className="image2-container-new ">
        <div className="text3">
          <p class=" font-bold text-5xl ph:text-2xl">
            Spread The Joy Of<br /> 
            
            {/* Let the pages that inspire you inspire the next generation of
            readers. <br /> */}
           Reading. Add your <br />favourite books to our<br /> library
          </p>
        </div>
        <div className="img3">
          <img src={image2} />
        </div>
      </div>
      <Outlet/>
    </>
  );
};

export default Home;

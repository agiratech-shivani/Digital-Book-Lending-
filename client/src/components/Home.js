import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Home.css";
import Header from "./Header";
import LoginHeader from "./LoginHeader";
import login from "../login";
import image1 from "./b2.jpg";
import image2 from "./b1.jpg";

const Home = ({ data }) => {
  return !data ? (
    <>
      <LoginHeader />
      <button className="login-button" onClick={login}>
        Proceed after Login
      </button>
    </>
  ) : (
    <>
      <Header />
      <div className="container">
        <section className="intro-section">
          <div className="text">
            <h1>Welcome to Agira's Online Book Lending</h1>
            <p>Discover a vast collection of books at your fingertips</p>
            <Link to="/books" className="button">
              Explore Books
            </Link>
          </div>
          <div className="image-container">
            <img src={image1} alt="Book" className="intro-image" />
          </div>
        </section>

        <section className="trending-section">
          <div className="image-container">
            <img src={image2} alt="Book" className="trending-image" />
          </div>
          <div className="text">
            <h2>Trending Books</h2>
            <p>Discover the latest and most popular books</p>
            <Link to="/books" className="button">
              View Trending Books
            </Link>
          </div>
        </section>

        <section className="joy-section">
          <div className="text">
            <h2>Spread The Joy Of Reading</h2>
            <p>Add your favorite books to our library</p>
            <Link to="/add" className="button">
              Add Books
            </Link>
          </div>
          <div className="image-container">
            <img src={image1} alt="Book" className="joy-image" />
          </div>
        </section>
      </div>
      <Outlet />
    </>
  );
};

export default Home;

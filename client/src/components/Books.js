import React, { useEffect, useState } from "react";
import axios from "axios";
import Book from "./Book";
import "./Book.css";
import Header from "./Header";

const URL = "http://localhost:5000/books";


const fetchHandler = async () => {
  try {
    const userId = localStorage.getItem("objectId");
    const query = new URLSearchParams({ userId }).toString();
    const response = await axios.get(URL + "?" + query);
    console.log("Response Data:", response.data); // Log response data
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return []; // Return an empty array in case of error
  }
};

const Books = () => {
  const [book, setBook] = useState([]);

  useEffect(() => {
    fetchHandler().then((data) => setBook(data.book));
  }, []);
  console.log(book);

  return (
    <>
      <Header />
      <div>
        <h1 style={{ textAlign: "center" }}>Available Books</h1>
        <ul>
          {book &&
            book.map((book, i) => (
              <li key={i}>
                <Book book={book} />
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default Books;

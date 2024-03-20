import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./BookDetail.css";
import Header from "./Header";

const BookDetail = () => {
  //const { title, image, author, owner, publisher, reviews } = props.book;
  const bookId = useParams().id;
  const [book, setBook] = useState(null);
  const [review, setReview] = useState({
    reviewer: localStorage.getItem("name"),
    rating: "",
    comment: "",
  });
  const [ownermail, setOwnermail] = useState(""); // State to store the requester's email
  const [requester, setRequester] = useState(localStorage.getItem("objectId"));
  const [requestMessage, setRequestMessage] = useState(""); // State to hold the request message

  // let data = {};
  //console.log(bookId);

  useEffect(() => {
    const fetchBook = async () => {
      const res = await axios.get(`http://localhost:5000/books/${bookId}`);
      console.log(res);
      setBook(res.data?.book);
    };
    fetchBook();
  }, [bookId]);
  console.log("book", book);

  const fetchOwnerEmail = async () => {
    try {
      // Replace this with your endpoint to fetch the requester's email
      const response = await axios.get(`http://localhost:5000/books/${bookId}`);
      setOwnermail(response.data.owner.mail); // Assuming the email is available in response.data.email
    } catch (error) {
      console.error("Error fetching requester's email:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReview((prevReview) => ({ ...prevReview, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:5000/books/${bookId}/reviews`, review);
      // Optionally, you can update the book details to reflect the new review
      // Fetch the book again to get the updated details
      const response = await axios.get(`http://localhost:5000/books/${bookId}`);
      setBook(response.data?.book);
      // Reset the review form
      setReview({ reviewer: "", rating: "", comment: "" });
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  const handleRequest = async () => {
    try {
      // const objectId = localStorage.getItem("objectId");
      // // const requester="";
      // setRequester(objectId);
      const requestData = { bookId, ownermail, requester };
      await axios.post("http://localhost:5000/requests", requestData);
      setRequestMessage("Request sent successfully!"); // Update the request message state
      // Optionally, you can update the UI or show a message indicating that the request is sent
    } catch (error) {
      console.error("Error sending request:", error);
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        {book ? (
          <div className="book-details">
            <div className="content">
              <img className="ImageViewer" src={book.image} alt={book.author} />
              <h2>{book.title}</h2>
              <p>By {book.author}</p>
              <p>Published by: {book.publisher}</p>
              <p>Owned by: {book.owner.name}</p>
              {/* Render book reviews if available */}
              {book.reviews && book.reviews.length > 0 && (
                <div class="reviews">
                  <h3>Reviews:</h3>
                  <div className="review-list">
                    <ul>
                      {book.reviews.map((review, index) => (
                        // Render specific properties of each review
                        <li className="reviewer" key={index}>
                          <p>Reviewer: {review.reviewer               }</p>
                          <p>Rating: {review.rating}</p>
                          <p>Comment: {review.comment}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
              {/* Request button */}
              <button onClick={handleRequest}>Request</button>
              {requestMessage && <p>{requestMessage}</p>}{" "}
              {/* Display request message if it exists */}
            </div>
            <form onSubmit={handleSubmit} className="comment-form">
              <input
                type="text"
                name="reviewer"
                value={review.reviewer}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
              <input
                type="number"
                name="rating"
                value={review.rating}
                onChange={handleChange}
                placeholder="Rating"
                required
              />
              <textarea
                name="comment"
                value={review.comment}
                onChange={handleChange}
                placeholder="Comment"
                required
              />
              <button type="submit">Submit Review</button>
            </form>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default BookDetail;

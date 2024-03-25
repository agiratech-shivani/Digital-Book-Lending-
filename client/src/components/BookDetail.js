import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./BookDetail.css";
import Header from "./Header";
import BookImage from "./BookImage";
import BookDetails from "./BookDetails";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";
import RatingSection from "./RatingSection";
import RequestButton from "./RequestButton";
import { toast, ToastContainer } from "react-toastify";
// import './BookDetail.css';

const BookDetail = () => {
  const bookId = useParams().id;
  const [book, setBook] = useState(null);
  const [review, setReview] = useState({
    reviewer: localStorage.getItem("name"),
    rating: "",
    comment: "",
  });
  const [ownermail, setOwnermail] = useState("");
  const [requester, setRequester] = useState(localStorage.getItem("objectId"));
  const [requestMessage, setRequestMessage] = useState("");

  useEffect(() => {
    const fetchBook = async () => {
      const res = await axios.get(`http://localhost:5000/books/${bookId}`);
      setBook(res.data?.book);
    };
    fetchBook();
  }, [bookId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReview((prevReview) => ({ ...prevReview, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:5000/books/${bookId}/reviews`, review);
      const response = await axios.get(`http://localhost:5000/books/${bookId}`);
      setBook(response.data?.book);
      setReview({ reviewer: "", rating: "", comment: "" });
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  const handleRequest = async () => {
    try {
      const requestData = { bookId, ownermail, requester };
      await axios.post("http://localhost:5000/requests", requestData);
      // setRequestMessage("Request sent successfully!");
      toast.success("Book Requested Successfully!");
    } catch (error) {
      console.error("Error sending request:", error);
    }
  };

  return (
    <>
      <div className="example1">
        <Header />

        <div className="container">
          {book && (
            <div className="row">
              <div className="col-md-6">
                <div className="card-1">
                  <div className="book-info">
                    <BookImage image={book.image} author={book.author} />
                  </div>
                  <div>
                    <ReviewForm
                      review={review}
                      onChange={handleChange}
                      onSubmit={handleSubmit}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card-2">
                  <div className="book-details">
                    <BookDetails
                      title={book.title}
                      author={book.author}
                      publisher={book.publisher}
                      owner={book.owner}
                    />
                    <RequestButton onClick={handleRequest} />
                    {requestMessage && <p>{requestMessage}</p>}

                    <div>
                      {book && book.reviews && book.reviews.length > 0 ? (
                        <ReviewList reviews={book.reviews} />
                      ) : (
                        <p className="not-found">No Reviews Found</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BookDetail;

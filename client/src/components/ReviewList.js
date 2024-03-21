import React from "react";
import './ReviewList.css'

const ReviewList = ({ reviews }) => {
  return (
    <div className="reviews">
      <h3>Reviews:</h3>
      <div className="review-list">
        <ul className="reviewer-details">
          {reviews.map((review, index) => (
            <li className="reviewer" key={index}>
              <p className="review-list-p">Reviewer: {review.reviewer}</p>
              <p className="review-list-p">Rating: {review.rating}</p>
              <p className="review-list-p">Comment: {review.comment}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ReviewList;

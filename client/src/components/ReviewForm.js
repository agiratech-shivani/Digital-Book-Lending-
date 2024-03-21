// import React from "react";

// const ReviewForm = ({ review, onChange, onSubmit }) => {
//   return (
//     <form onSubmit={onSubmit} className="comment-form">
//       <input
//         type="text"
//         name="reviewer"
//         value={review.reviewer}
//         onChange={onChange}
//         placeholder="Your Name"
//         required
//       />
//       {/* Input for rating can be replaced with a star rating component */}
//       <input
//         type="number"
//         name="rating"
//         value={review.rating}
//         onChange={onChange}
//         placeholder="Rating"
//         required
//       />
//       <textarea
//         name="comment"
//         value={review.comment}
//         onChange={onChange}
//         placeholder="Comment"
//         required
//       />
//       <br/>
//       <button type="submit">Submit Review</button>
//     </form>
//   );
// };

// export default ReviewForm;
import React, { useState } from "react";
import StarRating from "./StarRating"; // Import your StarRating component
import './ReviewForm.css'

const ReviewForm = ({ review, onChange, onSubmit }) => {
  const [hoverRating, setHoverRating] = useState(0); // State to manage hover rating

  return (
    <div className="review-form">
    <form onSubmit={onSubmit} className="comment-form">
      <input className="reviewer-field"
        type="text"
        name="reviewer"
        value={review.reviewer}
        onChange={onChange}
        placeholder="Your Name"
        required
      />
      {/* Replace input for rating with StarRating component */}
      <StarRating
        rating={review.rating}
        onRatingChange={(rating) => onChange({ target: { name: 'rating', value: rating } })}
        onHoverRatingChange={(rating) => setHoverRating(rating)}
      />
      {/* Display hover rating */}
      {hoverRating !== 0 && <div> Rating: {hoverRating}</div>}
      <textarea className="comment"
        name="comment"
        value={review.comment}
        onChange={onChange}
        placeholder="Comment"
        required
      />
      <br />
      <button className="submit-button" type="submit">Submit Review</button>
    </form>
    </div>
  );
};

export default ReviewForm;


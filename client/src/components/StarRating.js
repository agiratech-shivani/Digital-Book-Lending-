import React, { useState } from "react";
import "./BookDetail.css";

const StarRating = ({ rating, onRatingChange, onHoverRatingChange }) => {
  const [hoverRating, setHoverRating] = useState(0);

  const handleMouseOver = (index) => {
    setHoverRating(index);
    onHoverRatingChange(index);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
    onHoverRatingChange(0);
  };

  const handleClick = (index) => {
    onRatingChange(index);
  };

  return (
    <div className="star-rating" onMouseLeave={handleMouseLeave}>
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        return (
          <span
            key={index}
            className={`
              star
              ${rating >= starValue || hoverRating >= starValue ? "" : ""}
              ${hoverRating >= starValue ? "hovered" : ""}
            `}
            onClick={() => handleClick(starValue)}
            onMouseOver={() => handleMouseOver(starValue)}
            style={{ fontSize: "40px" }}
          >
            &#9733;
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;

// import React, { useState } from "react";
// import "./BookDetail.css"; // Import CSS file for styling

// const StarRating = ({ rating, onRatingChange, onHoverRatingChange, starSize }) => {
//   const [hoverRating, setHoverRating] = useState(0);

//   const handleMouseOver = (index) => {
//     setHoverRating(index);
//     onHoverRatingChange(index);
//   };

//   const handleMouseLeave = () => {
//     setHoverRating(0);
//     onHoverRatingChange(0);
//   };

//   const handleClick = (index) => {
//     onRatingChange(index);
//   };

//   return (
//     <div className="star-rating" onMouseLeave={handleMouseLeave}>
//       {[...Array(5)].map((_, index) => {
//         const starValue = index + 1;
//         return (
//           <span
//             key={index}
//             className={`
//               star
//               ${rating >= starValue || hoverRating >= starValue ? "filled" : ""}
//               ${hoverRating >= starValue ? "hovered" : ""}
//             `}
//             onClick={() => handleClick(starValue)}
//             onMouseOver={() => handleMouseOver(starValue)}
//             style={{ width: "95px", height: "95px" }} // Apply height and width styles here
//           >
//             &#9733;
//           </span>
//         );
//       })}
//     </div>
//   );
// };

// export default StarRating;

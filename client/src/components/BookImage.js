import React from "react";
import "./BookImage.css";

const BookImage = ({ image, author }) => {
  return (
    <div>
      <img className="book-image" src={image} alt={author} />
    </div>
  );
};

export default BookImage;

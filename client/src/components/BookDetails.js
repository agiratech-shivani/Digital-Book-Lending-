import React from "react";
import './BookDetails.css'

const BookDetails = ({ title, author, publisher, owner }) => {
  return (
    <div className="book-details">
      <h2>{title}</h2>
      <p>By {author}</p>
      <p>Published by: {publisher}</p>
      <p>Owned by: {owner.name}</p>
    </div>
  );
};

export default BookDetails;

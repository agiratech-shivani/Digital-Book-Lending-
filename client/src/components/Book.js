import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./Book.css";
const Book = (props) => {
  const { _id, title, image, author, owner } = props.book;
  //const ownerName = owner ? owner.name : "Unknown";

  
  return (
    <div className="card">
      <img src={image} alt={author} />
      <article>By {author}</article>
      <h3>{title}</h3>
      {/* <h3>published by {publisher}</h3> */}
      {/* <span>published by {publisher}</span> */}
      <h2>Owned By {owner}</h2>
      {/* <p> {owner}</p> */}
      {/* <span>{_id}</span> */}
      <Button LinkComponent={Link} to={`/books/${_id}`} sx={{ mt: "auto" }}>
        View
      </Button>
      <Button sx={{ mt: "auto" }}>Request</Button>
    </div>
  );
};

export default Book;

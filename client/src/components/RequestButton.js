import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./RequestButton.css";

const RequestButton = ({ onClick }) => {
  const notify = () => toast.success("Book Requested Successfully!");
  return (
    <>
      <button className="request-button" onClick={onClick}>
        Request
      </button>
      <ToastContainer />
    </>
  );
};

export default RequestButton;

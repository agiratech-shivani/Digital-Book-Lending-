import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";

const RequestManagement = ({ userId, ownerEmail }) => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
  //   const fetchRequests = async () => {
  //     try {
  //       const response = await axios.get(
  //         `http://localhost:5000/requests?bookId=${bookId}`
  //       );
  //       setRequests(response.data || []);
  //     } catch (error) {
  //       console.error("Error fetching requests:", error);
  //     }
  //   };
  //   fetchRequests();
  // }, [bookId]);
  const fetchRequests = async () => {
      try {
        // Retrieve userId from localStorage
        const userId = localStorage.getItem("objectId");
        if (!userId) {
          throw new Error("User ID not found in localStorage");
        }
        // Fetch requests for the user ID
        const response = await axios.get(
          `http://localhost:5000/requests/${userId}`
        );
        setRequests(response.data || []);
      } catch (error) {
        console.error("Error fetching requests:", error);
      }
    };
    fetchRequests();
  }, [userId]);

  const handleApprove = async (requestId) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/requests/${requestId}/approve`
      );
      if (response.status === 200) {
        // Update the status of the approved request in the UI
        setRequests((prevRequests) =>
          prevRequests.map((request) =>
            request._id === requestId
              ? { ...request, status: "approved" }
              : request
          )
        );
      }
    } catch (error) {
      console.error("Error approving request:", error);
    }
  };

  return (
    <>
      {<Header />}
      <div>
        <h2>Requests for Approval</h2>
        <ul>
          {requests.map((request) => (
            <li key={request._id}>
              Requester: {request.requester.name} - Status: {request.status}
              {request.status !== "approved" && (
                // Button for approving the request
                <button onClick={() => handleApprove(request._id)}>
                  Approve
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default RequestManagement;

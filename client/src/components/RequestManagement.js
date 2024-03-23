import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import "./RequestManagement.css";
//import {MdOutlinedAddBox,MdOutlinedDelete} from 'react-icons/bs';

const RequestManagement = ({ userId, ownerEmail }) => {
  const [requests, setRequests] = useState([]);
  const [title, setTitle] = useState("Approved");
  const [status, setStatus] = useState("pending");

  const fetchRequests = async () => {
    try {
      // Retrieve userId from localStorage
      const userId = localStorage.getItem("objectId");
      if (!userId) {
        throw new Error("User ID not found in localStorage");
      }
      const query = new URLSearchParams({ status }).toString();
      const url = `http://localhost:5000/requests/${userId}?${query}`;
      console.log("Fetch requests URL:", url);
      // Fetch requests for the user ID
      const response = await axios.get(
        `http://localhost:5000/requests/${userId}?${query}`
      );
      setRequests(response.data || []);
    } catch (error) {
      console.error("Error fetching requests:", error);
    }
  };
  useEffect(() => {
    fetchRequests();
    if (status === "pending") {
      setTitle("Pending");
    }
    if (status === "rejected") {
      setTitle("Rejected ");
    }
    if (status === "approved") {
      setTitle("Approved ");
    }
  }, [status]);

  const handleApprove = async (requestId, status) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/requests/${requestId}/approve`,
        { status }
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
        fetchRequests();
      }
    } catch (error) {
      console.error("Error approving request:", error);
    }
  };
  

  return (
    <>
      {<Header />}
      <h2 style={{ textAlign: "center" }}>{title} Requests</h2>
      
        <div className="table-container">
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value={"pending"}>Pending</option>
            <option value={"approved"}>Approved</option>
            <option value={"rejected"}>Rejected</option>
          </select>
          {requests.length > 0 ? (
          <table className="custom-table">
            <thead>
              <tr>
                <th>Requester</th>
                <th>Book Name</th>
                <th>Status</th>
                {status === "pending" && <th>Action</th>}
              </tr>
            </thead>

            <tbody>
              {requests.map((request) => (
                <tr key={request._id}>
                  <td>{request.requester.name}</td>
                  <td>{request.book.title}</td>
                  <td>{request.status}</td>
                  {status === "pending" && (
                    <td>
                      {request.status !== "approved" && (
                        <button
                          className="action-button"
                          onClick={() => handleApprove(request._id, "approved")}
                        >
                          Approve
                        </button>
                      )}
                      {request.status !== "rejected" && (
                        <button
                          className="action-button"
                          onClick={() => handleApprove(request._id, "rejected")}
                        >
                          Reject
                        </button>
                      )}
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
       
      ) : (
        <table className="custom-table">
          <thead>
            <tr>
              <th>Requester</th>
              <th>Book Name</th>
              <th>Status</th>
              {status === "pending" && <th>Action</th>}
            </tr>
          </thead>
          <tbody>
            {/* Empty row to display when there are no requests */}
            <tr>
              <td colSpan={status === "pending" ? 4 : 3}>
                No requests available.
              </td>
            </tr>
          </tbody>
        </table>
      )}
      </div>
    </>
  );
};

export default RequestManagement;

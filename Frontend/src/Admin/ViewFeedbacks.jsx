import React from 'react'
import { useEffect, useState } from 'react';
import "./ViewFeedbacks.css"
import { Link } from 'react-router-dom';
function ViewFeedbacks() {
    const [feedbacks, setFeedbacks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const fetchFeedbacks = async () => {
        try {
          const response = await fetch('https://dr-ashishverma-child-clinic.onrender.com/allfeedbacks');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const result = await response.json();
          setFeedbacks(result);
        } catch (error) {
          setError(error.message);
          console.error('Error fetching feedbacks:', error);
        } finally {
          setLoading(false);
        }
      };
    
      useEffect(() => {
        fetchFeedbacks();
      }, []);
    
      if (loading) {
        return <div className="feedback-list-container">Loading...</div>;
      }
    
      if (error) {
        return <div className="feedback-list-container">Error: {error}</div>;
      }
    
      let deleteData = async (id) => {
        if (window.confirm("Are you sure ?")) {
            let result = await fetch(`https://dr-ashishverma-child-clinic.onrender.com/deletedata/${id}`, {
                method: 'delete'
            });
            result = await result.json();
            if (result) {
              fetchFeedbacks();
            }
        }
    }

      return (
        <div className="feedback-list-container">
          <Link to="/adminhome" className="backbtn"><i className="bi bi-arrow-left-square-fill"></i> Go Back</Link>
          <h1 className='feed-h'>All Feedbacks</h1>
          {feedbacks.length > 0 ? (
            <ul className="feedback-list">
              {feedbacks.map((feedback, index) => (
                <li key={index} className="feedback-item">
                  <p className="feedback-text">"{feedback.feedback}"</p>
                  <button className="delbtn" onClick={() => deleteData(feedback._id)}><i className="bi bi-trash3-fill" ></i> Delete</button>
                </li>
              ))}
            </ul>
          ) : (
            <div>No feedback available</div>
          )}
          
        </div>
      );
    };

export default ViewFeedbacks
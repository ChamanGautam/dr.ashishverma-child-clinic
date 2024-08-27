import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ThankYou.css'; 

const ThanksFeed = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/'); // Redirect to home page
    };

    return (
        <div className="thank-you-container">
            <h1 className="thank-you-message">Thank you for your insightful feedback</h1>
            <button className="thank-you-button" onClick={handleGoHome}>Go to Home</button>
        </div>
    );
};

export default ThanksFeed;

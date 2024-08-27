import React, { useEffect, useState } from 'react';
import axios from 'axios';  // Consider removing this if you're not using it
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './FeedbackSlider.css'; // Import the CSS file

const FeedbackSlider = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchFeedbacks = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/allfeedbacks');
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="feedback-slider-container">
        <h3 className='feed-head'>Patients Feedbacks</h3>
      <Slider {...settings}>
        {feedbacks.length > 0 ? (
          feedbacks.map((feedback, index) => (
            <div key={index} className="feedback-slide">
                
              <p className="feedback-text">"{feedback.feedback}"</p>
            </div>
          ))
        ) : (
          <div>No feedback available</div>
        )}
      </Slider>
    </div>
  );
};

export default FeedbackSlider;

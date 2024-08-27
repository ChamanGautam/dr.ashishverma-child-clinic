import { Link } from 'react-router-dom';
import './Footer.css';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Add this import

const Footer = () => {
    const [feedback, setFeedback] = useState("");
    const navigate = useNavigate(); // Initialize useNavigate

    const handleInputChange = (event) => {
        setFeedback(event.target.value); // Update feedback state
    };

    const addFeed = async (event) => {
        event.preventDefault(); // Prevent default form submission
    
        if (!feedback.trim()) {
            alert("Feedback cannot be empty.");
            return;
        }
    
        try {
          const result = await axios.post('http://localhost:5000/sendfeed', {
            feedback
          });
    
          if (result.status === 201) {
            alert("Data Added Successfully");
            navigate('/thankyoufeed'); // Navigate after successful submission
          } else {
            alert("Failed to add data. Please try again.");
          }
        } catch (error) {
          console.error("There was an error submitting the form!", error.response ? error.response.data : error.message);
          alert("There was an error submitting the form. Please try again.");
        }
    };

    return (
        <div className='footer'>
            <div className="feedback">
                <input
                    type="text"
                    className="feedback_input"
                    placeholder="Please send your valuable Feedback"
                    value={feedback} // Set the value of the input
                    onChange={handleInputChange} // Handle input changes
                />
                <button className="feedback_submit" onClick={addFeed}>Submit</button>
            </div>
            <div className="contact_info">
                <div className="clinic1">
                    <p><strong>Clinic 1 -</strong> New Balram palace, Air Force Road Bakshi Ka Talab Lucknow </p>
                    <p><strong>Clinic 2 -</strong> Bithuali Khurd Tiraha Near State Bank Of India Lucknow </p>
                </div>  
                <div className="border"></div> 
                <div className="icon">
                    <Link className="icons1" to='tel:+919473646659'><i className="bi bi-telephone-fill"></i></Link>&nbsp;&nbsp;&nbsp;
                    <Link className="icons2" to="https://api.whatsapp.com/send?phone=9473646659"><i className="bi bi-whatsapp"></i></Link>&nbsp;&nbsp;&nbsp;
                    <Link className="icons3" to="https://www.facebook.com/DrAshishVermaBKT/"><i className="bi bi-facebook"></i></Link>&nbsp;&nbsp;&nbsp;
                    <Link className="icons4" to="https://instagram.com/childspecialistdrashishverma?igshid=YmMyMTA2M2Y="><i className="bi bi-instagram"></i></Link>
                </div>  
            </div>
            <div className="copyright">
                © 2024 Copyright: Chaman Gautam
            </div>
        </div>
    );
}

export default Footer;

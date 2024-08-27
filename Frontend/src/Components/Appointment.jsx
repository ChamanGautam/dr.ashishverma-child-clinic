import React, { useState } from "react";
import axios from 'axios';
import "./Appointment.css";
import { useNavigate } from "react-router-dom";

const Appointment = () => {
  const navigate = useNavigate();
  const [pname, setPname] = useState("");
  const [gender, setGender] = useState("Male");
  const [pmname, setPmname] = useState("");
  const [pfname, setPfname] = useState("");
  const [age, setAge] = useState("");
  const [mobile, setMobile] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("Bakshi Ka Talab");
  const [time, setTime] = useState("5:00 AM-6:00 AM");
  const [problem, setProblem] = useState("");

  // Define default times for each location
  const locationToTimeMap = {
    "Bakshi Ka Talab": "5:00 AM-6:00 AM",
    "Bithauli": "6:30 AM-8:30 AM",
    // Add more locations and their default times as needed
  };

  // Function to get current time in a specific format
  const getCurrentTime = () => {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Pad single digit hours, minutes, and seconds with leading zeros
    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');

    // Format time as hh:mm:ss
    return `${hours}:${minutes}:${seconds}`;
  };

  // Handle location change and set default time accordingly
  const handleLocationChange = (e) => {
    const selectedLocation = e.target.value;
    setLocation(selectedLocation);
    // Update time based on the selected location
    const defaultTime = locationToTimeMap[selectedLocation] || "5:30 AM-6:00 AM";
    setTime(defaultTime);
  };

  const addAppointment = async (event) => {
    event.preventDefault(); // Prevent default form submission

    try {
      const result = await axios.post('https://dr-ashishverma-child-clinic.onrender.com/addAppointment', {
        pname,
        gender,
        pmname,
        pfname,
        age,
        mobile,
        date,
        location,
        time,
        problem,
        currentTime: getCurrentTime() // Include the current time
      });

      if (result.status === 201) {
        alert("Data Added Successfully");
        navigate('/thankyou');
      } else {
        alert("Failed to add data. Please try again.");
      }
    } catch (error) {
      console.error("There was an error submitting the form!", error.response ? error.response.data : error.message);
      alert("There was an error submitting the form. Please try again.");
    }
  };

  const disablePastDate = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    return `${yyyy}-${mm}-${dd}`;
  };

  return (
    <div>
      <div className="form" id="appointment">
        <h1>Make an Appointment</h1>
        <hr />
        <form onSubmit={addAppointment}>
          <label htmlFor="pname">Patient Name:</label>
          <input
            type="text"
            name="pname"
            id="pname"
            onChange={(e) => setPname(e.target.value)}
            value={pname}
            placeholder="Patient Name"
            required
          />
          <label htmlFor="gender">Gender:</label>
          <select
            name="gender"
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <label htmlFor="pmname">Mother Name:</label>
          <input
            type="text"
            name="pmname"
            id="pmname"
            value={pmname}
            onChange={(e) => setPmname(e.target.value)}
            placeholder="Mother Name"
            required
          />
          <label htmlFor="pfname">Father Name:</label>
          <input
            type="text"
            name="pfname"
            id="pfname"
            value={pfname}
            onChange={(e) => setPfname(e.target.value)}
            placeholder="Father Name"
            required
          />
          <label htmlFor="age">Age:</label>
          <input
            type="text"
            name="age"
            id="age"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
          <label htmlFor="mobile">Mobile Number:</label>
          <input
            type="tel"
            name="mobile"
            id="mobile"
            placeholder="Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
          />
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            name="date"
            id="date"
            placeholder="Date"
            min={disablePastDate()}
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
          <label htmlFor="location">Location:</label>
          <select
            name="location"
            id="location"
            value={location}
            onChange={handleLocationChange}
          >
            <option value="Bakshi Ka Talab">Bakshi Ka Talab</option>
            <option value="Bithauli">Bithauli</option>
            {/* More options */}
          </select>
          <label htmlFor="time">Time:</label>
          <input
            type="text"
            name="time"
            id="time"
            disabled
            value={time}
          />
          <label htmlFor="problem">Describe Your Problem:</label>
          <textarea
            name="problem"
            id="problem"
            placeholder="Describe Your Problem"
            cols="10"
            rows="10"
            value={problem}
            onChange={(e) => setProblem(e.target.value)}
            required
          ></textarea>
          <button className="submitbtn" type="submit">
            Book Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default Appointment;

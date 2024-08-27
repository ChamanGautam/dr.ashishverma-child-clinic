import "./ViewAppointment.css";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const ViewAppointment = () => {
    const navigate = useNavigate();
    const [appointments, setAppointments] = useState([]);
    const [filteredAppointments, setFilteredAppointments] = useState([]);
    const [isTodayView, setIsTodayView] = useState(false);

    const getAppointments = async () => {
        let result = await fetch('http://127.0.0.1:5000/getappointment');
        result = await result.json();
        setAppointments(result);
        if (!isTodayView) {
            setFilteredAppointments(result);
        }
        
    };

    useEffect(() => {
        getAppointments();
    }, []);

    useEffect(() => {
        if (isTodayView) {
            filterTodayAppointments();
        } else {
            setFilteredAppointments(appointments);
        }
    }, [isTodayView, appointments]);

    const filterTodayAppointments = () => {
        const today = new Date().toISOString().split('T')[0]; // Format: YYYY-MM-DD
        const todayAppointments = appointments.filter(appointment => appointment.date === today);
        setFilteredAppointments(todayAppointments);
    };
    const Logout = () => {
        localStorage.clear();
        alert("Are you sure you want to logout?");
        navigate("/");
    };
    const searchAppointment = async (e) => {
        let key = e.target.value;
        if (key) {
            let data = await fetch(`http://127.0.0.1:5000/searchappointment/${key}`);
            data = await data.json();
            setAppointments(data);
        } else {
            getAppointments();
        }
    };

    const handleTodayButtonClick = () => {
        setIsTodayView(true);
    };

    const handleAllButtonClick = () => {
        setIsTodayView(false);
    };

    const handleFeedbacks = () =>{
        window.location.href = '/feedbacks';
    }

    return (
        <div>
            <div className="view-base">
                <div className="view-main">
                    <div className="view-heading">All Appointments</div>
                    <div className="view-buttons">
                        <button onClick={handleTodayButtonClick}>Show Today's Appointments</button>
                        <button onClick={handleAllButtonClick}>Show All Appointments</button>
                        <button onClick={handleFeedbacks}>Feedbacks</button>
                        <button onClick={Logout}> Log Out </button>
                    </div>
                    <input
                        type="search"
                        onChange={searchAppointment}
                        className="view-search"
                        placeholder="Search Appointment"
                    />
                    <table className="view-table" cellSpacing="0" cellPadding="0">
                        <tbody>
                            <tr className="view-row">
                                <th>S.no</th>
                                <th>Patient Name</th>
                                <th>Mobile</th>
                                <th>Age</th>
                                <th>Date</th>
                                <th>Action</th>
                            </tr>
                            {filteredAppointments.length > 0 ? filteredAppointments.map((item, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.pname}</td>
                                    <td>{item.mobile}</td>
                                    <td>{item.age}</td>
                                    <td>{item.date}</td>
                                    <td>
                                        <Link to={"/fulldetail/"+item._id} className="viewbtn">
                                            <i className="bi bi-eye-fill"></i> View
                                        </Link>
                                    </td>
                                </tr>
                            )) : (
                                <tr>
                                    <td colSpan="6">
                                        <h1>No Data Found</h1>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ViewAppointment;

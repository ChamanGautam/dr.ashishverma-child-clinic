import "./AppointmentDetails.css"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const AppointmentDetails = (id) => {
    let params=useParams();
    let [data, setData]=useState([]);
    let getAppointments =async () =>{
        let result = await fetch(`http://localhost:5000/details/${params.id}`,);
        result = await result.json();
        setData(result);
    }
    useEffect(()=>{
        getAppointments();
    });
    return (
        <div>
            <div className="appointment-base">
                <div className="appointment-main">
                    <div className="appointment-heading">{ data.pname }'s details</div>
                    <table className="appointment-table">
                        <tr>
                            <th>Patient Name : </th>
                            <td>{ data.pname }</td>
                        </tr>
                        <tr>
                            <th>Gender : </th>
                            <td>{ data.gender }</td>
                        </tr>
                        <tr>
                            <th>Mother's Name : </th>
                            <td>{ data.pmname }</td>
                        </tr>
                        <tr>
                            <th>Father's Name : </th>
                            <td>{ data.pfname }</td>
                        </tr>
                        <tr>
                            <th>Age : </th>
                            <td>{ data.age }</td>
                        </tr>
                        <tr>
                            <th>Mobile No : </th>
                            <td>{ data.mobile }</td>
                        </tr>
                        <tr>
                            <th>Date : </th>
                            <td>{ data.date }</td>
                        </tr>
                        <tr>
                            <th>Clinic : </th>
                            <td>{ data.location }</td>
                        </tr>
                        <tr>
                            <th>Time : </th>
                            <td>{ data.time }</td>
                        </tr>
                        <tr>
                            <th>Problem : </th>
                            <td>{ data.problem }</td>
                        </tr>
                        <tr>
                            <th>Applied Time : </th>
                            <td>{ data.currentTime }</td>
                        </tr>
                    </table>
                    <Link to="/adminhome" className="backbtn"><i className="bi bi-arrow-left-square-fill"></i> Go Back</Link>
                </div>
            </div>
        </div>
    );
}

export default AppointmentDetails;
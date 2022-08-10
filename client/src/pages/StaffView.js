import React from "react";
import { Link } from "react-router-dom";
import '../css/StaffView.css';
import img from "../images/FiveFlags.png";

// table components
import AddOperations from "./components/AddOperations";
import Operations from "./components/Operations";


const StaffView = () => {
    return (
        <>
            <div className="staff-page-container">
            <div className="header">
                <div className="welcome"><h1>Welcome to the Five Flags Park Operations Dashboard!</h1></div>
                <Link to= "/">
                    <img className="small-logo" src={img} alt="company logo"></img>
                </Link>
            </div>
            <div className="bi">
                <p>For the business intelligence dashboard, please click here: </p>
                <Link to="/BIDashboard">
                    <button type="button" onClick>BI Dashboard</button>
                </Link>

            </div>
                <AddOperations />
                <Operations />
            </div>
        </>
    );
};

export default StaffView;
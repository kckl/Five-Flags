import React from "react";
import { Link } from "react-router-dom";
import '../css/BIView.css';
import img from "../images/FiveFlags.png";


import TicketCustomer from "./components/TicketCustomer";
import Loyalty from "./components/Loyalty";
import ThrillingRides from "./components/ThrillingRides";

const BI = () => {

    return (
        <>
            <div className="bi-page-container">
                    <div className="header">
                        <h1>Business Intelligence Dashboard</h1>
                        <Link to="/">
                            <img className="small-logo" src={img} alt="company logo"></img>
                        </Link>
                    </div>
                <div className="bi">
                    <p>For the park operations dashboard, please click here: </p>
                    <Link to="/StaffView">
                        <button type="button" onClick>Ops Dashboard</button>
                    </Link>
                </div>
                <TicketCustomer />
                <ThrillingRides />
                <Loyalty />
            </div>
        </>
    );
};

export default BI;
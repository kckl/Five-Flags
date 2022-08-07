import React from "react";
import { Link } from "react-router-dom";
import './BIView.css';

import TicketCustomer from "./components/TicketCustomer";
import Loyalty from "./components/Loyalty";

const BI = () => {

    return (
        <>
            <div className="bi-page-container">
                <div className="header">
                    <h1>Business Intelligence Dashboard</h1>
                </div>
            <div className="bi">
                <p>For the park operations dashboard, please click here: </p>
                <Link to="/StaffView">
                    <button type="button" onClick>Ops Dashboard</button>
                </Link>
            </div>
            <TicketCustomer />
            <Loyalty />
            </div>
        </>
    );
};

export default BI;
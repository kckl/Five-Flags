import React from "react";
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
            <TicketCustomer />
            <Loyalty />
            </div>
        </>
    );
};

export default BI;
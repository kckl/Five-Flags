import React from "react";
import './BI.css';

import TicketCustomer from "./components/TicketCustomer";

const BI = () => {

    return (
        <>
            <div className="bi-page-container">
                <div className="header">
                    <h1>Business Intelligence Dashboard</h1>
                </div>
            <TicketCustomer />
            </div>
        </>
    );
};

export default BI;
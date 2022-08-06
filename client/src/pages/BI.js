import React from "react";
import './BI.css';

import TicketSales from "./components/TicketSales";
import Loyalty from "./components/Loyalty";

const BI = () => {

    return (
        <>
            <div className="bi-page-container">
                <div className="header">
                    <h1>Business Intelligence Dashboard</h1>
                </div>
            <TicketSales />
            <Loyalty />
            </div>
        </>
    );
};

export default BI;
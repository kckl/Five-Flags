import React, { useEffect, useState } from "react";
import './BI.css';
<<<<<<< HEAD:client/src/pages/components/BI.js
const url = "http://localhost:8000/loyalty/"
=======

import TicketSales from "./components/TicketSales";

const parksUrl = "http://localhost:8000/parks"
>>>>>>> c84f1dafd0b3590787e2996f0c1d8e73580f6bc7:client/src/pages/BI.js

const BI = () => {

    const [loyalty, setLoyalty] = useState([]);

    const getLoyalty = async () => {
        const response = await fetch(url);
        const json = await response.json();
        setLoyalty(json);
    }

    // useEffect(() => {
    //     getLoyalty();
    // }, []);

    return (
        <>
<<<<<<< HEAD:client/src/pages/components/BI.js
            <div className="bi-page-container">
                <div className="header">
                        <h1>Business Intelligence Dashboard</h1>
                </div>
                <div className="ops-box-container">
                    <div className="left-text-container">
                        <h2>Loyal Customers</h2>
                        <p id="definition">Defined as those customers who have visited any park globally 3 or more times</p>
                        <button type="submit" id="loyaltyButton" onClick={getLoyalty}>Get Customers</button>
                        <table id="customers">
                            <thead>
=======
            <div className="header">
                    <h1>Business Intelligence Dashboard</h1>
            </div>
            <TicketSales />
            <div className="ops-box-container">
                <div className="left-text-container">
                    <h2>Global Parks</h2>
                    <table id="parks">
                        <thead>
                            <tr>
                            <th>Park #</th>
                            <th>City</th>
                            <th>Country</th>
                            <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {parks.map(park => (
>>>>>>> c84f1dafd0b3590787e2996f0c1d8e73580f6bc7:client/src/pages/BI.js
                                <tr>
                                <th>Guest #</th>
                                <th>Guest Name</th>
                                <th># of Visits Globally</th>
                                </tr>
                            </thead>
                            <tbody>
                                {loyalty.map(l => (
                                    <tr>
                                        <td>{l.guest_id}</td>
                                        <td>{l.name}</td>
                                        <td>{l.visits}</td>
                                    </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BI;
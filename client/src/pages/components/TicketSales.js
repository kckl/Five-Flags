import React, { useState, useEffect } from "react";
import './TicketSales.css';
const ticketUrl = "http://localhost:8000/ticketsales/"
const loyaltyUrl = "http://localhost:8000/loyalty/"

const TicketSales = () => {

    const [ticketsales, setTicketSales] = useState([]);
    const [loyalty, setLoyalty] = useState([]);

    const getTicketSales = async() => {
        try {
            const response = await fetch(ticketUrl);
            const jsonData = await response.json();

            setTicketSales(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };

    const getLoyalty = async () => {
        const response = await fetch(loyaltyUrl);
        const json = await response.json();
        setLoyalty(json);
    }

    useEffect(() => {
        getTicketSales();
    });

    return (
        <>
            <div className="ops-box-container">
                <div className="left-text-container">
                    <h2>Ticket Sales</h2>
                        <table id="ticketsales">
                            <thead>
                            <tr>
                                <th>Ticket Type</th>
                                <th>Sales</th>
                            </tr>
                            </thead>
                            <tbody>
                            {ticketsales.map(ticketsale => (
                                <tr>
                                    <td>{ticketsale.type}</td>
                                    <td>{ticketsale.count}</td>  
                                </tr>
                            ))}
                            </tbody>
                        </table>
                </div>
            </div>
            <div className="ops-box-container">
                <div className="left-text-container">
                    <h2>Loyal Customers</h2>
                    <p id="definition">Defined as those customers who have visited any park globally 3 or more times</p>
                    <button type="submit" id="loyaltyButton" onClick={getLoyalty}>Get Customers</button>
                    <table id="customers">
                        <thead>
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
        </>
    )
};

export default TicketSales;
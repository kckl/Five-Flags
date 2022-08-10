import React, { useState, useEffect } from "react";
const ticketUrl = "http://localhost:8000/ticketsales/"


const TicketCustomer = () => {

    const [ticketsales, setTicketSales] = useState([]);

    const getTicketSales = async() => {
        try {
            const response = await fetch(ticketUrl);
            const jsonData = await response.json();

            setTicketSales(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <>
            <div className="ops-box-container">
                <div className="text-container">
                    <div>
                        <h2 id="ticketcustomer">Ticket Sales</h2>
                        <button type="submit" id="salesButton" onClick={getTicketSales}>Get Sales</button>
                    </div>
                    <p id="definition">Total ticket sales for each ticket type</p>
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
        </>
    )
};

export default TicketCustomer;
import React, { useState, useEffect } from "react";
import './TicketSales.css';


const TicketSales = () => {

    const [ticketsales, setTicketSales] = useState([]);

    const getTicketSales = async() => {
        try {
            const response = await fetch("http://localhost:8000/ticketsales");
            const jsonData = await response.json();

            setTicketSales(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };

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
           
        </>
    )
};

export default TicketSales;
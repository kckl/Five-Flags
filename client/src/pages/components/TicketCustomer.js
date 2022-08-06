import React, { useState, useEffect } from "react";
import './TicketCustomer.css';
const ticketUrl = "http://localhost:8000/ticketsales/"
const loyaltyUrl = "http://localhost:8000/loyalty/"

const TicketCustomer = () => {

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

    // useEffect(() => {
    //     getTicketSales();
    // });

    return (
        <>
            <div className="ops-box-container">
                <div className="left-text-container">
                    <div>
                        <h2>Ticket Sales</h2><button type="submit" id="salesButton" onClick={getTicketSales}>Get Sales</button>
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
            
                <div className="right-text-container">
                    <div>
                        <h2>Loyal Customers</h2><button type="submit" id="loyaltyButton" onClick={getLoyalty}>Get Customers</button>
                    </div>
                    <p id="definition">Defined as those customers who have visited any park globally 3 or more times</p>
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

export default TicketCustomer;
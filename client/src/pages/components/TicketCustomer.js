import React, { useState, useEffect } from "react";
import './TicketCustomer.css';
const ticketUrl = "http://localhost:8000/ticketsales/"
const loyaltyUrl = "http://localhost:8000/loyalty/"
const thrillUrl = "http://localhost:8000/thrillingride/"

const TicketCustomer = () => {

    const [ticketsales, setTicketSales] = useState([]);
    const [loyalty, setLoyalty] = useState([]);
    const [thrill, setThrill] = useState([]);

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

    const getThrillingRide = async() => {
        try {
            const response = await fetch(thrillUrl);
            const jsonData = await response.json();

            setThrill(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };

    // useEffect(() => {
    //     getTicketSales();
    // });

    return (
        <>
            <div className="ops-box-container">
                <div className="text-container">
                    <div>
                        <h2 id="ticketcustomer">Ticket Sales</h2><button type="submit" id="salesButton" onClick={getTicketSales}>Get Sales</button>
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
            
                <div className="text-container">
                    <div>
                        <h2 id="ticketcustomer">Loyal Customers</h2><button type="submit" id="loyaltyButton" onClick={getLoyalty}>Get Customers</button>
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

                <div className="text-container">
                    <div>
                        <h2 id="ticketcustomer">Most Thrilling Ride</h2><button type="submit" id="thrillingButton" onClick={getThrillingRide}>Get Thrilling Rides</button>
                    </div>
                    <p id="definition">The rides that are more thrilling than the average ride</p>
                    <table id="thrill">
                        <thead>
                            <tr>
                            <th>Ride Name</th>
                            <th>Park ID</th>
                            <th>Thrill Level</th>
                            <th>Capacity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {thrill.map(l => (
                                <tr>
                                    <td>{l.name}</td>
                                    <td>{l.park_id}</td>
                                    <td>{l.thrill_level}</td>
                                    <td>{l.capacity}</td>
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
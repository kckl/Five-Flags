import React, { useState, useEffect } from "react";
import './ParkInfo.css';

const ParkInfo = () => {

    const [hours, setHours] = useState([]);
    const [tickets, setTickets] = useState([]);

    const getHours = async() => {
        // const response = await fetch("http://localhost:8000/hours" + `/${id}`);

        const response = await fetch("http://localhost:8000/hours/1");
        const jsonData = await response.json();

        // console.log(jsonData);
        setHours(jsonData);
    };

    const getTickets = async() => {
        const response = await fetch("http://localhost:8000/ticketinfo");
        const jsonData = await response.json();
        setTickets(jsonData);
    };

    useEffect(() => {
        getHours();
        getTickets();
    }, []);

    // console.log(hours);

    return (
        <>
            <div className="ops-box-container">
                <div className="left-text-container">
                    <h2>Hours</h2>
                        <p>Choose a park:   </p>
                        <select id="parkhours">
                            <option value="default">Park Number</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        {/* <button onClick={fn1}>Submit</button> */}
                   
                        <table id="hours">
                            <thead>
                            <tr>
                                <th>Park #</th>
                                <th>City</th>
                                <th>Country</th>
                                <th>Hours</th>
                            </tr>
                            </thead>
                            <tbody>
                            {hours.map(h => (
                                <tr>
                                    <td>{h.id}</td>
                                    <td>{h.city}</td>
                                    <td>{h.country}</td>
                                    <td>{h.hours}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                </div>

                <div className="right-text-container">
                    <h2>Tickets</h2>
                        <p>Prices in USD per ticket.</p>
                        <table id="ticketinfo">
                            <thead>
                            <tr>
                                <th>Type</th>
                                <th>Price</th>
                            </tr>
                            </thead>
                            <tbody>
                            {tickets.map(ticket => (
                                                <tr>
                                                    <td>{ticket.type}</td>
                                                    <td>${ticket.price}</td>
                                                </tr>
                                            ))}
                            
                            </tbody>
                        </table>
                </div>

            </div>
        </>
    )
};

export default ParkInfo;
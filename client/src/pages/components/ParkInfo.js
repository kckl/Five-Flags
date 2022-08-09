import React, { useState, useEffect } from "react";
import './ParkInfo.css';

const ParkInfo = () => {

    const [hours, setHours] = useState([]);
    const [tickets, setTickets] = useState([]);
    const [isShown, setIsShown] = useState(false);

    const handleClick = event => {    
        setIsShown(true);
    };   

    const getHours = async(id) => {
        const response = await fetch("http://localhost:8000/hours" + `/${id}`);
        const jsonData = await response.json();
        setHours(jsonData);
    };

    const getTickets = async() => {
        const response = await fetch("http://localhost:8000/ticketinfo");
        const jsonData = await response.json();
        setTickets(jsonData);
    };


    const renderHours = () => {
        handleClick();
        var select = document.getElementById("parkhours");
        var selected = select.options[select.selectedIndex].value;
        getHours(selected);
    }

    useEffect(() => {
        getTickets();
    }, []);

    return (
        <>
            <div className="ops-box-container">
                <div className="left-text-container">
                    <h2>Hours</h2>
                    <div>
                        <p>Choose a park:   </p>
                        <select id="parkhours">
                            <option disabled selected value> -- select an option -- </option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        <button id="hourssubmit-btn" onClick={renderHours}>Submit</button>
                    </div>
                        
                    {isShown && (<div>
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
                            <tr>
                                <td>{hours.id}</td>
                                <td>{hours.city}</td>
                                <td>{hours.country}</td>
                                <td>{hours.hours}</td>
                            </tr>
                            {/* {hours.map(hour => {
                                <tr>
                                <td>{hour.id}</td>
                                <td>{hour.city}</td>
                                <td>{hour.country}</td>
                                <td>{hour.hours}</td>
                                </tr>
                            })} */}
                            </tbody>
                        </table>
                        </div>)}
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
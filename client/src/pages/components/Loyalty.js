import React, { useState } from "react";
import './Loyalty.css';
const loyaltyUrl = "http://localhost:8000/loyalty/"
const globalistUrl = "http://localhost:8000/globalist/"

const Loyalty = () => {

    const [loyalty, setLoyalty] = useState([]);
    const [globalist, setGlobalist] = useState([]);

    const getLoyalty = async () => {
        const response = await fetch(loyaltyUrl);
        const json = await response.json();
        setLoyalty(json);
    }

    const getGlobalist = async () => {
        const response = await fetch(globalistUrl);
        const json = await response.json();
        setGlobalist(json);
    }

    return (
        <>
            <div className="ops-box-container">
                <div className="left-text-container">
                    <div>
                        <h2 id="ticketcustomer">Loyal Customers</h2><button type="submit" id="loyaltyButton" onClick={getLoyalty}>Refresh Customers</button>
                    </div>
                    <p id="definition">Defined as those customers who have visited any park globally 3+ times</p>
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
                <div className="right-text-container">
                    <div>
                        <h2 id="ticketcustomer">Globalist Customers</h2><button type="submit" id="loyaltyButton" onClick={getGlobalist}>Refresh Customers</button>
                    </div>
                    <p id="definition">Defined as those customers who have visited all of our parks globally</p>
                    <table id="customers">
                        <thead>
                            <tr>
                            <th>Guest #</th>
                            <th>Guest Name</th>
                            <th>Age</th>
                            <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {globalist.map(g => (
                                <tr>
                                    <td>{g.id}</td>
                                    <td>{g.name}</td>
                                    <td>{g.age}</td>
                                    <td>{g.email}</td>
                                </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
};

export default Loyalty;
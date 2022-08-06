import React, { useEffect, useState } from "react";
import './BI.css';
const parksUrl = "http://localhost:8000/parks"

const BI = () => {

    const [parks, setParks] = useState([]);

    const getParks = async () => {
        const response = await fetch(parksUrl);
        const json = await response.json();
        setParks(json);
    }

    useEffect(() => {
        getParks();
    }, []);

    return (
        <>
            <div className="header">
                    <h1>Business Intelligence Dashboard</h1>
            </div>
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
                                <tr>
                                    <td>{park.id}</td>
                                    <td>{park.city}</td>
                                    <td>{park.country}</td>
                                </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default BI;
import React, { useState } from "react";
const thrillUrl = "http://localhost:8000/thrillingride/"
const relaxUrl = "http://localhost:8000/relaxingride/"
const averageUrl = "http://localhost:8000/averagethrill"

const ThrillingRides = () => {

    const [thrill, setThrill] = useState([]);
    const [relax, setRelax] = useState([]);
    const [average, setAverage] = useState([]);


    const getThrillingRide = async() => {
        try {
            const response = await fetch(thrillUrl);
            const jsonData = await response.json();

            setThrill(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };

    const getRelaxingRide = async() => {
        try {
            const response = await fetch(relaxUrl);
            const jsonData = await response.json();

            setRelax(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };

    const getAverageThrill = async() => {
        try {
            const response = await fetch(averageUrl);
            const jsonData = await response.json();

            setAverage(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <>
            <div className="ops-box-container">
                
                <div className="left-text-container">
                    <div>
                        <h2 id="thrilling">Most Thrilling Rides</h2>
                        <button type="submit" id="thrillingButton" onClick={getThrillingRide}>Get Thrilling Rides</button>
                    </div>
                    <p id="definition">The rides that are more thrilling than the average ride</p>
                    <table>
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

                <div className="right-text-container">
                    <div>
                        <h2 id="thrilling">Most Relaxing Rides</h2>
                        <button type="submit" id="relaxingButton" onClick={getRelaxingRide}>Get Relaxing Rides</button>
                    </div>
                    <p id="definition">The rides that are less thrilling than the average ride</p>
                    <table>
                        <thead>
                            <tr>
                            <th>Ride Name</th>
                            <th>Park ID</th>
                            <th>Thrill Level</th>
                            <th>Capacity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {relax.map(l => (
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

                <div className="right-text-container">
                    <div>
                        <h2 id="thrilling">Average thrill level for our parks</h2>
                        <button type="submit" id="averageButton" onClick={getAverageThrill}>Get Average Thrill</button>
                    </div>
                    <p id="definition">Average thrill level across all our parks</p>
                    <table id='thrill'>
                        <thead>
                            <tr>
                                <th>Average Thrill</th>
                            </tr>
                        </thead>
                        <tbody>
                            {average.map(l => (
                                <tr>
                                    <td>{l.roundedAvg}</td>
                                </tr>
                                ))}
                        </tbody>
                    </table>
                </div> 
            </div>
        </>
    )
};

export default ThrillingRides;

// SELECT ROUND(AVG(thrill_level) ,2) AS "rounded avg" FROM (SELECT COUNT(thrill_level), thrill_level FROM ride_info GROUP BY thrill_level) AS count; 

// SELECT ROUND(AVG(outstanding_amt) ,0) AS "Rounded Avg."
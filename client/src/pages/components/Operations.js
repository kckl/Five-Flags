// delete operation - delete rides / food establishments / shops
// update operation - food establishments

import React, { useEffect, useState } from "react";
import './Operations.css';
const parksUrl = "http://localhost:8000/parks"
const staffUrl = "http://localhost:8000/staff"
const ridesUrl = "http://localhost:8000/rides"
const foodUrl = "http://localhost:8000/food"

const Operations = () => {

    const [parks, setParks] = useState([]);
    const [staff, setStaff] = useState([]);
    const [rides, setRides] = useState([]);
    const [food, setFood] = useState([]);

    const getParks = async () => {
        const response = await fetch(parksUrl);
        const json = await response.json();
        setParks(json);
    }

    const getStaff = async () => {
        const response = await fetch(staffUrl);
        const json = await response.json();
        setStaff(json);
    }

    const getRides = async () => {
        const response = await fetch(ridesUrl);
        const json = await response.json();
        setRides(json);
    }

    const getFood = async () => {
        const response = await fetch(foodUrl);
        const json = await response.json();
        setFood(json);
    }

    useEffect(() => {
        getParks();
        getStaff();
        getRides();
        getFood();
    }, []);

    const removePark = async (id) => {
        const removePark = await fetch(parksUrl + `/${id}`, {
            method: "DELETE"
        });

        console.log(removePark);

        setParks(parks.filter(park => park.id !== id));
        setRides(rides.filter(ride => ride.park_id !== id));
        setFood(food.filter(f => f.park_id !== id));
    }

    return (
        <>
            <div className="ops-box-container">
                <div className="left-text-container">
                    <h2>Global Parks</h2>
                    <table id="parks">
                        <thead>
                            <tr>
                            <th>Park #</th>
                            <th>City</th>
                            <th>Country</th>
                            <th id="centercol">Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {parks.map(park => (
                                <tr>
                                    <td>{park.id}</td>
                                    <td>{park.city}</td>
                                    <td>{park.country}</td>
                                    <td id="centercol"><button onClick={() => removePark(park.id)}>Delete</button></td>
                                </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
                <div className="right-text-container">
                    <h2>Global Staff</h2>
                    <table id="staff">
                        <thead>
                            <tr>
                            <th>Staff #</th>
                            <th>Name</th>
                            <th>Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            {staff.map(s => (
                                <tr>
                                    <td>{s.id}</td>
                                    <td>{s.name}</td>
                                    <td>{s.role}</td>
                                </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="ops-box-container">
                <div className="left-text-container">
                    <h2>Global Rides</h2>
                    <table id="rides">
                        <thead>
                            <tr>
                            <th id="firstcol">Ride Name</th>
                            <th>Park #</th>
                            <th>Thrill Level</th>
                            <th>Capacity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rides.map(ride => (
                                <tr key={ride.park_id}>
                                    <td>{ride.name}</td>
                                    <td>{ride.park_id}</td>
                                    <td>{ride.thrill_level}</td>
                                    <td>{ride.capacity}</td>
                                </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
                <div className="right-text-container">
                    <h2>Global Dining</h2>
                    <table id="food">
                        <thead>
                            <tr>
                            <th>Name</th>
                            <th>Park #</th>
                            <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {food.map(f => (
                                <tr>
                                    <td>{f.name}</td>
                                    <td>{f.park_id}</td>
                                    <td>{f.price}</td>
                                </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Operations;
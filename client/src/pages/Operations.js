// delete operation - delete rides / food establishments / shops
// update operation - food establishments

import React, { useEffect, useState } from "react";
import './Operations.css';
const ridesUrl = "http://localhost:8000/rides"
const parksUrl = "http://localhost:8000/parks"

const Operations = () => {

    const [rides, setRides] = useState([]);
    const [parks, setParks] = useState([]);

    const getRides = async () => {
        const response = await fetch(ridesUrl);
        const json = await response.json();
        setRides(json);
    }

    const getParks = async () => {
        const response = await fetch(parksUrl);
        const json = await response.json();
        setParks(json);
    }

    useEffect(() => {
        getRides();
        getParks();
    }, []);

    // const deleteRide = async (parkid, name) => {
    //     const deleteRide = await fetch(ridesUrl + `/${parkid}/${name}`, {
    //         method: "DELETE"
    //     });
    //     console.log(deleteRide);
    //     setRides(rides.filter(ride => ride.name !== name))
    // }

    const removePark = async (id) => {
        const removePark = await fetch(parksUrl + `/${id}`, {
            method: "DELETE"
        });
        setParks(parks.filter(park => park.id !== id));
        setRides(rides.filter(ride => ride.park_id !== id));
    }

    return (
        <>
            <div className="rides-box-container">
                <div className="rides-text-container">
                    <h2>Global Rides</h2>
                    <table id="rides">
                        <thead>
                            <tr>
                            <th id="firstcol">Ride Name</th>
                            <th>Park #</th>
                            <th>Thrill Level</th>
                            <th>Capacity</th>
                            {/* <th id="deletecol">Delete</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {rides.map(ride => (
                                <tr key={ride.park_id}>
                                    <td>{ride.name}</td>
                                    <td>{ride.park_id}</td>
                                    <td>{ride.thrill_level}</td>
                                    <td>{ride.capacity}</td>
                                    {/* <td id="deletecol"><button className="delete" onClick={() => deleteRide(ride.park_id, ride.name)}>Delete</button></td> */}
                                </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="rides-box-container">
                <div className="rides-text-container">
                    <h2>Global Parks</h2>
                        <table id="parks">
                            <thead>
                                <tr>
                                <th>Park #</th>
                                <th>City</th>
                                <th>Country</th>
                                <th id="deletecol">Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                {parks.map(park => (
                                    <tr>
                                        <td>{park.id}</td>
                                        <td>{park.city}</td>
                                        <td>{park.country}</td>
                                        <td id="deletecol"><button onClick={() => removePark(park.id)}>Delete</button></td>
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
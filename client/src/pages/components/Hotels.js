import React, { useState, useEffect } from "react";
import './Hotels.css';


const Hotels = () => {

    const [hotels, setHotels] = useState([]);

    const getHotel = async(col) => {
            const response = await fetch("http://localhost:8000/hotel");
            const jsonData = await response.json();
            setHotels(jsonData);
    };


    useEffect(() => {
        // getHotel();
    });


    return (
        <>
            <div className="ops-box-container">
                <div className="text-container">
                    <h2 id="hotels">Hotels</h2>
                    <button type="submit" id="salesButton" onClick={getHotel}>See Hotels</button>
                    <table id="hotel">
                        <thead>
                        <tr>
                            <th>Park #</th>
                            <th>Brand</th>
                            <th>Address</th>
                            <th>Price</th>
                        </tr>
                        </thead>
                        <tbody>
                            {hotels.map(hotel => (
                                <tr>
                                <td>{hotel.park_id}</td>
                                <td>{hotel.brand}</td>
                                <td>{hotel.address}</td>
                                <td>{hotel.price}</td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
};

export default Hotels;
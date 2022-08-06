import React, { useState, useEffect } from "react";
import './GetDining.css';


const GetDining = () => {

    const [restaurants, setRestaurants] = useState([]);
    const [fastfoods, setFastfoods] = useState([]);

    const getRestaurants = async() => {
        try {
            const response = await fetch("http://localhost:8000/restaurant");
            const jsonData = await response.json();

            setRestaurants(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };

    const getFastfoods = async() => {
        try {
            const response = await fetch("http://localhost:8000/fastfood");
            const jsonData = await response.json();

            setFastfoods(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getRestaurants();
        getFastfoods();
    });

    return (
        <>
            <div className="ops-box-container">
                <div className="left-text-container">
                    <h2>Restaurants</h2>
                        <table id="restaurant">
                            <thead>
                            <tr>
                                <th>Park #</th>
                                <th>Name</th>
                                <th>Cuisine</th>
                                <th>Price</th>
                                <th>Seats</th>
                            </tr>
                            </thead>
                            <tbody>
                            {restaurants.map(restaurant => (
                                                <tr>
                                                    <td>{restaurant.park_id}</td>
                                                    <td>{restaurant.name}</td>
                                                    <td>{restaurant.cuisine}</td>
                                                    <td>{restaurant.price}</td>
                                                    <td>{restaurant.seats}</td>
                                                </tr>
                                            ))}
                            
                            </tbody>
                        </table>
                </div>
            

    
                <div className="right-text-container">
                    <h2>Fast Food</h2>
                        <table id="fastfood">
                            <thead>
                            <tr>
                                <th>Park #</th>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Price</th>
                            </tr>
                            </thead>
                            <tbody>
                            {fastfoods.map(fastfood => (
                                                <tr>
                                                    <td>{fastfood.park_id}</td>
                                                    <td>{fastfood.name}</td>
                                                    <td>{fastfood.type}</td>
                                                    <td>{fastfood.price}</td>
                                                </tr>
                                            ))}
                            
                            </tbody>
                        </table>
                </div>
            </div>
           
        </>
    )
};

export default GetDining;
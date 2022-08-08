import React, { useState, useEffect } from "react";
import './GetDining.css';


const GetDining = () => {

    const [restaurants, setRestaurants] = useState([]);
    const [fastfoods, setFastfoods] = useState([]);

    const getRestaurants = async(id, price) => {
            const response = await fetch("http://localhost:8000/restaurant" + `/${id}` + `/${price}`);
            const jsonData = await response.json();
            setRestaurants(jsonData);
    };

    const getFastfoods = async(id, price) => {
            const response = await fetch("http://localhost:8000/fastfood" + `/${id}` + `/${price}`);
            const jsonData = await response.json();
            setFastfoods(jsonData);
    };


    const renderRestaurants = () => {
        var selectID = document.getElementById("restaurantparkid");
        var selectedID = selectID.options[selectID.selectedIndex].value;

        var selectPrice = document.getElementById("restaurantprice");
        var selectedPrice = selectPrice.options[selectPrice.selectedIndex].value;

        var selectType = document.getElementById("diningtype");
        var selectedType = selectType.options[selectType.selectedIndex].value;

        if (selectedType == "restaurant") {
            getRestaurants(selectedID, selectedPrice);
        } else if (selectedType == "fastfood") {
            getFastfoods(selectedID, selectedPrice);
        } else {
            getRestaurants(selectedID, selectedPrice);
            getFastfoods(selectedID, selectedPrice);
        }   
    }

    return (
        <>
            <div className="ops-box-container">
                <div className="left-text-container">
                <div>
                    <p>Choose options:   </p>
                        <select id="restaurantparkid">
                            <option disabled selected value> -- parks -- </option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        <select id="restaurantprice">
                            <option disabled selected value> -- price -- </option>
                            <option value="$">$</option>
                            <option value="$$">$$</option>
                            <option value="$$$">$$$</option>
                            <option value="$$$$">$$$$</option>
                        </select>
                        <select id="diningtype">
                            <option disabled selected value> -- type -- </option>
                            <option value="all">All</option>
                            <option value="restaurant">Restaurants</option>
                            <option value="fastfood">Fast Food</option>
                        </select>
                        <button id="diningsubmit-btn" onClick={renderRestaurants}>Submit</button>
                </div>
                <hr></hr>
                

                    <h2>Restaurants</h2>
                        <table id="restaurant">
                            <thead>
                            <tr>
                                <th>Park #</th>
                                <th>Name</th>
                                <th>Cuisine</th>
                                <th>Price</th>
                            </tr>
                            </thead>
                            <tbody>
                                {restaurants.map(restaurant => (
                                    <tr>
                                    <td>{restaurant.park_id}</td>
                                    <td>{restaurant.name}</td>
                                    <td>{restaurant.cuisine}</td>
                                    <td>{restaurant.price}</td>
                                </tr>
                                ))}
                
                            </tbody>
                        </table>
                </div>
            

    
                <div className="right-text-container">
                    <br></br>
                    <hr></hr>
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
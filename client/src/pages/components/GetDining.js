import React, { useState, useEffect } from "react";
import './GetDining.css';


const GetDining = () => {

    const [restaurants, setRestaurants] = useState([]);
    const [fastfoods, setFastfoods] = useState([]);
    const [ffIsShown, setFFIsShown] = useState(false);
    const [rIsShown, setRIsShown] = useState(false);

    var testing = document.getElementById("diningcol");

    // const handleClick = event => {    
    //      setIsShown(true);
    // };

    const getRestaurants = async(id, att1) => {
            const response = await fetch("http://localhost:8000/restaurant" + `/${id}` + `/${att1}`);
            const jsonData = await response.json();
            setRestaurants(jsonData);
    };

    const getFastfoods = async(id, att1) => {
            const response = await fetch("http://localhost:8000/fastfood" + `/${id}` + `/${att1}`);
            const jsonData = await response.json();
            setFastfoods(jsonData);
    };


    const renderDining = () => {
        var selectID = document.getElementById("restaurantparkid");
        var selectedID = selectID.options[selectID.selectedIndex].value;

        var selectType = document.getElementById("diningtype");
        var selectedType = selectType.options[selectType.selectedIndex].value;

        var selectCol = document.getElementById("diningcol");
        var selectedCol = selectCol.options[selectCol.selectedIndex].value;

        if (selectedType == "restaurant") {
            setRIsShown(true);
            getRestaurants(selectedID, selectedCol);
        } else if (selectedType == "fastfood" && selectedCol == "cuisine") {
            setFFIsShown(true);
            getFastfoods(selectedID, "type");
        } else if (selectedType == "fastfood") {
            setFFIsShown(true);
            getFastfoods(selectedID, selectedCol);
        } else if (selectedType == "all" && selectedCol == "cuisine"){
            setFFIsShown(true);
            setRIsShown(true);
            getRestaurants(selectedID, selectedCol);
            getFastfoods(selectedID, "type");
        } else if (selectedType == "all"){
            setFFIsShown(true);
            setRIsShown(true);
            getRestaurants(selectedID, selectedCol);
            getFastfoods(selectedID, selectedCol);
        }
    };

    const refresh = () => {
        window.location.reload();
    };


    return (
        <>
            <div className="ops-box-container">
                <div className="left-text-container">
                    <div className="diningoptions">
                        <h2>Dining</h2>
                        <p>Choose options:   </p>
                        <br></br>
                            <select id="restaurantparkid" >
                                <option value="" disabled selected> -- parks -- </option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            <select id="diningtype">
                                <option value="" disabled selected> -- type -- </option>
                                <option value="all">All</option>
                                <option value="restaurant">Restaurants</option>
                                <option value="fastfood">Fast Food</option>
                            </select>
                            <select id="diningcol">
                                <option value="" disabled selected> -- other -- </option>
                                <option value="price">Price</option>
                                <option value="cuisine">Cuisine</option>
                            </select>
                            <button id="diningsubmit-btn" onClick={renderDining}>Submit</button>
                            <button id="diningreset-btn" onClick={refresh}>Reset</button>
                    </div>
                </div>
            

    
                <div className="right-text-container">
                {ffIsShown && (<div>
                    
                    <h4>Fast Food</h4>
                        <table id="fastfood">
                            <thead>
                            <tr>
                                <th>Park #</th>
                                <th>Name</th>
                                <th>Cuisine</th>
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
                        </div>)}

                {rIsShown && (<div>
                                <h4>Restaurants</h4>
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
                            </div>)}
                </div>
           
            </div>   
        </>
    )
};

export default GetDining;
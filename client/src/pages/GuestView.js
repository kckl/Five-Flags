import React from "react";
// import {useState} from 'react';
import './GuestView.css';
import img from "../images/FiveFlags.png";

import GetShop from "./components/GetShop";
import GetDining from "./components/GetDining";
import ParkInfo from "./components/ParkInfo";



const GuestView = () => {
    // const [isShown, setIsShown] = useState(false);
    // const handleClick = event => {
    //     setIsShown(current => !current);
    //   };

    return (
        <>
            <div className="page-container">
                <div className="header">
                    <div className="welcome"><h1>Welcome to the Five Flags Park Guest Experience Dashboard!</h1></div>
                    <img className="small-logo" src={img} alt="company logo"></img>
                    <br></br>
                    <p className="info">Learn more about our rides, shopping, dining options, and more.</p>
                </div>

                <div>
                    <ul class="nav justify-content-center">
                        <li class="nav-item">
                            <a class="nav-link active" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="/GuestView">Park Information</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Attractions</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Places to Stay</a>
                        </li>
                    </ul>
                </div>
                
                <ParkInfo />
            </div>
        </>
    );
};

export default GuestView;
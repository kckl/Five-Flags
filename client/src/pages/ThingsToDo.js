import React from "react";
import './GuestView.css';
import img from "../images/FiveFlags.png";

import GetShop from "./components/GetShop";
import GetDining from "./components/GetDining";
import Rides from "./components/Rides";



const ThingsToDo = () => {

    return (
        <>
            <div className="page-container">
                <div className="header">
                    <div className="welcome"><h1>Welcome to the Five Flags Park Guest Experience Dashboard!</h1></div>
                    <img className="small-logo" src={img} alt="company logo"></img>
                </div>

                <div>
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link active" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/GuestView">Park Information</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/ThingsToDo">Things To Do</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Places to Stay</a>
                        </li>
                    </ul>
                </div>
                
                <GetDining />
                <Rides />
                <GetShop />
                
                
            </div>
        </>
    );
};

export default ThingsToDo;
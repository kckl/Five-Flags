import React from "react";
import './GuestView.css';
import img from "../images/FiveFlags.png";

import ParkInfo from "./components/ParkInfo";



const GuestView = () => {

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
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link active" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/GuestView">Park Information</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/ThingsToDo">Things To Do</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Places To Stay</a>
                        </li>
                    </ul>
                </div>
                
                <ParkInfo />
            </div>
        </>
    );
};

export default GuestView;
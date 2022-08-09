import React from "react";
import './GuestHeader.css';
import img from "../../images/FiveFlags.png";
import { Link } from "react-router-dom";


const GuestHeader = () => {

    return (
        <>
            <div className="header">
                <div className="welcome"><h1>Welcome to the Five Flags Park Guest Experience Dashboard!</h1></div>
                <Link to="/">
                    <img className="small-logo" src={img} alt="company logo"></img>
                </Link>
            </div>

            <div>
                <ul className="navbar">
                    <li className="nav-item">
                        <a className="nav-link active" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/GuestView">Park Information</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/ThingsToDo">Things To Do</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/PlacesToStay">Places To Stay</a>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default GuestHeader;
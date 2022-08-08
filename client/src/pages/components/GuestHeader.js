import React from "react";
import './GuestHeader.css';
import img from "../../images/FiveFlags.png";


const GuestHeader = () => {

    return (
        <>
                <div className="header">
                    <div className="welcome"><h1>Welcome to the Five Flags Park Guest Experience Dashboard!</h1></div>
                    <img className="small-logo" src={img} alt="company logo"></img>
                </div>

                <div>
                    <ul className="navbar">
                        <li className="nav-item">
                            <a className="nav-link active" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/GuestView">Park Information</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/ThingsToDo">Things To Do</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Places To Stay</a>
                        </li>
                    </ul>
                </div>
                
        </>
    );
};

export default GuestHeader;
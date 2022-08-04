import React from 'react';
import { Link } from "react-router-dom";
import './Home.css';
import img from "../images/FiveFlags.png";

const Home = () => {    
    return (
        <>
            <body>
                <div className="container">
                    <img src={img} alt="company logo"></img>
                    <h1>Welcome to Five Flags!</h1>
                    <div className="buttons">
                        <span>Are you a </span>
                        <Link to="/GuestView">
                            <button type="button" onClick>Guest</button>
                        </Link>
                        <span> or a </span>
                        <Link to="/StaffLogin">
                            <button type="button" onClick>Staff</button>
                        </Link>
                        <span> ?</span>
                    </div>
                </div>
            </body>
        </>
    );
};

export default Home;
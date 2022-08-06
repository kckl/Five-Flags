import React from "react";
import {useState} from 'react';
import './GuestView.css';
import img from "../images/FiveFlags.png";

import GetShop from "./components/GetShop";
import GetDining from "./components/GetDining";



const GuestView = () => {
    const [isShown, setIsShown] = useState(false);
    const handleClick = event => {
        setIsShown(current => !current);
      };

    return (
        <>
            <div className="page-container">
            <div className="header">
                <div className="welcome"><h1>Welcome to the Five Flags Park Guest Experience Dashboard!</h1></div>
                <img className="small-logo" src={img} alt="company logo"></img>
                <br></br>
                <p className="info">Learn more about our rides, shopping, and dining options.</p>
            </div>
                {/*<div>
                <button onClick={handleClick}>Browse Shops</button>
                    {isShown && (
                        <div>
                        <h3>Here are our shops:</h3>
                        </div>
                    )}
                    {isShown &&  <GetShop />}           
                </div>*/}

                <GetDining />
                <GetShop />
            </div>
        </>
    );
};

export default GuestView;
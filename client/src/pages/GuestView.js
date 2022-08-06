import React from "react";
import {useState} from 'react';
import './GuestView.css';

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
                <h1>Welcome to the Five Flags Guest Experience Dashboard!</h1>
                <p>Learn more about our rides, shopping, and dining options.</p>
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
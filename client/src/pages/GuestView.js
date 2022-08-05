import React from "react";
import {useState} from 'react';
import './GuestView.css';

import GetShop from "./components/GetShop";

const GuestView = () => {
    const [isShown, setIsShown] = useState(false);
    const handleClick = event => {
        setIsShown(current => !current);
      };

    return (
        <>
            <h2>Welcome to Five Flags!</h2>
            <div>
            <button onClick={handleClick}>Browse Shops</button>
                {isShown && (
                    <div>
                    <h3>Here are our shops:</h3>
                    </div>
                )}
                {isShown &&  <GetShop />}           
            </div>
        </>
    );
};


// selection operation - information dashboard: rides, shops, dining options
// join operation - find names of rides with x restrictions?
            

export default GuestView;
import React from "react";
import './PlacesToStay.css';

import GuestHeader from "./components/GuestHeader";
import Hotels from "./components/Hotels";



const PlacesToStay = () => {

    return (
        <>
            <div className="page-container">
                
                <GuestHeader />
                <Hotels />
                
            </div>
        </>
    );
};

export default PlacesToStay;
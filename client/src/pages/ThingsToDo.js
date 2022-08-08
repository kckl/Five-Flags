import React from "react";
import './ThingsToDo.css';

import ShopsRides from "./components/ShopsRides";
import GetDining from "./components/GetDining";
import GuestHeader from "./components/GuestHeader";



const ThingsToDo = () => {

    return (
        <>
            <div className="page-container">
                
                <GuestHeader />
                <GetDining />
                <ShopsRides />
                
            </div>
        </>
    );
};

export default ThingsToDo;
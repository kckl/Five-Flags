import React from "react";
import './GuestView.css';
import img from "../images/FiveFlags.png";

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
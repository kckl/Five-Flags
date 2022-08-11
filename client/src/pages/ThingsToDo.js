import React from "react";
import '../css/ThingsToDo.css';

import ShopsRides from "./components/ShopsRides";
import GetDining from "./components/GetDining";
import Rides from "./components/Rides";
import GuestHeader from "./components/GuestHeader";
import RideData from "../RideData";



const ThingsToDo = () => {

    const rides = RideData.map(ride => {
        return (
            <Rides 
                key={ride.key}
                img={ride.img}
                name={ride.name}
            />
        )
    })

    return (
        <>
            <div className="page-container">
                
                <GuestHeader />
                <GetDining />
                <br></br>
                {rides}
                <ShopsRides />
                
            </div>
        </>
    );
};

export default ThingsToDo;
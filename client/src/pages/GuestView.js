import React from "react";
import './GuestView.css';

import ParkInfo from "./components/ParkInfo";
import GuestHeader from "./components/GuestHeader";



const GuestView = () => {

    return (
        <>
            <div className="page-container">
                <GuestHeader />
                <ParkInfo />
            </div>
        </>
    );
};

export default GuestView;
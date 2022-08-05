import React from "react";
import './GuestView.css';

import GetShop from "./components/GetShop";

const GuestView = () => {
    return (
        <>
            <h2>Hello this is the guest view</h2>
            <GetShop />
            <ul>
                <li>selection operation - information dashboard: rides, shops, dining options</li>
                <li>join operation - find names of rides with x restrictions?</li>
            </ul>
        </>
    );
};

export default GuestView;
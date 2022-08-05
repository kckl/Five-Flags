import React from "react";
import './StaffView.css';
import img from "../images/FiveFlags.png";

// table components
import AddStaff from "./components/AddStaff";
import Operations from "./components/Operations"

const StaffView = () => {
    return (
        <>
            <div className="page-container">
            <div className="header">
                <h1>Welcome to the Five Flags Park Operations Dashboard!</h1> <img className="small-logo" src={img} alt="company logo"></img>
            </div>
                <AddStaff />
                <Operations />
            </div>
        </>
    );
};

export default StaffView;


// insert operation - add new staff
// delete operation - delete rides / food establishments / shops
// update operation - food establishments
// aggregation with group by - total ticket sales per day / month / etc
// aggregation with having - most loyal customers, i.e. having x amount of visits a year
// nested aggregation with group by - something to do with ticket types
// division operation - customers who have been to all our parks around the world

import React from "react";
import './StaffView.css';
import img from "../images/FiveFlags.png";

// table components
import AddStaff from "./AddStaff";
import Operations from "./Operations"

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

{/* <ul>
<li>insert operation - add new staff</li> done
<li>delete operation - delete rides / food establishments / shops</li>
<li>update operation - food establishments</li>
<li>aggregation with group by - total ticket sales per day / month / etc</li>
<li>aggregation with having - most loyal customers, i.e. having x amount of visits a year</li>
<li>nested aggregation with group by - something to do with ticket types</li>
<li>division operation - customers who have been to all our parks around the world</li>
</ul> */}
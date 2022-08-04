import React from "react";

const StaffLogin = () => {
    return (
        <>
            <h2>Hello this is the staff view</h2>
            <ul>
                <li>insert operation - add new staff</li>
                <li>delete operation - delete rides / food establishments / shops</li>
                <li>update operation - food establishments</li>
                <li>aggregation with group by - total ticket sales per day / month / etc</li>
                <li>aggregation with having - most loyal customers, i.e. having x amount of visits a year</li>
                <li>nested aggregation with group by - something to do with ticket types</li>
                <li>division operation - customers who have been to all our parks around the world</li>
            </ul>
        </>
    );
};

export default StaffLogin;
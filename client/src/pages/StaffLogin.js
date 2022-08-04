import React, { useState } from "react";
import './StaffLogin.css';

const StaffLogin = () => {

    const [name, setName] = useState("");
    const [role, setRole] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const body = { name, role };
        const response = await fetch("http://localhost:8000/staff", {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(body)
        });
    }

    return (
        <>
            <h2>Register New Employees</h2>
            <div className="name">
                <form onSubmit={handleSubmit}>
                    <label>Full Name </label>
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={e => setName(e.target.value)}/>
                    <label>Role </label>
                        <input
                            type="text"
                            name="role"
                            value={role}
                            onChange={e => setRole(e.target.value)}/>
                    <input type="submit" value="Submit" />
                </form>
            </div>

        
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
import React, { useState } from "react";
import './AddStaff.css';

const AddStaff = () => {

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

        alert("Form Submitted!");
    }

    return (
        <>
            <div className="box-container">
                <div className="text-container">
                    <h2>Register New Employees</h2>
                    <div className="name">
                        <form onSubmit={handleSubmit}>
                            <label>Full Name: </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    required />
                            <div className="formspace"></div>
                            <label>Role: </label>
                                <input
                                    type="text"
                                    name="role"
                                    value={role}
                                    onChange={e => setRole(e.target.value)}
                                    required />
                            <div className="formspace"></div>
                            <input type="submit" value="Add Member" />
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddStaff;

import React, { useState } from "react";
const staffUrl = "http://localhost:8000/staff"
const rideUrl = "http://localhost:8000/rides"
const foodUrl = "http://localhost:8000/food"

const AddStaff = () => {

    const [staffName, setStaffName] = useState("");
    const [role, setRole] = useState("");

    const [rideName, setRideName] = useState("");
    const [ridePark, setRidePark] = useState("");
    const [thrillLevel, setThrill] = useState("");
    const [capacity, setCapacity] = useState("");

    const [foodName, setFoodName] = useState("");
    const [foodPark, setFoodPark] = useState("");
    const [price, setPrice] = useState("");

    const handleStaffSubmit = async (e) => {
        e.preventDefault();

        const body = { staffName, role };
        const response = await fetch(staffUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(body)
        });

        console.log(response);
        alert("Employee successfully added!");
        window.location.reload(false);

        // clear input values in form
        setStaffName('');
        setRole('');
    }

    const handleRideSubmit = async (e) => {
        e.preventDefault();

        const body = { rideName, ridePark, thrillLevel, capacity };
        const response = await fetch(rideUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(body)
        });

        console.log(response);
        alert("Ride successfully added!");
        window.location.reload(false);

        // clear input values in form
        setRideName('');
        setRidePark('');
        setThrill('');
        setCapacity('');
    }

    const handleFoodSubmit = async (e) => {
        e.preventDefault();

        const body = { foodName, foodPark, price };
        const response = await fetch(foodUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(body)
        });

        console.log(response);
        alert("Dining successfully added!");
        window.location.reload(false);

        // clear input values in form
        setFoodName('');
        setFoodPark('');
        setPrice('');
    }

    return (
        <>
            <div className="box-container">
                <div className="text-container">
                    <h2>Register New Employees</h2>
                    <div className="name">
                        <form onSubmit={handleStaffSubmit}>
                            <label>Full Name: </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={staffName}
                                    onChange={e => setStaffName(e.target.value)}
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
                            <input type="submit" value="Add Staff" />
                        </form>
                    </div>
                </div>

                <div className="text-container">
                    <h2>Add New Ride</h2>
                    <div className="name">
                        <form onSubmit={handleRideSubmit}>
                            <label>Ride Name: </label>
                                <input
                                    type="text"
                                    value={rideName}
                                    onChange={e => setRideName(e.target.value)}
                                    required />
                            <div className="formspace"></div>
                            <label>Park #: </label>
                                <input
                                    type="number"
                                    min="1"
                                    max="5"
                                    value={ridePark}
                                    onChange={e => setRidePark(e.target.value)}
                                    required />
                            <div className="formspace"></div>
                            <label>Thrill Level: </label>
                                <input
                                    type="number"
                                    min="1"
                                    max="10"
                                    value={thrillLevel}
                                    onChange={e => setThrill(e.target.value)}
                                    required />
                            <div className="formspace"></div>
                            <label>Capacity: </label>
                                <input
                                    type="number"
                                    min="1"
                                    max="100"
                                    value={capacity}
                                    onChange={e => setCapacity(e.target.value)}
                                    required />
                            <div className="formspace"></div>
                            <input type="submit" value="Add Ride" />
                        </form>
                    </div>
                </div>

                <div className="text-container">
                    <h2>Add New Dining</h2>
                    <div className="name">
                        <form onSubmit={handleFoodSubmit}>
                            <label>Dining Name: </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={foodName}
                                    onChange={e => setFoodName(e.target.value)}
                                    required />
                            <div className="formspace"></div>
                            <label>Park #: </label>
                                <input
                                    type="number"
                                    min="1"
                                    max="5"
                                    value={foodPark}
                                    onChange={e => setFoodPark(e.target.value)}
                                    required />
                            <div className="formspace"></div>
                            <label>Price: </label>
                                <input
                                    type="text"
                                    name="role"
                                    value={price}
                                    onChange={e => setPrice(e.target.value)}
                                    required />
                            <div className="formspace"></div>
                            <input type="submit" value="Add Dining" />
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddStaff;
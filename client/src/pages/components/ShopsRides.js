import React, { useState, useEffect } from "react";
import './ShopsRides.css';

const GetShop = () => {

    const [shops, setShops] = useState([]);
    const [rides, setRides] = useState([]);

    const getShops = async () => {
            const response = await fetch("http://localhost:8000/shop");
            const jsonData = await response.json();

            setShops(jsonData);
    };

    const getRides = async () => {
        const response = await fetch("http://localhost:8000/rides");
        const jsonData = await response.json();

        setRides(jsonData);
    };

    useEffect(() => {
        getShops();
        getRides();
    }, []);

    return (
        <>
        
            <div className="ops-box-container">
                <div className="left-text-container">
                    <h2>Shopping</h2>
                    <table className="table table-hover" overflow="auto">
                        <thead>
                            <tr>
                                <th>Shop Name</th>
                                <th>Category</th>
                            </tr>
                        </thead>
                        <tbody>
                            {shops.map(shop => (
                                <tr>
                                    <td>{shop.name}</td>
                                    <td>{shop.category}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="right-text-container">
                    <h2>Rides</h2>
                    <table id="rides">
                        <thead>
                            <tr>
                            <th>Park #</th>
                            <th>Ride Name</th>
                            <th>Thrill Level</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rides.map(ride => (
                                <tr key={ride.park_id}>
                                    <td>{ride.park_id}</td>
                                    <td>{ride.name}</td>
                                    <td>{ride.thrill_level}</td>
                                </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
           </div>
        </>
    )
};

export default GetShop;
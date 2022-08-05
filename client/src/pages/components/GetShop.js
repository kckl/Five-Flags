import React, { useState, useEffect } from "react";
import './GetShop.css';

const GetShop = () => {

    const [shops, setShops] = useState([]);

    const getShops = async () => {
        try {
            const response = await fetch("http://localhost:8000/guest");
            const jsonData = await response.json();

            setShops(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getShops();
    }, []);


    return (
        <>
        
        {" "}
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Shop Name</th>
                        <th>Category</th>
                        <th>Park ID</th>
                    </tr>
                </thead>
                <tbody>
                    {/*<tr>
                        <td>John</td>
                        <td>Doe</td>
                        <td>john@example.com</td>
                    </tr> */}
                    {shops.map(shop => (
                        <tr>
                            <td>{shop.name}</td>
                            <td>{shop.category}</td>
                            <td>{shop.park_id}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
};

export default GetShop;
import React, { useState, useEffect } from "react";
import './GetShop.css';

const GetShop = () => {

    const [shops, setShops] = useState([]);

    const getShops = async () => {
        try {
            const response = await fetch("http://localhost:8000/shop");
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
        
        <div className="box-container">
            <div className="text-container">
            <h2>Shopping</h2>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Park ID</th>
                        <th>Shop Name</th>
                        <th>Category</th>
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
                            <td>{shop.park_id}</td>
                            <td>{shop.name}</td>
                            <td>{shop.category}</td>
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
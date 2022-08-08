import React, { useState, useEffect } from "react";
import './GetShop.css';

const GetShop = () => {

    const [shops, setShops] = useState([]);

    const getShops = async () => {
            const response = await fetch("http://localhost:8000/shop");
            const jsonData = await response.json();

            setShops(jsonData);
    };

    useEffect(() => {
        getShops();
    }, []);

    return (
        <>
        
        <div className="box-container">
            <div className="text-container">
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
            </div>
        </>
    )
};

export default GetShop;
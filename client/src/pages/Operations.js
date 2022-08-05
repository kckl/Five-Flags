// delete operation - delete rides / food establishments / shops
// update operation - food establishments

import React, { useEffect, useState } from "react";

const Operations = () => {

    // const getRides = async (e) => {
    //     e.preventDefault();

    //     const body = { name, role };
    //     const response = await fetch("http://localhost:8000/staff", {
    //         method: "POST",
    //         headers: { "Content-Type": "application/json"},
    //         body: JSON.stringify(body)
    //     });

    //     alert("Form Submitted!");
    // }

    return (
        <>
            <h1>Hello</h1>
            <table>
                <tr>
                    <th>Company</th>
                    <th>Contact</th>
                    <th>Country</th>
                </tr>
                <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                </tr>
                <tr>
                    <td>Centro comercial Moctezuma</td>
                    <td>Francisco Chang</td>
                    <td>Mexico</td>
                </tr>
            </table>
        </>
    );
};

export default Operations;
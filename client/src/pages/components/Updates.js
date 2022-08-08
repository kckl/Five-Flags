import React, { useState } from "react";
import { useParams } from "react-router-dom";
import './Updates.css';
const diningUrl = "http://localhost:8000/food"
const rideUrl = "http://localhost:8000/rides"

const Updates = () => {

    const [oldDiningName, setDiningOldName] = useState();
    const [newDiningParkID, setDiningNewParkID] = useState("");
    const [newDiningPrice, setDiningNewPrice] = useState("");

    const [oldRideName, setOldRideName] = useState("");
    const [newRideParkID, setNewRideParkID] = useState("");
    const [newRideThrill, setNewRideThrill] = useState("");
    const [newRideCapacity, setNewRideCapacity] = useState("");

    const HandleDiningUpdate = async (e) => {
        e.preventDefault();

        const body = { oldDiningName, newDiningParkID, newDiningPrice };
        const response = await fetch(`http://localhost:8000/food/${body[oldDiningName]}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(body)
        });

        console.log(body);
        console.log(response);
        // alert("Restaurant successfully updated!");
        
        // setDiningOldName('');
        // setDiningNewParkID('');
        // setDiningNewPrice('');


    }

    const HandleRideUpdate = async (e) => {
        e.preventDefault();

        const body = { oldRideName, newRideParkID, newRideThrill, newRideCapacity };
        const response = await fetch(rideUrl, {
            method: "PUT",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(body)
        });

        console.log(response);
        alert("Ride successfully updated!");
        window.location.reload(false);

        setOldRideName('');
        setNewRideParkID('');
        setNewRideThrill('');
        setNewRideCapacity('');
    }

    return (
        <>
            <div className = "box-container1">
                <div className = "text-container">
                {/* <h2>Update Ride Options</h2>
                    <div className="name">
                        <form onSubmit={HandleRideUpdate}>
                            <label>Existing Ride Name: </label>
                                <input 
                                    type ="textbox"
                                    value={oldRideName}
                                    onChange={e => setOldRideName(e.target.value)}
                                    required />

                            <div className="formspace"></div>
                            <label>Park ID: </label>
                                <input
                                    type="number"
                                    min="1"
                                    max="5"
                                    value = {newRideParkID}
                                    onChange = {e => setNewRideParkID(e.target.value)}
                                    required />
                            <br></br>
                            <br></br>


                            <div className="formspace"></div>
                            <label>Thrill Level: </label>
                                <input
                                    type="number"
                                    min="1"
                                    max="10"
                                    value = {newRideThrill}
                                    onChange = {e => setNewRideThrill(e.target.value)}
                                    required />

                            <div className="formspace"></div>
                            <label>Capacity: </label>
                                <input
                                    type="number"
                                    min="1"
                                    value = {newRideCapacity}
                                    onChange = {e => setNewRideCapacity(e.target.value)}
                                    required />
                                    
                            <input type="submit" value="Update Ride" />
                        </form>                        
                    </div> */}
                    
                    <br></br>

                    <h2>Update Dining Options</h2>

                    {/* <div>
                        <form action="">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input 
                                    value={oldDiningName} 
                                    onChange={e => setDiningOldName(e.target.value)} 
                                    id = "name" 
                                    className="form-control" 
                                    type="text" 
                                    required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="parkid">parkid</label>
                                <input 
                                    value={newDiningParkID}
                                    onChange={e => setDiningNewParkID(e.target.value)}
                                    id = "parkid" 
                                    className="form-control" 
                                    type="number" 
                                    min="1" 
                                    max="5" 
                                    required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="price">price</label>
                                <input 
                                    value={newDiningPrice}
                                    onChange={e => setDiningNewPrice(e.target.value)}                                
                                    id = "price" 
                                    className="form-control" 
                                    type="text" 
                                    required />
                            </div>
                            <button type="submit" onClick={e => HandleDiningUpdate(e)} className="btn btn-primary">Update</button>
                        </form>
                    </div> */}


                    <div className="name">
                        <form onSubmit={e => HandleDiningUpdate(e)}>
                            <label>Existing Dining Name: </label>
                                <input 
                                    type ="text"
                                    name="name"
                                    value={oldDiningName}
                                    onChange={e => setDiningOldName(e.target.value)}
                                    required />
                            <br></br>
                            <br></br>

                            <div className="formspace"></div>
                            <label>Park Id: </label>
                                <input
                                    type="number"
                                    min="1"
                                    max="5"
                                    value = {parseInt(newDiningParkID)}
                                    onChange = {e => setDiningNewParkID(e.target.value)}
                                    required />

                            <div className="formspace"></div>
                            <label>Price: </label>
                                <input
                                    type = "text"
                                    value = {newDiningPrice}
                                    onChange = {e => setDiningNewPrice(e.target.value)}
                                    required />

                            <input type="submit" value="Update Dining" />
                        </form>                        
                    </div>                        

                    
                </div>
            </div>          

        </>
    );
};

export default Updates;
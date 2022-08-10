import React, { Fragment, useState } from "react";

const EditFoods = ({foods}) => {
    const [name, setName] = useState(foods.name);
    const [park_id, setID] = useState(foods.park_id);
    const [price, setPrice] = useState(foods.price);

    const [showForm, setShowForm] = useState(false);

    const updateAll = async e => {
        e.preventDefault();
        try {
            const body = {name, park_id, price};
            const response = await fetch(`http://localhost:8000/food/${foods.name}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })
            window.location = '/staffview'
        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <Fragment>
            {showForm ? (
                <form>
                    <div class="modal" id={`id${foods.name}`}>

                        <div class="modal-body">
                            <label>Name:</label>        
                            <input type="text" className="form-control" value = {name} onChange={e => setName(e.target.value)}/>
                            <label>Park ID:</label>        
                            <input type="number" min="1" max="5" className="form-control" value = {park_id} onChange={e => setID(e.target.value)}/>
                            <label>Price:</label>        
                            <input type="text" className="form-control" value = {price} onChange={e => setPrice(e.target.value)}/>
                        </div>
            
                        <div class="modal-footer">
                            <button type="button" class="btn" data-dismiss="modal" onClick = {e => updateAll(e)}>Edit</button>
                            <button type="button" class="close" onClick={() => setShowForm(false)}>Close</button>
                        </div>

                    </div>
                </form>
                ) : 
                (<button type="button" class="btn" onClick={() => setShowForm(true)}  data-target={`#id${foods.name}`}> Edit </button>)
            }
            
        </Fragment>
    );
};

export default EditFoods;
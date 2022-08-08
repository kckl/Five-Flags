// import React, { Fragment , useState} from "react";
// import './EditFood.css';


// const EditFood = ({food}) => {

//     console.log(food);
//     const [name, setName] = useState(food.name);
//     const [park_id, setParkID] = useState(food.park_id);
//     const [price, setPrice] = useState(food.price);

//     const updateName = async e => {
//         e.preventDefault();
//         try {
//             const body = {name}; 
//             const response = await fetch(`http://localhost:8000/food/${food.name}`, {
//                 method : "PUT",
//                 headers: {"Content-Type": "application/json" },
//                 body: JSON.stringify(body)
//             });
// console.log(response);
//             window.location = "/StaffView";
//         } catch (err) {
//             console.error(err.message);
//         }
        
//     }


//     return (
//         <Fragment>
//             <button 
//                 type="button" 
//                 class="btn btn-warning" 
//                 data-toggle="modal" 
//                 data-target={`#id${food.name}`}>
//             Edit
//             </button>

//             <div class="modal" id={`id${food.name}`}>
//                 <div class="modal-dialog">
//                     <div class="modal-content">
//                         <div class="modal-header">
//                             <h4 class="modal-title">Edit food</h4>
//                             <button 
//                                 type="button" 
//                                 class="close" 
//                                 data-dismiss="modal">&times;
//                             </button>
//                         </div>

//                 <div class="modal-body">
//                     <label>Name:</label>
//                     <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)}/>

//                     <label>Park ID:</label>
//                     <input type="text" className="form-control" value={park_id} onChange={e => setParkID(e.target.value)}/>

//                     <label>Price:</label>
//                     <input type="text" className="form-control" value={price} onChange={e => setPrice(e.target.value)}/>

//                 </div>

//                 <div class="modal-footer">
//                     <button 
//                         type="button" 
//                         class="btn btn-warning" 
//                         data-dismiss="modal"
//                         onClick = {e => updateName(e)}>Edit</button>
//                     <button 
//                         type="button" 
//                         class="btn btn-danger" 
//                         data-dismiss="modal">Close</button>
//                 </div>

//                 </div>
//             </div>
//             </div>
//         </Fragment>
//     )
// }

// export default EditFood;


import React, { Fragment, useState } from "react";
import './EditFoods.css'

const EditFoods = ({foods}) => {
    const [name, setName] = useState(foods.name);
    const [park_id, setID] = useState(foods.park_id);
    const [price, setPrice] = useState(foods.price);

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
            <button type="button" class="btn btn-warning" data-toggle="modal" data-target={`#id${foods.name}`}>
            Edit
            </button>
            
            <div class="modal" id={`id${foods.name}`}>
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">Edit Foods</h4>
                            <button type="button" class="close" data-dismiss="modal">
                                &times;
                            </button>
                        </div>

                        <div class="modal-body">
                            <label>Name:</label>        
                            <input type="text" className="form-control" value = {name} onChange={e => setName(e.target.value)}/>
                            <label>Park ID:</label>        
                            <input type="number" min="1" max="5" className="form-control" value = {park_id} onChange={e => setID(e.target.value)}/>
                            <label>Price:</label>        
                            <input type="text" className="form-control" value = {price} onChange={e => setPrice(e.target.value)}/>
                        </div>
            
                        <div class="modal-footer">
                            <button type="button" class="btn btn-warning" data-dismiss="modal" onClick = {e => updateAll(e)}>Edit</button>
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>

                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default EditFoods;
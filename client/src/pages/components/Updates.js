// import React, { useRef, useState } from "react";
// import './Updates.css';

// const Updates = () => {

//     // const diningName = useRef(null);
//     // const diningPrice = useRef(null);
//     // const diningParkID = useRef(null);
//     // const [result, setResult] = useState(null);

//     // async function handleDining() {
//     //     const name = diningName.current.value;

//     //     if (name) {
//     //         const updateData = {
//     //             price: diningPrice.current.value,
//     //             park_id: diningParkID.current.value
//     //         };

//     //         const res = await fetch(`http://localhost:8000/food/${name}`, {
//     //             method: "PUT",
//     //             headers: { "Content-Type": "application/json"},
//     //             body: JSON.stringify(updateData)
//     //         })

//     //         const data = await res.json();
//     //         setResult(data);
//     //     }
//     //     console.log(name);
//     // }

//     // // const HandleDiningUpdate = async (e) => {
//     // //     e.preventDefault();

//     // //     const body = { oldDiningName, newDiningParkID, newDiningPrice };
//     // //     const response = await fetch(`http://localhost:8000/food/${body[oldDiningName]}`, {
//     // //         method: "PUT",
//     // //         headers: { "Content-Type": "application/json"},
//     // //         body: JSON.stringify(body)
//     // //     });

//     // //     console.log(body);
//     // //     console.log(response);
//     // //     // alert("Restaurant successfully updated!");
        
//     // //     // setDiningOldName('');
//     // //     // setDiningNewParkID('');
//     // //     // setDiningNewPrice('');


//     // // }

//     // return (
//     //     <>
//     //         <div className = "box-container1">
//     //             <div className = "text-container">
                
//     //                 <h2>Update Dining Options</h2>

//     //                 <div className="name">
//     //                     <form onSubmit={handleDining}>
//     //                         <label>Existing Dining Name: </label>
//     //                             <input 
//     //                                 type ="text"
//     //                                 name="name"
//     //                                 ref={diningName}
//     //                                 required />

//     //                         <div className="formspace"></div>
//     //                         <label>Park Id: </label>
//     //                             <input
//     //                                 type="number"
//     //                                 min="1"
//     //                                 max="5"
//     //                                 ref = {diningParkID}
//     //                                 required />

//     //                         <div className="formspace"></div>
//     //                         <label>Price: </label>
//     //                             <input
//     //                                 type = "text"
//     //                                 ref = {diningPrice}
//     //                                 required />

//     //                         <input type="submit" value="Update Dining" />
//     //                     </form>                        
//     //                 </div>                        
//     //             </div>
//     //         </div>          
//     //     </>
//     // );
// };

// export default Updates;
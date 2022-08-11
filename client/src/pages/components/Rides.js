import React from "react";
import "../../css/Rides.css"
import radiator from "../../images/radiator.png";

const Rides = (props) => {

    
    return (
        <>
        
            <div className="ride-box-container">
                <img src={props.img}/>
                <p>{props.name}</p>
            </div>
                    
            
        </>
    )
}

export default Rides;
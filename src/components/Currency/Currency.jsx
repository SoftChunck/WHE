import React from "react";
import './Currency.css'
const Currency = (props) => {
    return (
        <div className="currency col-lg-3 col-md-5 row d-flex flex-row align-items-center justify-content-around px-1 py-3">
            <img src={props.data.image} className="col-md-4 col-5 p-3"/>
            <div className="col-7 col-md-6 justify-content-start">                
                <h5 className="fs-6">{props.data.heading}</h5>
                <h1 className="fs-3">{props.data.price}</h1>
            </div>
        </div>
    );
} 
export default Currency;
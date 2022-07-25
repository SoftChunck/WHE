import React from "react";
import './Benefits.css'
const Benefits = (props) => {
    return (
        <div className="col-xl-2 col-lg-4 col-md-5 col-10 Benefits text-start p-5">
            <h2 className="h4">{props.data.heading}</h2>
            <p>{props.data.desc}</p>
        </div>
    );
} 
export default Benefits;
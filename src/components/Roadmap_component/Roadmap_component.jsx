import React from "react";
import './Roadmap_component.css';
const Roadmap_component = (props) => {
    return (        
        <div className="road-map col-lg-4 col-xl-3 col-md-7 gx-5 p-5 m-5">
            <p className="m-0">{props.data.desc}</p>
        </div>
    );
} 
export default Roadmap_component;
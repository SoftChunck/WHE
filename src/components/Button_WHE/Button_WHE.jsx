import React from "react";
import './Button_WHE.css'
const Button_WHE = (props) => {
    return (
        <button className="Button_WHE px-5 py-3">
            {props.data} 
        </button>
    );
} 
export default Button_WHE;
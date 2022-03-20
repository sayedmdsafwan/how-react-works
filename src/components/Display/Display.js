import React from "react";
import Dial from "../Dial/Dial";

const Display = (props) => {
    return (
        <div
            style={{
                border: "2px solid salmon",
                margin: "10px",
            }}
        >
            <h3>The display name: {props.name}</h3>
            <p>Total steps today: {props.steps}</p>
            <Dial steps={props.steps}></Dial>
        </div>
    );
};

export default Display;

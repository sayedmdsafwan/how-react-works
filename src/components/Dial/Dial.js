import React from "react";

const Dial = (props) => {
    return (
        <div
            style={{
                border: "2px solid gray",
                margin: "10px",
            }}
        >
            <h3>Steps so far: {props.steps}</h3>
        </div>
    );
};

export default Dial;

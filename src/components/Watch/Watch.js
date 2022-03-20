import React, { useEffect, useState } from "react";
import Display from "../Display/Display";

const Watch = () => {
    const [steps, setSteps] = useState(0);

    const increaseStep = () => {
        const newSteps = steps + 1;
        setSteps(newSteps);
    };

    useEffect(() => {
        console.log(steps);
    }, [steps]);

    return (
        <div style={{ border: "2px solid coral", margin: "10px" }}>
            <h1>watch</h1>
            <h3>Steps: {steps}</h3>
            <button onClick={increaseStep}>De dour</button>
            <Display name="Safwan-watch" steps={steps}></Display>
        </div>
    );
};

export default Watch;

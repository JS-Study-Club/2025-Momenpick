import React from "react";
import "./SelectFrame.css";

const SelectFrame = () => {
    return(
        <div className="selectFrame-background">
            <img
                className="designer"
                src="/images/designerSelect.png" 
                alt="Designer"
                width={507}
                height={805}
            />
            <img
                className="developer"
                src="/images/developerSelect.png" 
                alt="Developer"
                width={507}
                height={805}
            />
            <img
                className="teacher"
                src="/images/teacherSelect.png" 
                alt="Teacher"
                width={499}
                height={366}
            />
            <img
                className="summer"
                src="/images/summerSelect.png" 
                alt="Summer"
                width={499}
                height={409}
            />
        </div>
    );
};

export default SelectFrame;

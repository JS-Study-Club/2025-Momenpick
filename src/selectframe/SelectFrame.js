import React from "react";
import { useNavigate } from "react-router-dom";
import "./SelectFrame.css";

const SelectFrame = () => {
    const navigate = useNavigate();

    return(
        <div className="select-background">
            <img
                className="designer"
                src="/images/designerSelect.png" 
                alt="Designer"
                width={507}
                height={805}
                onClick={() => navigate("/Designer")}
                style={{ cursor: "pointer" }}
            />
            <img
                className="developer"
                src="/images/developerSelect.png" 
                alt="Developer"
                width={507}
                height={805}
                onClick={() => navigate("/Developer")}
                style={{ cursor: "pointer" }}
            />
            <img
                className="teacher"
                src="/images/teacherSelect.png" 
                alt="Teacher"
                width={499}
                height={366}
                onClick={() => navigate("/Teacher")}
                style={{ cursor: "pointer" }}
            />
            <img
                className="summer"
                src="/images/summerSelect.png" 
                alt="Summer"
                width={499}
                height={409}
                onClick={() => navigate("/Summer")}
                style={{ cursor: "pointer" }}
            />
        </div>
    );
};

export default SelectFrame;

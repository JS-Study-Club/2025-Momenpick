import React from "react";
import { useNavigate } from "react-router-dom";
import "./SelectFrame.css";

const SelectFrame = () => {
    const navigate = useNavigate();

    const goToResult = (design) => {
        navigate(`/selectsize/${design}`); // 선택한 직업을 URL에 전달
      };

    return(
        <div className="selectFrame-background">
            <img
                className="designer"
                src="/images/designerSelect.png" 
                alt="Designer"
                width={507}
                height={805}
                onClick={() => goToResult("designer")}
                style={{ cursor: "pointer" }}
            />
            <img
                className="developer"
                src="/images/developerSelect.png" 
                alt="Developer"
                width={507}
                height={805}
                onClick={() => goToResult("developer")}
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

import React from "react";
import { useNavigate } from "react-router-dom";
import "./SelectFrameTeacher.css";

const SelectFrameTeacher = () => {
 const navigate = useNavigate();
 
  return (
    <div className="selectFrame-background">
      <img
          src="images/backBtn.png"
          alt="Back"
          className="backBtn"
          onClick={() => navigate("/SelectFrame")}
        />
    </div>
  );
};

export default SelectFrameTeacher;

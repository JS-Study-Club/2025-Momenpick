import React from "react";
import { useNavigate } from "react-router-dom";
import "./SelectSizeDesigner.css";

const SelectSizeDesigner = () => {
 const navigate = useNavigate();
  return (
    <div className="select-background">
      <div className="Select-header"> 
        <img
          src="images/backBtn.png"
          alt="Back"
          className="backBtn"
          onClick={() => navigate("/SelectFrame")}
        />
        <div id="title">프레임 크기를 선택해주세요.</div>
      </div>
    </div>
  );
};

export default SelectSizeDesigner;

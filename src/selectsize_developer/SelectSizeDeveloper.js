import React from "react";
import { useNavigate } from "react-router-dom";
import "./SelectSizeDeveloper.css";

const SelectSizeDeveloper = () => {
  const navigate = useNavigate();
  return (
    <div className="selectSize-background">
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

export default SelectSizeDeveloper;

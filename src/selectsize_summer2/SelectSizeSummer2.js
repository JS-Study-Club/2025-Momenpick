import React from "react";
import { useNavigate } from "react-router-dom";
import "./SelectSizeSummer2.css";

const SelectSizeSummer2 = () => {
 const navigate = useNavigate();
  return (
    <div className="select-background">
      <div className="Select-header"> 
        <img
          src="images/backBtn.png"
          alt="Back"
          className="backBtn"
          onClick={() => navigate("/Summer")}
        />
        <div id="title">프레임 크기를 선택해주세요.</div>
      </div>
    </div>
  );
};

export default SelectSizeSummer2;

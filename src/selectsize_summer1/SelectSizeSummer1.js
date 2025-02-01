import React from "react";
import { useNavigate } from "react-router-dom";
import "./SelectSizeSummer1.css";

const SelectSizeSummer1 = () => {
 const navigate = useNavigate();
  return (
    <div className="selectSize-background">
      <div className="Select-header"> 
        <img
          src="images/backBtn.png"
          alt="Back"
          className="backBtn"
          onClick={() => navigate("/Summer")}
        />
        <div id="title">프레임 크기를 선택해주세요.</div>
      </div>
      <img
      src="images/ex_summer1-1.png"
      alt="summer1세로예시"
      className="summer1-1"
      width={414}
      height={614}
      />
      <img
      src="images/ex_summer1-2.png"
      alt="summer1가로예시"
      className="summer1-2"
      width={598}
      height={614}
      />
    </div>
  );
};

export default SelectSizeSummer1;

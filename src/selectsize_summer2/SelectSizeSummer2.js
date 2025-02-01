import React from "react";
import { useNavigate } from "react-router-dom";
import "./SelectSizeSummer2.css";

const SelectSizeSummer2 = () => {
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
      src="images/ex_summer2-1.png"
      alt="summer2세로예시"
      className="summer2-1"
      width={414}
      height={614}
      />
      <img
      src="images/ex_summer2-2.png"
      alt="summer2가로예시"
      className="summer2-2"
      width={598}
      height={614}
      />
    </div>
  );
};

export default SelectSizeSummer2;
